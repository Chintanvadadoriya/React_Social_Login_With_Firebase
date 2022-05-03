// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: <YOURAPIKEY />,
//   authDomain: <YOURAUTHDOAMIN />,
//   projectId: <YOURPROJECTID />,
//   storageBucket: <YOURSTORAGEBUCKET />,
//   messagingSenderId: <YOURMESSAGINGSENDERID />,
//   appId: <YOURAPPID />,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvU7u9hYTWtvRFE6cmaUQJoR1u6KhiMLQ",
  authDomain: "reactjs-44df1.firebaseapp.com",
  projectId: "reactjs-44df1",
  storageBucket: "reactjs-44df1.appspot.com",
  messagingSenderId: "622903665596",
  appId: "1:622903665596:web:f04b0619389517953541b9",
  measurementId: "G-42KSEV7YJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
