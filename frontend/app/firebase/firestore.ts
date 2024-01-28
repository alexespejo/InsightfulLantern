import { db } from "../firebase";
import {
 collection,
 query,
 where,
 addDoc,
 doc,
 setDoc,
 getDocs,
} from "firebase/firestore";

export async function createUser(u_uid: string, uEmail: string) {
 await setDoc(doc(db, "users", uEmail), {
  uid: u_uid,
 });
}

export async function getPostData(category: string) {
 try {
  const querySnapshot = await getDocs(collection(db, category));

  // Map the documents to an array and return it
  return querySnapshot.docs.map((doc) => ({
   id: doc.id,
   data: doc.data(),
  }));
 } catch (error: any) {
  // Handle errors here
  console.error("Error fetching cities:", error.message);
  return [];
 }
}

export async function getPostsFromUser(uid: any, category: string) {
 const q = query(collection(db, category), where("user", "==", uid));

 try {
  const querySnapshot = await getDocs(q);

  const result: any = [];
  querySnapshot.forEach((doc) => {
   result.push({
    id: doc.id,
    data: doc.data(),
   });
  });

  return result;
 } catch (error: any) {
  console.error("Error getting documents:", error.message);
  throw error;
 }
}
