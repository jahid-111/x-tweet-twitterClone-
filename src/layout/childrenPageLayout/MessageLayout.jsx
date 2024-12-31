import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MessageInboxUser from "../../page/children-page/message/MessageInboxUser";
import { IoArrowBack } from "react-icons/io5";
import usePageDocTitle from "../../hooks/usePageDocTitle";

const MessageLayout = () => {
  usePageDocTitle("Twitter © || Message");
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  const handleUserClick = (userId) => {
    setShowChat(true); // Show the chat section
    navigate(`/message/${userId}`); // Navigate to the chat route
  };

  const handleBackClick = () => {
    navigate("/message");
    setShowChat(false);
  };

  return (
    <main className="flex w-full h-screen">
      {/* Inbox Section */}
      <section
        className={`w-full md:w-[40%] border-l border-r border-gray-700 ${
          showChat ? "hidden md:block" : "block"
        } overflow-y-scroll`}
      >
        <div className="sticky top-0 border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl z-10">
          <h4 className="px-6 py-3 text-xl font-semibold">Messages</h4>
        </div>
        {/* Pass the click handler to the inbox */}
        <MessageInboxUser onUserClick={handleUserClick} />
      </section>

      {/* Chat Section */}
      <section
        className={`flex-1 first-line:  ${
          showChat ? "block" : "hidden md:block hidden-scroll"
        } overflow-y-scroll`}
      >
        {/* Should Dynamic */}
        <div className=" sticky top-0 flex justify-start items-center border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl z-10">
          {/* Back button for mobile */}
          <button
            className=" h-10 w-10 p-2 rounded-full text-white md:hidden"
            onClick={handleBackClick}
          >
            <IoArrowBack className="h-6 w-6" />
          </button>
          <h4 className="px-2 py-3 text-xl font-semibold">
            Mohd. Jahidul Islam
          </h4>
          <span className=" text-center my-auto text-[12px] me-2">🟢</span>
          <span className=" text-center my-auto text-sm">(active now)</span>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default MessageLayout;
