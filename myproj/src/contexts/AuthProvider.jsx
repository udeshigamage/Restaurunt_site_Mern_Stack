import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import app from "../firebase/firbase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  //create an account
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signup with gmail account
  const signupwithgmail = () => {
    return signInWithPopup(auth, googleprovider);
  };
  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logout = () => {
    return signOut(auth);
  };
  //update user profile

  const updateuserprofile = ({ name, photourl }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };
  //check signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setuser(currentUser);
      setloading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    createuser,
    signupwithgmail,
    login,
    logout,
    updateuserprofile,
    loading,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
