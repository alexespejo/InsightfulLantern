import { create } from "domain";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export async function createUser(u_uid: string, uEmail: string) {
 await setDoc(doc(db, "users", uEmail), {
  uid: u_uid,
 });
}
