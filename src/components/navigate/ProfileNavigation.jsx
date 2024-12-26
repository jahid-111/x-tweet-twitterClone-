import { Link, useLocation } from "react-router-dom";
import { profileRoutes } from "../../utils/userIconStaticData";

const ProfileNavigation = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <nav
      aria-label="Explore categories"
      className="border-gray-700 marker:overflow-scroll"
    >
      <ul className="flex justify-center items-center overflow-x-auto w-full">
        {profileRoutes.map((route, index) => {
          const formattedRoute = route
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");

          const isActive =
            index === 0 || // Always make the first route active
            pathname === "/posts" ||
            pathname === `/profile/${encodeURIComponent(formattedRoute)}`;

          // console.log({ route, formattedRoute, isActive });
          return (
            <li key={route} className="w-full">
              <Link
                className={`block text-center py-3 ${
                  isActive
                    ? "border-b-4 rounded-b-md border-primary hover:bg-linkColor"
                    : "hover:bg-linkColor"
                }`}
                to={`/notification/${encodeURIComponent(formattedRoute)}`}
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
