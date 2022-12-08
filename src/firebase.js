import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNZpPIQs_B22ykOx2x46zoi76KEdtqw8k",
  authDomain: "todos-f1427.firebaseapp.com",
  projectId: "todos-f1427",
  storageBucket: "todos-f1427.appspot.com",
  messagingSenderId: "820343517448",
  appId: "1:820343517448:web:ed088fc76605cff1aa3cbd",
  databaseURL: "https://todos-f1427-default-rtdb.europe-west1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;