import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyCgoNhSRA89yoTJIePd1QN5atskb6t17M8",
    authDomain: "login-2fc43.firebaseapp.com",
    databaseURL: "https://login-2fc43.firebaseio.com",
    projectId: "login-2fc43",
    storageBucket: "login-2fc43.appspot.com",
    messagingSenderId: "970720406279",
    appId: "1:970720406279:web:b00380823ea6b3f67cb3a2",
    measurementId: "G-34JJLW7GY2"
  };

  class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;