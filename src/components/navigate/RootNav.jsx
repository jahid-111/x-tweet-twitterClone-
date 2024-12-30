import { navItems } from "../../utils/userIconStaticData";
import { Link } from "react-router-dom";
import UserAuthCard from "../userComponents/UserAuthCard";
import TweetIconSvg from "../svgComponents/TweetIconSvg";
import XlogoSvg from "../svgComponents/XLogoSvg";
import useScrollToVisible from "../../hooks/useScrollToVisible";
import { useState } from "react";
import Modal from "../fallback-components/Modal";
import PostTweet from "../tweet-post/PostTweet";

const NavRouteList = () => {
  const { isVisible } = useScrollToVisible();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen((prv) => !prv);
  }
  return (
    <ul className="flex sm:flex-col justify-between sm:items-center gap-4 w-full">
      {/* Logo Section */}
      <div className={`hidden sm:block`}>
        <div className="xl:w-[13rem] h-auto rounded-full flex gap-2 items-center my-2">
          <Link to="/" className="hover:bg-toggle p-2 rounded-full">
            <XlogoSvg xClass="w-9 h-9" />
          </Link>
        </div>
      </div>

      {navItems.map((item) => (
        <li
          key={item.id || item.label}
          className={`transition-all duration-300 sm:flex xl:flex-col sm:gap-4`}
        >
          <Link
            aria-label={item.label}
            to={item.label === "profile" ? "/profile" : item.href}
            className="hover:bg-toggle xl:w-[13rem] rounded-full flex gap-2 items-center w-full"
          >
            <item.icon className="h-11 w-11 p-2 rounded-full" />
            <span className="hidden xl:block text-xl">{item.label}</span>
          </Link>
        </li>
      ))}

      {/* Bottom Section */}
      <div className="absolute bottom-8">
        <div className="mt-4 w-full flex flex-col items-center gap-4 pt-4">
          {/* Post Button */}
          <div className="w-full flex justify-center">
            {/* Large screen POST button */}
            <button
              onClick={handleOpenModal}
              className="hidden xl:block w-full bg-gray-200 hover:bg-gray-300 py-4 px-8 text-gray-800 text-sm font-semibold rounded-full text-center"
            >
              POST
            </button>

            <button
              onClick={handleOpenModal}
              className={`${
                isVisible
                  ? "fixed bottom-20 xl:hidden right-0 py-2 px-6 text-slate-300 text-sm font-semibold rounded-full"
                  : "fixed bottom-20 xl:hidden right-0 py-2 px-6 text-gray-500 text-sm font-semibold rounded-full"
              }`}
            >
              <TweetIconSvg />
            </button>
          </div>

          {isModalOpen && (
            <Modal
              modalTitle="Post Tweet"
              onClose={() => setIsModalOpen(false)}
            >
              <PostTweet />
            </Modal>
          )}

          {/* User Authentication Card */}
          <div className="hidden sm:block w-full">
            <UserAuthCard />
          </div>
        </div>
      </div>
    </ul>
  );
};

export default NavRouteList;
