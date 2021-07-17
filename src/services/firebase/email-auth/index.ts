import firebase from "firebase";
import FirebaseApp from "../config";

/**
 * Send a verification code in a SMS to phone number provided
 * @param email — The user's email address.
 * @param password — The user's chosen password.
 */

export const createUserWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<firebase.auth.UserCredential> =>
    FirebaseApp.getInstance().auth().createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<firebase.auth.UserCredential> =>
    FirebaseApp.getInstance().auth().signInWithEmailAndPassword(email, password);
