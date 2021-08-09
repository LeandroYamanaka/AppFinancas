import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAzr57Drpybr6VwJP87pFOma1KtTx35XNQ",
    authDomain: "myfinance-cc842.firebaseapp.com",
    projectId: "myfinance-cc842",
    storageBucket: "myfinance-cc842.appspot.com",
    messagingSenderId: "446932058439",
    appId: "1:446932058439:web:8124449a82480b8f1acc62",
    measurementId: "G-VZ1Y9GW9Q6"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;