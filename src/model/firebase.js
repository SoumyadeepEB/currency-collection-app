import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, getIdToken, signOut } from "firebase/auth";

export function firebaseLogin({email, password}){
    return signInWithEmailAndPassword(auth, email, password);
}

export function verifyAuthToken(user){
    const fbToken = getIdToken(user, true);
    console.warn(fbToken);
}

export function firebaseLogout(){
    return signOut(auth);
}