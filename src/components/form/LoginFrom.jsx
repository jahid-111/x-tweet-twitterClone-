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

    // Input Validation
    if (!email || !password) {
      setMessage("Please provide both email and password.");
      return;
    }

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true); // Start loading state

      // Send POST request with form data
      const response = await clientApi.post("auth/signin", { email, password });

      if (response.status === 200) {
        // Handle success response
        setMessage("Login successful!");
        // Extract the token from the Authorization header
        const token = response.headers.authorization?.split(" ")[1]; // Split and get the token

        // Check if token exists before setting it
        if (token) {
          localStorage.setItem("token", token);
        } else {
          console.error("Token not found in response headers.");
        }

        // Navigate to the home page
        navigate("/");
      } else if (response.status === 401) {
        // Handle unauthorized response
        setMessage(
          response.data.message ||
            "Unauthorized. Please check your credentials."
        );
      } else {
        // Handle unexpected server responses
        setMessage(
          response.data.message || "Unexpected response from the server."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data) {
        setMessage(
          error.response.data.message || "An error occurred during login."
        );
      } else {
        setMessage("Unable to connect to the server. Please try again later.");
      }
    } finally {
      setLoading(false); // End loading state
    }
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
