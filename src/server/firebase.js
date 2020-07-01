import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyDGiVOWOXviNjWHPUaADQVACvAACeuel4o",
    authDomain: "menu-9aaa4.firebaseapp.com",
    databaseURL: "https://menu-9aaa4.firebaseio.com",
    projectId: "menu-9aaa4",
    storageBucket: "menu-9aaa4.appspot.com",
    messagingSenderId: "446839147805",
    appId: "1:446839147805:web:9f2a25efb0bfa4cd7565f4"
  };

  class Firebase{
    constructor(){
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;