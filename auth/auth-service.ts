import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  get,
  DatabaseReference,
  DataSnapshot,
} from "firebase/database";
import { SignUpData, LoginData, User } from "../types/user-types";

export const signUpWithEmailPassword = async ({
  email,
  password,
  name,
}: SignUpData): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userId = userCredential.user.uid;
    const db = getDatabase();
    await set(ref(db, "users/" + userId), {
      name,
      email,
    });

    return userCredential;
  } catch (error: any) {
    throw error;
  }
};

export const loginWithEmailPassword = async ({
  email,
  password,
}: LoginData): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userId = userCredential.user.uid;
    const db = getDatabase();
    const userRef: DatabaseReference = ref(db, "users/" + userId);
    const snapshot: DataSnapshot = await get(userRef);

    if (snapshot.exists()) {
      const userData: User = snapshot.val();
      console.log("User Data:", userData);
    } else {
      console.log("No user data found.");
    }

    return userCredential;
  } catch (error: any) {
    throw error;
  }
};

export const forgotPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent!");
    // Optionally, you can return a success message or trigger a UI update
  } catch (error: any) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
};
