import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../services/firebase";

const googleProvider = new GoogleAuthProvider();

// Google login function
const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // console.log("Google User:", user); // Uncomment for debugging
    return user;
  } catch (error) {
    console.error("Google Login Error:", error.code, error.message);
    throw error; // Re-throw the error if further handling is needed
  }
};

export { googleLogin };
