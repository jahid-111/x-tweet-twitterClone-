import { useState, useEffect, useRef } from "react";
import ImageSmall from "../images/ImageSmall";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserAuthCard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect clicks outside of the dropdown
  const { setIsAuthenticated } = useAuth();

  const navigate = useNavigate();
  const handleAuthButtonClick = () => {
    setDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  const handleAction = (e, action) => {
    e.preventDefault();

    if (action === "addExist") {
      window.prompt("We believe you have an account.");
    } else if (action === "logout") {
      const isConfirmed = window.confirm("Are you sure you want to log out?");
      if (isConfirmed) {
        console.log("out");
        setIsAuthenticated(false);
        navigate("/auth");
      }
    }

    setDropdownOpen(false); // Close dropdown after action
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={handleAuthButtonClick}
        className="cursor-pointer rounded-full px-2  hover:bg-toggle my-auto flex gap-5 justify-center items-center"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen ? "true" : "false"}
      >
        {/* User Image */}
        <ImageSmall />
        <div className="hidden xl:block">
          <p className="font-bold">Mohd Jahidul Islam</p>
          <p className="text-gray-500 text-start">@jahidjob4</p>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="bg-primaryDark shadow-custom w-[300px] absolute bottom-16 left-8 mt-2 rounded-lg z-50 overflow-hidden"
          role="menu"
          aria-labelledby="user-auth-button"
        >
          <div className="flex flex-col gap-2 py-2">
            <button
              onClick={(e) => handleAction(e, "addExist")}
              className="py-2 w-full hover:bg-toggle text-white"
              role="menuitem"
            >
              Add Existing Account
            </button>
            <button
              onClick={(e) => handleAction(e, "logout")}
              className="py-2 w-full hover:bg-toggle text-white"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAuthCard;
