import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJfrEqHm4vS0S_0WKrdGxtxL2AgiuC4-I",
  authDomain: "gamerzone-ecommerce.firebaseapp.com",
  projectId: "gamerzone-ecommerce",
  storageBucket: "gamerzone-ecommerce.appspot.com",
  messagingSenderId: "636061284428",
  appId: "1:636061284428:web:a5ea68369f027756831ce9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
