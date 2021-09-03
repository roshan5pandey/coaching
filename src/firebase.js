import * as firebase from "firebase";
import "firebase/database";
var firebaseConfig = {

  apiKey: "AIzaSyBcrwiNlDwW7B5AIo2Ol1tBy4BIuUZ57yg",
    authDomain: "rctbase.firebaseapp.com",
    databaseURL:"https://rctbase-default-rtdb.firebaseio.com/",
    projectId: "rctbase",
    storageBucket: "rctbase.appspot.com",
    messagingSenderId: "723118598662",
    appId: "1:723118598662:web:86b7bc0b7b0ebab557b187",
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
