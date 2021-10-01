import { getAuth } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCjrV4xkZOzzGiKa-TH_U2ndNOfjbH_zAc",
    authDomain: "norm-tv.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "norm-tv.appspot.com"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();

  export { app, db, auth }

