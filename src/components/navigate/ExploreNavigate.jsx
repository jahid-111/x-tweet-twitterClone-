import React from "react";
import { exploreRoutes } from "../../utils/userIconStaticData";
import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation

const NavigationExplore = () => {
  const { pathname } = useLocation(); // Using useLocation to get the current pathname

  return (
    <nav aria-label="Explore categories" className="border-gray-700 mt-3">
      <ul className="flex gap-3 justify-center items-center overflow-x-auto w-full">
        {exploreRoutes.map((route) => {
          const formattedRoute = route
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"); // Replace spaces with hyphens

          // Check if the pathname is '/explore' and set 'For you' as active as Default
          const isActive =
            (pathname === "/explore" && route === "For you") ||
            pathname === `/explore/${encodeURIComponent(formattedRoute)}`;

          return (
            <li key={route} className="w-full">
              <Link
                className={`block text-center py-2 ${
                  isActive
                    ? "border-b-4 border-primary hover:bg-linkColor"
                    : "hover:border-b-4 hover:border-primary hover:bg-linkColor"
                }`}
                to={`/explore/${encodeURIComponent(formattedRoute)}`}
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

export default NavigationExplore;
