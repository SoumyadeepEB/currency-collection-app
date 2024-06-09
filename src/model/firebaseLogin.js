import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function firebaseLogin({email, password}){
    return signInWithEmailAndPassword(auth, email, password);
}