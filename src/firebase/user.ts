import { collection, doc, setDoc } from "firebase/firestore/lite";
import { User } from "../interfaces"
import { FirebaseDB } from "./config";

export const startNewUser = async(user: User) => {
  console.log(user)
  const newUser: User = {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber
  };
  const newDocument = doc(collection(FirebaseDB, `user/`));
  await setDoc(newDocument, newUser);
}