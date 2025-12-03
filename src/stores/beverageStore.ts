import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";
import db from "../firebase.ts";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  onSnapshot,
  query,
  where,
  Unsubscribe,
} from "firebase/firestore";
import type { User } from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    user: null as User | null,
    snapshotUnsubscribe: null as Unsubscribe | null,
  }),

  actions: {
    init() {
      const baseCollection = collection(db, "bases");
      getDocs(baseCollection)
        .then((qs: QuerySnapshot) => {
          if (qs.empty) {
            bases.forEach((b) => {
              const base = doc(db, `bases/${b.id}`);
              setDoc(base, { name: b.name, color: b.color })
                .then(() => {
                  console.log(`New base with ID ${b.id} inserted`);
                })
                .catch((error: any) => {
                  console.error("Error adding document: ", error);
                });
            });
            this.bases = bases;
          } else {
            this.bases = qs.docs.map((qd: QueryDocumentSnapshot) => ({
              id: qd.id,
              name: qd.data().name,
              color: qd.data().color,
            })) as BaseBeverageType[];
          }
          this.currentBase = this.bases[0];
          console.log("getting bases: ", this.bases);
        })
        .catch((error: any) => {
          console.error("Error getting documents:", error);
        });
      const syrupCollection = collection(db, "syrups");
      getDocs(syrupCollection)
        .then((qs: QuerySnapshot) => {
          if (qs.empty) {
            syrups.forEach((b) => {
              const syrup = doc(db, `syrups/${b.id}`);
              setDoc(syrup, { name: b.name, color: b.color })
                .then(() => {
                  console.log(`New syrup with ID ${b.id} inserted`);
                })
                .catch((error: any) => {
                  console.error("Error adding document: ", error);
                });
            });
            this.syrups = syrups;
          } else {
            this.syrups = qs.docs.map((qd: QueryDocumentSnapshot) => ({
              id: qd.id,
              name: qd.data().name,
              color: qd.data().color,
            })) as SyrupType[];
            console.log("getting syrups: ", this.syrups);
          }
          this.currentSyrup = this.syrups[0];
        })
        .catch((error: any) => {
          console.error("Error getting syrups:", error);
        });

      const creamerCollection = collection(db, "creamers");
      getDocs(creamerCollection)
        .then((qs: QuerySnapshot) => {
          if (qs.empty) {
            creamers.forEach((b) => {
              const creamer = doc(db, `creamers/${b.id}`);
              setDoc(creamer, { name: b.name, color: b.color })
                .then(() => {
                  console.log(`New creamer with ID ${b.id} inserted`);
                })
                .catch((error: any) => {
                  console.error("Error adding document: ", error);
                });
            });
            this.creamers = creamers;
          } else {
            this.creamers = qs.docs.map((qd: QueryDocumentSnapshot) => ({
              id: qd.id,
              name: qd.data().name,
              color: qd.data().color,
            })) as CreamerType[];

            console.log("getting creamers: ", this.creamers);
          }
          this.currentCreamer = this.creamers[0];
        })
        .catch((error: any) => {
          console.error("Error getting creamers:", error);
        });
    },

    showBeverage() {
      if (!this.currentBeverage) return;
      this.currentName = this.currentBeverage.name;
      this.currentTemp = this.currentBeverage.temp;
      this.currentBase = this.currentBeverage.base;
      this.currentSyrup = this.currentBeverage.syrup;
      this.currentCreamer = this.currentBeverage.creamer;
      console.log(
        `currentBeverage changed`,
        this.currentBase,
        this.currentCreamer,
        this.currentSyrup
      );
    },

    setUser(user: User | null) {
      // Stop previous listener if it exists
      if (this.snapshotUnsubscribe) {
        this.snapshotUnsubscribe();
        this.snapshotUnsubscribe = null;
      }

      // Save the user
      this.user = user;

      // Clear beverages if no user
      if (!user) {
        this.beverages = [];
        this.currentBeverage = null;
        return;
      }

      // Start new listener for the user's beverages
      const beveragesQuery = query(
        collection(db, "beverages"),
        where("uid", "==", user.uid)
      );

      this.snapshotUnsubscribe = onSnapshot(
        beveragesQuery,
        (snapshot) => {
          const previousBeverageIds = new Set(this.beverages.map((b) => b.id));
          this.beverages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as BeverageType[];

          // If a new beverage was added (not in previous list), set it as current
          const newBeverage = this.beverages.find(
            (b) => !previousBeverageIds.has(b.id)
          );
          if (newBeverage) {
            this.currentBeverage = newBeverage;
          } else if (this.currentBeverage) {
            // Update currentBeverage if it still exists in the list
            const found = this.beverages.find(
              (b) => b.id === this.currentBeverage?.id
            );
            if (found) {
              this.currentBeverage = found;
            } else {
              this.currentBeverage = null;
            }
          }
        },
        (error) => {
          console.error("Error listening to beverages:", error);
        }
      );
    },

    async makeBeverage(): Promise<string> {
      // Check if user is signed in
      if (!this.user) {
        return "No user logged in, please sign in first.";
      }

      // Check if all required fields are filled
      if (
        !this.currentName.trim() ||
        !this.currentBase ||
        !this.currentCreamer ||
        !this.currentSyrup
      ) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      // Build unique beverage id
      const beverageId = `beverage-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // Create beverage object
      const newBeverage: BeverageType = {
        id: beverageId,
        uid: this.user.uid,
        name: this.currentName.trim(),
        temp: this.currentTemp,
        base: { ...this.currentBase },
        syrup: { ...this.currentSyrup },
        creamer: { ...this.currentCreamer },
      };

      try {
        // Write to Firestore
        // The Firestore listener will automatically update the beverages array
        // and set currentBeverage when it detects the new beverage
        await setDoc(doc(db, "beverages", beverageId), newBeverage);

        // Clear the name field
        this.currentName = "";

        return `Beverage ${newBeverage.name} made successfully!`;
      } catch (error) {
        console.error("Error making beverage:", error);
        return "Error making beverage. Please try again.";
      }
    },
  },
});
