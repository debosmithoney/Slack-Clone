import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCShBU0PpAL_EOIplTnP2J5NRfamh_QC0M",
    authDomain: "slack-clone-bbcca.firebaseapp.com",
    databaseURL: "https://slack-clone-bbcca.firebaseio.com",
    projectId: "slack-clone-bbcca",
    storageBucket: "slack-clone-bbcca.appspot.com",
    messagingSenderId: "954557108662",
    appId: "1:954557108662:web:dd8874cac8fc89281b7117",
    measurementId: "G-42MJ980LLN"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;