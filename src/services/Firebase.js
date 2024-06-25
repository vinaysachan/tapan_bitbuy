// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig    =   {
    apiKey                  :   "AIzaSyBa4nR6MAqH-inkFOyavDY29paOCu_m4hE",
    authDomain              :   "ledger-001-262f3.firebaseapp.com",
    projectId               :   "ledger-001-262f3",
    storageBucket           :   "ledger-001-262f3.appspot.com",
    messagingSenderId       :   "913009375628",
    appId                   :   "1:913009375628:web:621a8fa77bdb186eed7ea9",
    measurementId           :   "G-31EWK78KZV"
};

const app               =   initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db         =   getFirestore(app);