import firebaseApp from "../config";
import "firebase/firestore";
import { IUser } from "./types";

const USER_COLLECTION = "Users";

const database = firebaseApp.getInstance().firestore();

export const createUserInDB = (id: string, user: IUser): void => {
    database.collection(USER_COLLECTION).doc(id).set(user);
};
