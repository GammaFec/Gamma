import firebase from 'firebase';
import FirebaseApp from '../config';

const sendSMSCode = async (
    phoneNumber: string,
    appVerifier: firebase.auth.RecaptchaVerifier
): Promise<firebase.auth.ConfirmationResult> =>
    FirebaseApp.getInstance().auth().signInWithPhoneNumber(`+${phoneNumber}`, appVerifier);

export default sendSMSCode;
