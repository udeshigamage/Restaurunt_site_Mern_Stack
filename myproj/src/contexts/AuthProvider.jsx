import React, { createContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firbase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  //create an account
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signup with gmail account
  const signupwithgmail = () => {
    return signInWithPopup(auth, provider);
  };
  //login
  const login = () => {
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

  const authinfo = {
    user,
    createuser,
    signupwithgmail,
    login,
    updateuserprofile,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
