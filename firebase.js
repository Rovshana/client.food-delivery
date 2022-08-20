// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {  toast} from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyCuCX3e29NnKu6e_Gds-7ZxRk5IXRt3XYY",
  authDomain: "food-auth-6c36d.firebaseapp.com",
  projectId: "food-auth-6c36d",
  storageBucket: "food-auth-6c36d.appspot.com",
  messagingSenderId: "325256457318",
  appId: "1:325256457318:web:3299d98e88892fbbbd11a7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password,displayName) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    return user;
  } catch (error) {
    toast(error.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const login = async (email, password,displayName) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password,displayName);
    return user;
  } catch (error) {
    toast(error.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const logout = async() =>{
    try {
        await signOut(auth)
        return true
    } catch (error) {
        toast(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
}

export default app;
