import firebase from 'firebase';

const sendSMSCode = async (phoneNumber: string, appVerifier: firebase.auth.RecaptchaVerifier): Promise<firebase.auth.ConfirmationResult> => firebase.auth().signInWithPhoneNumber(`+${phoneNumber}`, appVerifier);

export default sendSMSCode;