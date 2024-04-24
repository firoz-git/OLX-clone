// Import the functions you need from the SDKs you need
import Firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfdKhvvQIdTGIuGQxxqSgY8yvoogfLr3U",
    authDomain: "turf-44bde.firebaseapp.com",
    projectId: "turf-44bde",
    storageBucket: "turf-44bde.appspot.com",
    messagingSenderId: "757473145846",
    appId: "1:757473145846:web:6f9aa0fbd1789d8f788dd7",
    measurementId: "G-HKKZVQD3S0"
};


export default Firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);