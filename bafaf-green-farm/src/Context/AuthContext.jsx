import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("bafaf_token") || null);
  const [loading, setLoading] = useState(true);

  // অ্যাপ লোড হওয়ার সময় লোকাল স্টোরেজে আগের টোকেন থাকলে ইউজার স্টেট রিস্টোর করা
  useEffect(() => {
    if (token) {
      // এখানে ব্যাকএন্ড API তৈরি হলে টোকেন ভেরিফাই করে ইউজার ডেটা সেট করা যাবে
      // আপাতত ডামি ইউজার ডেটা সেট করে লোডিং ফলস করা হচ্ছে
      setUser({ id: 1, name: "Nahid Islam", email: "nahid@bafaf.com", role: "user" });
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [token]);
  // ১. লগইন ফাংশন (ব্যাকএন্ড রেডি হলে এখানে Axios/Fetch কল বসবে)
  const login = async (email, password) => {
    try {
      setLoading(true);
      // ডামি সফল রেসপন্স (ফেজ ১০-এ Django API-এর সাথে যুক্ত হবে)
      const fakeToken = "bafaf_jwt_secret_token_12345";
      const fakeUser = { id: 1, name: "Nahid Islam", email: email, role: "user" };

      localStorage.setItem("bafaf_token", fakeToken);
      setToken(fakeToken);
      setUser(fakeUser);
      return { success: true };
    } catch (error) {
      console.error("Login Error:", error);
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };

  // ২. রেজিস্ট্রেশন ফাংশন (নতুন ইউজার অ্যাকাউন্ট তৈরি)
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      // ডামি সফল রেজিস্ট্রেশন রেসপন্স
      const fakeToken = "bafaf_jwt_secret_token_12345";
      const fakeUser = { id: 1, name: name, email: email, role: "user" };

      localStorage.setItem("bafaf_token", fakeToken);
      setToken(fakeToken);
      setUser(fakeUser);
      return { success: true };
    } catch (error) {
      console.error("Registration Error:", error);
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };
  // ৩. লগআউট ফাংশন (স্টেট ও লোকাল স্টোরেজ ক্লিয়ার করা)
  const logout = () => {
    localStorage.removeItem("bafaf_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
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
