import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-khCv0ldxlMtHaPbnTxol92gkRjxDWHc",
  authDomain: "southern-maine-concrete.firebaseapp.com",
  projectId: "southern-maine-concrete",
  storageBucket: "southern-maine-concrete.appspot.com",
  messagingSenderId: "500652997648",
  appId: "1:500652997648:web:b5751375b3fb23a0e8de95",
  measurementId: "G-14C1WQY0LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);