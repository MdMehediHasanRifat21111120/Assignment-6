import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOB0N726YeyWk4hwnxEaQLJ1N9phF-lYw",
  authDomain: "learnfirebase-b588c.firebaseapp.com",
  projectId: "learnfirebase-b588c",
  storageBucket: "learnfirebase-b588c.firebasestorage.app",
  messagingSenderId: "494874244830",
  appId: "1:494874244830:web:139eb5b185e91098e8744f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;
