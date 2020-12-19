import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    // vos infos de connexion firebase
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;