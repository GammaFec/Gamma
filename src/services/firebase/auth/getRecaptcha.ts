import FirebaseApp from '../config';
import firebase from 'firebase';

/**
 * Generate a Firebase recaptcha for an HTML element
 * @param elementId The id of element that the recaptcha validate
 */
const getRecaptcha = (elementId: string): firebase.auth.RecaptchaVerifier => {
    const firebaseApp = FirebaseApp.getInstance();

    return new firebaseApp.auth.RecaptchaVerifier(elementId, {
        size: 'invisible'
    });
};

export default getRecaptcha;
