import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const signUp = (email, Password) => {
    createUserWithEmailAndPassword(auth, email, Password);
    setDoc(doc(db, "users", email), {
      FavoriteShows: [],
    });
  };

  const signIn = (email, Password) => {
    signInWithEmailAndPassword(auth, email, Password);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (curr) => [setUser(curr)]);
    return () => {
      unsbscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(AuthContext);
};
