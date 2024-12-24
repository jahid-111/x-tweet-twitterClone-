import { Outlet } from "react-router-dom";
import NavRouteList from "../components/navigate/RootNav";

const PublicLayout = () => {
  return (
    <div className=" bg-green-900">
      <nav className="bg-opacity-90 bg-gray-950 sm:bg-transparent sm:bg-opacity-100 w-full fixed bottom-0 left-0 right-0 sm:h-screen sm:sticky sm:top-0 sm:w-[100px] xl:w-[350px]">
        <NavRouteList />
      </nav>
      <main className="flex gap-2 flex-col lg:flex-row w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
