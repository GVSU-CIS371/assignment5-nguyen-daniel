<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <ul>
      <li>
        <template v-for="b in beverageStore.bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="bases"
              :id="`r${b.id}`"
              :value="b"
              v-model="beverageStore.currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>
    </ul>

    <ul>
      <li>
        <template v-for="s in beverageStore.syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrups"
              :id="`r${s.id}`"
              :value="s"
              v-model="beverageStore.currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>

    <ul>
      <li>
        <template v-for="c in beverageStore.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamers"
              :id="`r${c.id}`"
              :value="c"
              v-model="beverageStore.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>

    <div class="auth-row">
      <div v-if="!beverageStore.user">
        <button @click="withGoogle">Sign in with Google</button>
      </div>
      <div v-else class="user-info">
        <span class="user-label">
          Signed in as: {{ beverageStore.user.displayName || beverageStore.user.email }}
        </span>
        <button @click="signOut">Sign out</button>
      </div>
    </div>

    <input
      v-model="beverageStore.currentName"
      type="text"
      placeholder="Beverage Name"
      :disabled="!beverageStore.user"
    />

    <button 
      @click="handleMakeBeverage" 
      :disabled="!beverageStore.user"
    >
      🍺 Make Beverage
    </button>

    <p v-if="message" class="status-message">
      {{ message }}
    </p>
  </div>

  <div v-if="beverageStore.user" style="margin-top: 20px">
    <h3 v-if="beverageStore.beverages.length === 0" class="no-beverages">
      No saved beverages
    </h3>
    <template v-else>
      <template v-for="beverage in beverageStore.beverages" :key="beverage.id">
        <div class="beverage-item">
          <input
            type="radio"
            :id="beverage.id"
            :value="beverage"
            v-model="beverageStore.currentBeverage"
            @change="beverageStore.showBeverage()"
          />
          <label :for="beverage.id">{{ beverage.name }}</label>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { app } from "./firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

const beverageStore = useBeverageStore();
beverageStore.init();

const message = ref("");
const auth = getAuth(app);
let authUnsubscribe: (() => void) | null = null;

const showMessage = (txt: string) => {
  message.value = txt;
  setTimeout(() => {
    message.value = "";
  }, 5000);
};

const withGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    // setUser will be called by the auth state listener
  } catch (error: any) {
    console.error("Error signing in:", error);
    let errorMessage = error.message || "Unknown error";
    
    // Provide helpful message for common configuration errors
    if (error.code === "auth/operation-not-allowed") {
      errorMessage = "Google sign-in is not enabled. Please enable it in Firebase Console > Authentication > Sign-in method";
    } else if (error.code === "auth/popup-closed-by-user") {
      errorMessage = "Sign-in popup was closed. Please try again.";
    }
    
    showMessage(`Sign in error: ${errorMessage}`);
  }
};

const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    // setUser will be called by the auth state listener
    showMessage("Signed out successfully");
  } catch (error: any) {
    console.error("Error signing out:", error);
    showMessage(`Sign out error: ${error.message || "Unknown error"}`);
  }
};

const handleMakeBeverage = async () => {
  const txt = await beverageStore.makeBeverage();
  showMessage(txt);
};

// Set up auth state listener
onMounted(() => {
  authUnsubscribe = onAuthStateChanged(auth, (user: User | null) => {
    beverageStore.setUser(user);
  });
});

onUnmounted(() => {
  if (authUnsubscribe) {
    authUnsubscribe();
  }
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}

.auth-row {
  margin-top: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-label {
  color: #ffffff;
  font-size: 0.9rem;
}

.hint {
  margin-top: 4px;
  color: #ffffff;
  font-size: 0.85rem;
}

.status-message {
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 4px;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  font-size: 0.9rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-label {
  color: #ffffff;
  font-size: 0.9rem;
}

.beverage-item {
  margin: 4px 0;
}

.no-beverages {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: normal;
  margin: 10px 0;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
