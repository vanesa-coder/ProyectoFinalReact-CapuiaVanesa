
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSAufTaiL_Vxd3dbGS9J7VXn6anzKK-kY",
  authDomain: "bijouivane.firebaseapp.com",
  projectId: "bijouivane",
  storageBucket: "bijouivane.appspot.com",
  messagingSenderId: "314319025604",
  appId: "1:314319025604:web:0138e5ea02d622d4be6091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)