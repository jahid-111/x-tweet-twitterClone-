import { Link, useLocation } from "react-router-dom";
import { homeRoutes } from "../../utils/userIconStaticData";

const NavigationHome = () => {
  const { pathname } = useLocation(); // Using useLocation to get the current pathname

  return (
    <nav aria-label="Explore categories" className="border-gray-700 mt-1">
      <ul className="flex justify-center items-center overflow-x-auto w-full">
        {homeRoutes.map((route) => {
          const formattedRoute = route
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"); // Replace spaces with hyphens

          // Check if the pathname is '/explore' and set 'For you' as active as Default
          const isActive =
            (pathname === "/" && route === "Home") ||
            pathname === `/${encodeURIComponent(formattedRoute)}`;

          return (
            <li key={route} className="w-full">
              <Link
                className={`block text-center py-2 ${isActive
                  ? "border-b-4 border-primary hover:bg-linkColor"
                  : " hover:bg-linkColor"
                  }`}
                to={`/${encodeURIComponent(formattedRoute)}`}
              >
                {route}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default NavigationHome