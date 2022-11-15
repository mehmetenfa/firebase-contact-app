
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuFoBXIDPk_ZsDMCI5K0W8cDkUBwb_jDk",
  authDomain: "fir-contact-b87c7.firebaseapp.com",
  projectId: "fir-contact-b87c7",
  storageBucket: "fir-contact-b87c7.appspot.com",
  messagingSenderId: "584968889135",
  appId: "1:584968889135:web:ff9554786534348486f7da"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;