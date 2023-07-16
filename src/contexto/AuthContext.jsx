import { createContext, useState, useEffect } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase/config.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
  });

  console.log(user);

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => console.log(e))
  };

  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => console.log(e))
  };

  const logout = () => {
    signOut(auth)
  }

  const googleLogin = () => {
    signInWithPopup(auth, provider)

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser({
                logged: true,
                email: user.email
            })
        } else {
            setUser({
                logged: false,
                email: null
            })
        }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, register, logout, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
