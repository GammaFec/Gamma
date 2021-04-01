import firebase from "firebase";
import FirebaseApp from "../config";

/**
 * Send a verification code in a SMS to phone number provided
 * @param phoneNumber The number to send the code
 * @param appVerifier The recaptcha used to validate
 */
const sendSMSCode = async (
    phoneNumber: string,
    appVerifier: firebase.auth.RecaptchaVerifier
): Promise<firebase.auth.ConfirmationResult> =>
    FirebaseApp.getInstance().auth().signInWithPhoneNumber(`+${phoneNumber}`, appVerifier);

export default sendSMSCode;
