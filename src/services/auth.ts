import {
  UserCredential,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// console.log(createUserWithEmailAndPassword(auth, "111@gmail.com", "333333"));

const register = async (
  email: string,
  password: string,
  name: string
): Promise<UserCredential> => {
  try {
    const user: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user.user, { displayName: name });
    return user;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "message" in error) {
      throw new Error((error as Error).message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
export default register;
