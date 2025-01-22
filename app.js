// JavaScript source code
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   // onAuthStateChanged,
    signOut
    //Update the below URL with the appropriate version if necessary.
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSKUSID5wmHahxnfJQPniM-yxNYAXWaQ4",
    authDomain: "nyambi-chic.firebaseapp.com",
    projectId: "nyambi-chic",
    storageBucket: "nyambi-chic.appspot.com",
    messagingSenderId: "82817536045",
    appId: "1:82817536045:web:b579e200edc3ce0b7a28a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

console.log('Firebase app initialized successfully.');
console.log('Firebase app name:', firebaseConfig.projectId);

//signing up new users
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //make sure these match the field names
    const email = document.querySelector('.email');
    const customer_email = email.value;

    const password = document.querySelector('.password');
    const customer_password = password.value;

    createUserWithEmailAndPassword(auth, customer_email, customer_password)
        .then((cred) => {
            console.log('user created:', cred.user);
            signupForm.reset();
                //link to send user to home page upon submission
                alert("Signed In!");
            location.replace("HOME PAG3.html");
        })
        .catch((err) => {
            console.log(err.message) //if the password is too short or not entered
        })
});

// logging in current users
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.querySelector('.email');
    const customer_email = email.value;

    const password = document.querySelector('.password');
    const customer_password = password.value;


    signInWithEmailAndPassword(auth, customer_email, customer_password)
        .then((cred) => {
            console.log('User has Logged in:', cred.user);
            alert("Signed In!");
            location.replace("HOME PAG3.html");
        })
        .catch((err) => {
            console.log(err.message) //if email does not exist or incorrect password
            alert("User does not exist! Enter correct credentials" + err.message)
        })
});


// Add an event listener to the logout button
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    // Perform the sign-out operation
    signOut(auth)
        .then(() => {
            console.log('User has logged out');
            alert("You logged out of your account. Log in to continue shopping");

            // Redirect the user to the landing page or a Google search
            location.replace("http://example.com/landing-page.html");
        })
        .catch((err) => {
            console.log(err.message);
            alert("You can't log out.");
        });
});





