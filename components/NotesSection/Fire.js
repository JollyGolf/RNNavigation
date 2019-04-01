import firebase from 'firebase';

class Fire {
  constructor(){
  	this.init();
  	this.observeAuth();
  }

  observeAuth = () => firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
  	if(!user) {
  	  try {
  	  	firebase.auth.signInAnonymously();
  	  } catch ({ message }) {
  	  	alert(message);
  	  }
  	}
  }

  get reg() {
  	return firebase.database().ref('Notes');
  }

  on = callback => 
  	this.ref
      .limitToLast(100)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  parse = snapshot => {
  	const { timestamp: numberStamp, content, title } = snapshot.val();
  	const { key: id } = snapshot;
  // 2.
  	const timestamp = new Date(numberStamp);
  // 3.
  	const message = {
  	  id,
   	  timestamp,
      content,
      title,
    };
    return message;
  }

  off() {
  	this.ref.off();
  }

  init = () => {
  	firebase.initializeApp({
  	  apiKey: "AIzaSyAHUxlQWs-JzfZdSLqU_ZZvJKJDDqYf-kQ",
      authDomain: "notes-app-section.firebaseapp.com",
      databaseURL: "https://notes-app-section.firebaseio.com",
      projectId: "notes-app-section",
      storageBucket: "notes-app-section.appspot.com",
      messagingSenderId: "165478836757"
  	})
  }
}

Fire.shared = new Fire();
export default Fire;