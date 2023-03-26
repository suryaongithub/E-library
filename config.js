// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB6I-itPDae1O6-J8FqhuWjgxTK8PXFlQg",
      authDomain: "e-library-4dfa1.firebaseapp.com",
      projectId: "e-library-4dfa1",
      storageBucket: "e-library-4dfa1.appspot.com",
      messagingSenderId: "163836380451",
      appId: "1:163836380451:web:43dce2cf8470b997ddf896",
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app.firestore

// import firebase from "firebase";
// // require("@firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyB6I-itPDae1O6-J8FqhuWjgxTK8PXFlQg",
//   authDomain: "e-library-4dfa1.firebaseapp.com",
//   projectId: "e-library-4dfa1",
//   storageBucket: "e-library-4dfa1.appspot.com",
//   messagingSenderId: "163836380451",
//   appId: "1:163836380451:web:43dce2cf8470b997ddf896",
// };
// firebase.initializeApp(firebaseConfig);

// export default firebase
