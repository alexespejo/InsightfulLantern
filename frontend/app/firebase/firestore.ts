import { create } from "domain";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export async function createUser(uid: string, uEmail: string) {
 await setDoc(doc(db, "users", uid), {
  email: uEmail,
 });
}
