import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByghoea4QuzjsD3JynIH8dFo2Z1VieAFY",
    authDomain: "beauty-by-ana.firebaseapp.com",
    projectId: "beauty-by-ana",
    storageBucket: "beauty-by-ana.appspot.com",
    messagingSenderId: "188290376121",
    appId: "1:188290376121:web:122c06f353009d5a1b9668"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
    firebase,
};