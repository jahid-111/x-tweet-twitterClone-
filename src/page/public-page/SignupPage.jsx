import { Link } from "react-router-dom";
import Modal from "../../components/fallback-components/Modal";
import XlogoSvg from "../../components/svgComponents/XLogoSvg";
import RegistrationForm from "../../components/form/RegistrationFrom";

const SignupPage = () => {
  return (
    <Modal>
      <div className="flex flex-col justify-center items-center p-5 bg">
        {/* Logo Section */}
        <div className="w-full">
          <XlogoSvg xClass="w-16 h-16 md:w-auto" />
        </div>

        {/* Login Form Section */}
        <div className="w-96 h-auto mx-auto ">
          <RegistrationForm />
        </div>

        {/* Link Section */}
        <div className="mt-4">
          Already have an account ?{" "}
          <Link to="/auth/signin" className="text-blue-500 hover:underline">
            Signin
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SignupPage;
