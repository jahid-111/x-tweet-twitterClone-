import XlogoSvg from "../../components/svgComponents/XLogoSvg";
import Modal from "../../components/fallback-components/Modal";
import LoginForm from "../../components/form/LoginFrom";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <Modal modalTitle="Ready ? What Happen to see !?">
      <div className="flex flex-col justify-center items-center p-5 bg">
        {/* Logo Section */}
        <div className="w-full">
          <XlogoSvg xClass="w-16 h-16 md:w-auto" />
        </div>

        {/* Login Form Section */}
        <div className="size-96 mx-auto ">
          <LoginForm />
        </div>

        {/* Link Section */}
        <div className="mt-4">
          No Account ?{" "}
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SigninPage;
