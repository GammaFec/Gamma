import { IUser } from "./../firestore/types";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import firebase from "firebase";
import "firebase/auth";
import FirebaseApp from "../config";
import { createUserInDB } from "../firestore";

/**
 * Send a verification code in a SMS to phone number provided
 * @param email — The user's email address.
 * @param password — The user's chosen password.
 */

export const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    User: IUser
): Promise<void> =>
    FirebaseApp.getInstance()
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => createUserInDB(user?.uid || "", User));

export const signInWithEmailAndPassword = async (
    email: string,
    password: string
): Promise<firebase.auth.UserCredential> =>
    FirebaseApp.getInstance().auth().signInWithEmailAndPassword(email, password);
