import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const logIn = async(email: string, password: string) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
console.log(user)
    } catch (error: unknown) {
        console.log('eeeeee')
        if (typeof error === "object" && error !== null && "message" in error) {
          throw new Error((error as Error).message);
        } else {
          throw new Error("An unknown error occurred");
        }
    }
}
export default logIn

