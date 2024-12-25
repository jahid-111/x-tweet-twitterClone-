import useScrollToVisible from "../../hooks/useScrollToVisible";

const NavHomeChildren = () => {
  const isVisible = useScrollToVisible();
  const buttonTexts = ["For you", "Following"];

  const handleToggleButtonToPathRoute = (route) => {
    console.log(`Navigating to ${route}`);
    // Add navigation logic here, e.g., using Next.js Router:
    // router.push(`/${route.toLowerCase()}`);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isVisible ? "delay-150 translate-y-0" : "opacity-0 -translate-y-full"
      } sticky top-0 w-full border-b border-gray-600 bg-opacity-80 backdrop-blur-lg flex flex-row justify-around items-center`}
    >
      {buttonTexts.map((buttonText, index) => (
        <button
          key={index}
          onClick={() => handleToggleButtonToPathRoute(buttonText)}
          className="w-full h-12 flex justify-center items-center gap-2 hover:bg-toggle"
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
