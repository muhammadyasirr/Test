import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

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
const db = getFirestore(app)
// console.log(db)

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cnic = document.getElementById('cnic')

const Add_btn = document.getElementById('Add_btn')

Add_btn.addEventListener("click", addStudentData)

addStudentData()
async function addStudentData() {

    const StudentData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        cnic: cnic.value,
    }

    console.log("Student Data:", StudentData);

    try {
        const addStudentData = collection(db, "addStudentData");
        const docRef = await addDoc(addStudentData, StudentData);

        console.log("Document written with ID: ", docRef.id);
        alert('Student added successfully!');
    } catch (e) {
        console.error("Error adding document: ", e);
        alert('Error adding student: ' + e.message);
    }
}

GetStudentData()
async function GetStudentData() {
    try {
        const addStudentData = collection(db, "addStudentData");
        const querySnapshot = await getDocs(addStudentData);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
    } catch (e) {
        console.error("Error fetching student data: ", e);
    }
}

const course = document.getElementById('course')
const studentId = document.getElementById('studentId')
const marks = document.getElementById('marks')
const totalMarks = document.getElementById('totalMarks')
const grade = document.getElementById('grade')

const Upload_btn = document.getElementById('Upload_btn')

Upload_btn.addEventListener("click", UploadStudentMarks)

UploadStudentMarks()
async function UploadStudentMarks() {

    const StudentMarks = {
        course: course.value,
        studentId: studentId.value,
        marks: marks.value,
        totalMarks: totalMarks.value,
        grade: grade.value,
    }

    console.log("Student Data:", StudentMarks);

    try {
        const UploadStudentMarks = collection(db, "UploadStudentMarks");
        const docRef = await addDoc(UploadStudentMarks, StudentMarks);

        console.log("Document written with ID: ", docRef.id);
        alert('Student added successfully!');
    } catch (e) {
        console.error("Error adding document: ", e);
        alert('Error adding student: ' + e.message);
    }
}

GetStudentMarks()
async function GetStudentMarks() {
    try {
        const UploadStudentMarks = collection(db, "UploadStudentMarks");
        const querySnapshot = await getDocs(UploadStudentMarks);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} =>`, doc.data());
        });
    } catch (e) {
        console.error("Error fetching student data: ", e);
    }
}
