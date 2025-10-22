import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//user sign in korle fire base e data pawa jabe
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
//user sign in korle eta call hbe
  const signOutUser = () => {
    return signOut(auth);
  };

  //get current user

  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("courrent user in auth state changed", currentUser);
      //login kora user ke set kortese
      setUser(currentUser);
    });
    //clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    creatUser,
    signInUser,
    user,
    signOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
