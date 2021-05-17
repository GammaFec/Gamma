import firebase from "firebase";

/**
 * Validate a code to authenticate a phone number
 * @param code the code provided for the user
 * @param confirmationResult the result of sending the code
 */
const verifyCode = async (
    code: string,
    confirmationResult: firebase.auth.ConfirmationResult
): Promise<boolean> => {
    const user = await confirmationResult.confirm(code);

    return user ? true : false;
};

export default verifyCode;
