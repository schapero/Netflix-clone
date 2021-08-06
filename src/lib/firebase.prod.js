import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyCspSn8Ye5sCn9vcBNALMYNjyhNrr5oZvU",
    authDomain: "netflix-clone-d7c66.firebaseapp.com",
    databaseURL: 'https://netflix-clone-d7c66.firebaseio.com',
    projectId: "netflix-clone-d7c66",
    storageBucket: "netflix-clone-d7c66.appspot.com",
    messagingSenderId: "22187597293",
    appId: "1:22187597293:web:08f782a0e1c00aa2a55be4"

};
const firebase= Firebase.initializeApp(config);

export {firebase};

