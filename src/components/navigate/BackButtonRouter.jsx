import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const BackButtonRouter = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleBackToRoutes = () => {
    navigate(-1); // Navigate back to the previous route
  };

  return (
    <button
      className=" p-3 m-1 rounded-full flex items-center gap-2 hover:bg-toggle"
      onClick={handleBackToRoutes}
    >
      <IoArrowBack className=" h-6 w-6" />
    </button>
  );
};

export default BackButtonRouter;
