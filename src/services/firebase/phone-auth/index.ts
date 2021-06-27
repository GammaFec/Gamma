import FirebaseApp from "../config";
import firebase from "firebase";

/**
 * Generate a Firebase recaptcha for an HTML element
 * @param elementId The id of element that the recaptcha validate
 */
export const getRecaptcha = (elementId: string): firebase.auth.RecaptchaVerifier => {
    const firebaseApp = FirebaseApp.getInstance();

    return new firebaseApp.auth.RecaptchaVerifier(elementId, {
        size: "invisible"
    });
};

/**
 * Send a verification code in a SMS to phone number provided
 * @param phoneNumber The number to send the code
 * @param appVerifier The recaptcha used to validate
 */
export const sendSMSCode = async (
    phoneNumber: string,
    appVerifier: firebase.auth.RecaptchaVerifier
): Promise<firebase.auth.ConfirmationResult> =>
    FirebaseApp.getInstance().auth().signInWithPhoneNumber(`+${phoneNumber}`, appVerifier);

/**
 * Validate a code to authenticate a phone number
 * @param code the code provided for the user
 * @param confirmationResult the result of sending the code
 */

export const verifyCode = async (
    code: string,
    confirmationResult: firebase.auth.ConfirmationResult
): Promise<boolean> => {
    const user = await confirmationResult.confirm(code);

    return user ? true : false;
};
