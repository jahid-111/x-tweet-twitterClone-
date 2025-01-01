import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Corrected import
import { auth } from "../../services/firebase";

const googleProvider = new GoogleAuthProvider();

// Google login function
const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // console.log("Google User:", user);
    return user;
  } catch (error) {
    console.error("Google Login Error:", error);
  }
};

export { googleLogin };
