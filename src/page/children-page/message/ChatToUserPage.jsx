import { IoIosSend } from "react-icons/io";
import ImageSmall from "../../../components/images/ImageSmall";

const ChatToUserPage = () => {
  return (
    <div>
      {/* Chat Messages */}
      <div className="overflow-y-scroll h-[calc(100vh-10rem)] px-4 py-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`flex items-center ${
              i % 2 === 0 ? "justify-end" : "justify-start"
            } mb-4`}
          >
            {i % 2 !== 0 && (
              <div className="mr-3">
                <ImageSmall />
              </div>
            )}
            <div
              className={`px-3 py-2 text-start rounded-lg break-words max-w-[70%] ${
                i % 2 === 0
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              {i % 2 === 0
                ? `User ${i + 1} sent this message.`
                : `This is a reply from User ${
                    i + 1
                  }. This message has a lot of text to demonstrate the text wrapping and alignment within the chat bubble to ensure it looks good no matter the length of the message.`}
            </div>
            {i % 2 === 0 && (
              <div className="ml-3">
                <ImageSmall />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="sticky bottom-10 px-4 border-gray-700">
        <form className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow p-3 rounded-full bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            title="send message"
            className="bg-blue-500 text-white p-3 rounded-full"
          >
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatToUserPage;
