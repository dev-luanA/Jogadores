import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA517cCGVB-k2QP5WXejbIxvTLQNFp7Ycs",
  authDomain: "auth-firebase-projeto-au-53c70.firebaseapp.com",
  projectId: "auth-firebase-projeto-au-53c70",
  storageBucket: "auth-firebase-projeto-au-53c70.appspot.com",
  messagingSenderId: "554363081306",
  appId: "1:554363081306:web:fd53e6e824470239cbbe63",
  measurementId: "G-B456V09Q79"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;