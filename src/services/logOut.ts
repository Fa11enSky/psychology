import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const handleSignOut = () => {
  signOut(auth)
    
};
export default handleSignOut
