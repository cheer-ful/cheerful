// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCT5qRz4rJ5qkF65bslpO9NqG-vtsB-ld8",
    authDomain: "cheerful-af17b.firebaseapp.com",
    databaseURL: "https://cheerful-af17b.firebaseio.com",
    projectId: "cheerful-af17b",
    storageBucket: "cheerful-af17b.appspot.com",
    messagingSenderId: "418844076564",
    appId: "1:418844076564:web:5d215f5fa77d82cf709501"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function () {

    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }

});