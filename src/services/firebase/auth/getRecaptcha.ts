import FirebaseApp from '../config';
import firebase from 'firebase';

const getRecaptcha = (elementId: string): firebase.auth.RecaptchaVerifier => {
    const firebaseApp = FirebaseApp.getInstance();

    return new firebaseApp.auth.RecaptchaVerifier(elementId, {
        size: 'invisible'
    });
};

export default getRecaptcha;
