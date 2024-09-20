// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYJ2dhpLks6mV6ihKFaBaSVWnCecNrGw8",
  authDomain: "today-40371.firebaseapp.com",
  projectId: "today-40371",
  storageBucket: "today-40371.appspot.com",
  messagingSenderId: "285111354905",
  appId: "1:285111354905:web:bdd169cd2b1c42a20c4c88",
  measurementId: "G-HJ5C3XNNXK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const login_btn = document.getElementById('login_btn');
const email = document.getElementById('email');
const password = document.getElementById('password');

login_btn.addEventListener("click", createUser);

function createUser() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      if (email.value === 'admin@example.com' && password.value === 'admin123') {
        document.getElementById('adminSection').style.display = 'block';
      } else if (email.value === 'student@example.com' && password.value === 'student123') {
        document.getElementById('studentSection').style.display = 'block';
      } else {
        alert('Invalid credentials!');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); 
    });
}
