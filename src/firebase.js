import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDhAUJOVjZZe47xdomH94YKGYU3sH_8lg4",
  authDomain: "comentaki-gus-app.firebaseapp.com",
  databaseURL: "https://comentaki-gus-app.firebaseio.com",
  projectId: "comentaki-gus-app",
  storageBucket: "comentaki-gus-app.appspot.com",
  messagingSenderId: "1034303196248",
  appId: "1:1034303196248:web:bb77aeb73ad770b97ace2d"
};

firebase.initializeApp(firebaseConfig)

export default firebase