/*
===========================================
File Path      : Src/Context/AuthContext.jsx
Component Name : AuthProvider (Part 01 - Google Auth Integration)
Project        : BAFAF Green Farm
Framework      : React 19 + Vite
===========================================
*/

import { createContext, useState, useEffect, useContext } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider, // 🟢 গুগলের অফিশিয়াল প্রোভাইডার ইমপোর্ট করা হলো
  signInWithPopup     // 🟢 পপ-আপ মেথড ইমপোর্ট করা হলো
} from "firebase/auth";
import { auth } from "../firebase/firebase.config"; // আপনার সঠিক রিলেটিভ পাথ

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("bafaf_token") || null);
  const [loading, setLoading] = useState(true);

  // ফায়ারবেস লাইভ অবসার্ভার: সাইন-ইন বা সাইন-আউট অবস্থা রিয়েল-টাইম ট্র্যাক করবে
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // ফায়ারবেস আইডি টোকেন নিয়ে লোকাল স্টোরেজে সিঙ্ক করা
        const firebaseToken = await currentUser.getIdToken();
        localStorage.setItem("bafaf_token", firebaseToken);
        setToken(firebaseToken);
        
        setUser({
          id: currentUser.uid,
          name: currentUser.displayName || "BAFAF User",
          email: currentUser.email,
          role: "user"
        });
      } else {
        localStorage.removeItem("bafaf_token");
        setToken(null);
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ১. ফায়ারবেস লাইভ লগইন ফাংশন (ইমেইল ও পাসওয়ার্ড)
  const login = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error("Login Error:", error);
      let message = "Invalid email or password.";
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        message = "Incorrect email or password. Please try again.";
      } else if (error.code === "auth/invalid-credential") {
        message = "Invalid credentials. Please verify and retry.";
      }
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  // 🟢 ২. ফায়ারবেস গুগল পপ-আপ লগইন ফাংশন (নতুন যুক্ত করা হলো)
  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      return { success: true };
    } catch (error) {
      console.error("Google Auth Error:", error);
      let message = "Google sign-in failed. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        message = "Sign-in window closed before completion.";
      }
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  // ৩. ফায়ারবেস লাইভ রেজিস্ট্রেশন ফাংশন (নতুন ইউজার অ্যাকাউন্ট তৈরি)
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      setUser({
        id: userCredential.user.uid,
        name: name,
        email: email,
        role: "user"
      });
      
      return { success: true };
    } catch (error) {
      console.error("Registration Error:", error);
      let message = "Registration failed. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        message = "This email is already registered. Please login.";
      } else if (error.code === "auth/weak-password") {
        message = "Password should be at least 6 characters long.";
      }
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  // ৪. ফায়ারবেস লাইভ লগআউট ফাংশন
  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        loginWithGoogle, // 🟢 গুগল লগইন মেথড প্রোভাইড করা হলো
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// গ্লোবাল অথেন্টিকেশন স্টেট ব্যবহারের জন্য কাস্টম হুক
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
