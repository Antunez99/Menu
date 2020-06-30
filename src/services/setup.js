import * as firebase  from 'firebase';

const config = {
    apiKey: "AIzaSyDGiVOWOXviNjWHPUaADQVACvAACeuel4o",
    authDomain: "menu-9aaa4.firebaseapp.com",
    databaseURL: "https://menu-9aaa4.firebaseio.com",
    projectId: "menu-9aaa4",
    storageBucket: "menu-9aaa4.appspot.com",
    messagingSenderId: "446839147805",
    appId: "1:446839147805:web:9f2a25efb0bfa4cd7565f4"
  };

  const uiConfig ={
    signInOptions:[
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl :'/',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);  
}

firebase.firestore().enablePersistence()

export const auth =firebase.auth();
export const db = firebase.firestore();

 db.settings({
     timestampsInSnapshots: true,
 });

