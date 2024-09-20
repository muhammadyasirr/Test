import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc  // Use setDoc to create or update a document
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYJ2dhpLks6mV6ihKFaBaSVWnCecNrGw8",
    authDomain: "today-40371.firebaseapp.com",
    projectId: "today-40371",
    storageBucket: "today-40371.appspot.com",
    messagingSenderId: "285111354905",
    appId: "1:285111354905:web:bdd169cd2b1c42a20c4c88",
    measurementId: "G-HJ5C3XNNXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Get form elements
const cnic = document.getElementById('cnic');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const editProfileBtn = document.getElementById('editProfileBtn');

// Add event listener to the Edit Profile button
editProfileBtn.addEventListener('click', async function() {
    const updatedData = {
        cnic: cnic.value,
        firstName: firstName.value,
        lastName: lastName.value,
    };

    const cnicValue = cnic.value;

    if (!cnicValue) {
        alert('Please enter a valid CNIC');
        return;
    }

    try {
        // Reference to the document with CNIC as the document ID
        const userRef = doc(db, 'students', cnicValue);
        
        // Use setDoc to create or update the document
        await setDoc(userRef, updatedData);  // setDoc will create the document if it doesn't exist
        alert('Profile updated successfully');
    } catch (error) {
        console.error("Error updating profile: ", error);
        alert('Error updating profile: ' + error.message);
    }
});



// // Check result functionality
// const checkResultForm = document.getElementById('checkResultForm');
// checkResultForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const cnic = document.getElementById('cnicResult').value;
//     const resultDisplay = document.getElementById('resultDisplay');
//     resultDisplay.innerHTML = '';

//     // Retrieve student results from Firestore
//     db.collection('marks').where('cnic', '==', cnic).get().then(querySnapshot => {
//         if (querySnapshot.empty) {
//             resultDisplay.innerHTML = 'No results found.';
//         } else {
//             querySnapshot.forEach(doc => {
//                 const data = doc.data();
//                 resultDisplay.innerHTML += `
//                     <p>Course: ${data.course}</p>
//                     <p>Marks: ${data.marks}/${data.totalMarks}</p>
//                     <p>Grade: ${data.grade}</p>
//                     <hr>
//                 `;
//             });
//         }
//     }).catch(error => {
//         console.error('Error retrieving results: ', error);
//     });
// });
