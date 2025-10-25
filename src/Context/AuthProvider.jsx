import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user sign in korle fire base e data pawa jabe
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //user sign in korle eta call hbe
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //get current user

  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("courrent user in auth state changed", currentUser);
      //login kora user ke set kortese
      setUser(currentUser);
      setLoading(false);
    });
    //clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUser = (updatedData) => {
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, updatedData);
  };
  const passwordResetEmail = (email) => {
    if (!email) {
      toast("⚠️ Please enter your email address.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("✅ Password reset email sent! Redirecting to Gmail...");
        window.open("https://mail.google.com/mail/u/0/","_blank")
      })
      .catch((err) => alert(err.message));
  };
  const userInfo = {
    creatUser,
    signInUser,
    user,
    setUser,
    signOutUser,
    loading,
    signInWithGoogle,
    updateUser,
    passwordResetEmail,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
