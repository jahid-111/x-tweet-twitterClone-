import { googleLogin } from "./socialLogin";

const loginMethods = {
  // google: async () => {
  //   const res = await googleLogin();
  //   // const { displayName, email, photoURL, uid } = res.providerData[0];
  //   // console.log(displayName, email, photoURL, uid);
  //   // return { displayName, email, photoURL, uid };
  //   return res
  // },
  // apple: () => {
  //   window.alert('⚠️ This Method Not Implement Yet 🥲. Try "Google"');
  // },
  default: () => {
    alert("This login method is not supported.");
  },
};

export default loginMethods;
