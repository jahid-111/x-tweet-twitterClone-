import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clientApi from "../../../services/axiosAPI_Config";

const LoginForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    const form = e.currentTarget;
    const { email, password } = Object.fromEntries(new FormData(form));
    localStorage.setItem("token", "hardcoreToken");
    window.location.replace("/"); // This will reload the page
  };

  return (
    <div className="w-full rounded-2xl pt-5">
      <h2 className="text-3xl font-bold text-center text-white">Log in</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Email */}
        <div className="space-y-3">
          <input
            type="email"
            name="email"
            id="email"
            value="login.demo@mail.com"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Email or Phone"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-3 mt-6">
          <input
            type="password"
            name="password"
            id="password"
            value="12345678"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-md"
            placeholder="Password"
            required
          />
        </div>

        <div className="mt-8 text-center">
          {message && (
            <div
              className={`text-center my-4 font-semibold text-sm ${
                message.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600"
          >
            {loading ? "Wait for Access" : " Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
