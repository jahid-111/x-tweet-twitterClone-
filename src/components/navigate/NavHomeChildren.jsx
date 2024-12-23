import React from "react";

const NavHomeChildren = () => {
  // Example button texts for dynamic rendering
  const buttonTexts = ["For you", "Following"];

  // Function to handle button click
  const handleToggleButtonToPathRoute = (route) => {
    console.log(`Navigating to ${route}`);
    // Add navigation logic here, e.g., using Next.js Router:
    // router.push(`/${route.toLowerCase()}`);
  };

  return (
    <div className="h-auto md:h-12 sticky top-0 w-full border-b flex flex-row justify-around border-gray-600 items-center transition-all duration-300 bg-opacity-80 backdrop-blur-lg ">
      {buttonTexts.map((buttonText) => (
        <button
          key={buttonText}
          onClick={() => handleToggleButtonToPathRoute(buttonText)}
          className="w-full h-12 flex justify-center items-center gap-2 hover:bg-toggle "
          aria-label={`Navigate to ${buttonText}`}
        >
          <span className="hover:border-primary border-b-[.2rem]">
            {buttonText}
          </span>
        </button>
      ))}
    </div>
  );
};

export default NavHomeChildren;
