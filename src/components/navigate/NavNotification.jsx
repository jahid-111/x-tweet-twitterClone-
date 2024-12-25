import { Link, useLocation } from "react-router-dom";
import { notifyRoutes } from "../../utils/userIconStaticData";

const NavNotification = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <nav aria-label="Explore categories" className="border-gray-700">
      <ul className="flex justify-center items-center overflow-x-auto w-full">
        {notifyRoutes.map((route) => {
          const formattedRoute = route
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"); // Replace spaces with hyphens

          // Check if the pathname is '/explore' and set 'For you' as active as Default
          const isActive =
            (pathname === "/notification" && route === "All Notify") ||
            pathname === `/notification/${encodeURIComponent(formattedRoute)}`;

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

export default NavNotification;
