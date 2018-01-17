import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDRIDlMlxfXeuROkcUfdwuVnoPZsVc8yA",
   authDomain: "fir-react-30159.firebaseapp.com",
   databaseURL: "https://fir-react-30159.firebaseio.com",
   projectId: "fir-react-30159",
   storageBucket: "fir-react-30159.appspot.com",
   messagingSenderId: "328399778869",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};
