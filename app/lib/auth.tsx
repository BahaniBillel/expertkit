"use client";
import { useEffect, useState } from "react";
import {
  User as FirebaseUser,
  signOut,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../lib/firebase";

export async function signIn(
  email: string,
  password: string,
  rememberMe: boolean = false
) {
  await setPersistence(
    auth,
    rememberMe ? browserLocalPersistence : browserSessionPersistence
  );
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOutFunction() {
  return signOut(auth);
}

export function useUser() {
  const [user, setUser] = useState<FirebaseUser | null | false>(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return user;
}
