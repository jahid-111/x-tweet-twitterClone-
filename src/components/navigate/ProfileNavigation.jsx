import { Link, useLocation } from "react-router-dom";
import { profileRoutes } from "../../utils/userIconStaticData";

const ProfileNavigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Explore categories"
      className="border-gray-700 overflow-scroll mt-1"
    >
      <ul className="flex justify-center items-center overflow-x-auto w-full">
        {profileRoutes.map((route, index) => {
          const formattedRoute = route
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");

          // Logic to determine if the route is active
          const isActive =
            (pathname === "/profile" && index === 0) || // Initial landing route as active
            pathname === `/profile/${encodeURIComponent(formattedRoute)}`;

          return (
            <li key={route} className="w-full text-center">
              <Link
                className={`block text-center py-3 px-4${
                  isActive
                    ? "border-b-4 rounded-b-md border-primary rounded-md bg-linkColor"
                    : "hover:bg-linkColor rounded-md"
                }`}
                to={`/profile/${encodeURIComponent(formattedRoute)}`}
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

export default ProfileNavigation;
