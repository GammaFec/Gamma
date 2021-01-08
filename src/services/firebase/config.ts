import firebase from 'firebase';

/**
 * This class contains the config of firebase application
 * and can generate an instance for access to firebase data.
 */
class FirebaseApp {
    private static firebaseConfig = {
        apiKey: 'AIzaSyCI7h9mwvNDVY4C0qoXXcNzKAXmpILuDMc',
        authDomain: 'fec-gamma.firebaseapp.com',
        projectId: 'fec-gamma',
        storageBucket: 'fec-gamma.appspot.com',
        messagingSenderId: '102173076494',
        appId: '1:102173076494:web:a7fd70cecd0e7ea862e05f'
    };

    static instance: typeof firebase;

    private static createInstance(): typeof firebase {
        firebase.initializeApp(this.firebaseConfig);
        firebase.auth().useDeviceLanguage();

        const fbInstance = firebase;

        return fbInstance;
    }

    static getInstance(): typeof firebase {
        if (!FirebaseApp.instance) {
            FirebaseApp.instance = FirebaseApp.createInstance();
        }
        return FirebaseApp.instance;
    }
}

export default FirebaseApp;
