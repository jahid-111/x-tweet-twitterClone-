import ImageSmall from "../../../components/images/ImageSmall";

const MessageInboxUser = ({ onUserClick }) => {
  const users = [
    { id: 1, name: "User 1", preview: "Last message preview goes here..." },
    { id: 2, name: "User 2", preview: "Last message preview goes here..." },
    { id: 3, name: "User 3", preview: "Last message preview goes here..." },
    { id: 4, name: "User 4", preview: "Last message preview goes here..." },
    { id: 5, name: "User 5", preview: "Last message preview goes here..." },
    { id: 6, name: "User 6", preview: "Last message preview goes here..." },
    { id: 7, name: "User 7", preview: "Last message preview goes here..." },
    { id: 8, name: "User 8", preview: "Last message preview goes here..." },
    { id: 9, name: "User 9", preview: "Last message preview goes here..." },
    { id: 10, name: "User 10", preview: "Last message preview goes here..." },
    { id: 11, name: "User 11", preview: "Last message preview goes here..." },
    { id: 12, name: "User 12", preview: "Last message preview goes here..." },
    { id: 13, name: "User 13", preview: "Last message preview goes here..." },
    { id: 14, name: "User 14", preview: "Last message preview goes here..." },
    { id: 16, name: "User 16", preview: "Last message preview goes here..." },
    { id: 17, name: "User 17", preview: "Last message preview goes here..." },
    { id: 18, name: "User 18", preview: "Last message preview goes here..." },
    { id: 19, name: "User 19", preview: "Last message preview goes here..." },
  ];

  return (
    <ul className="divide-y divide-gray-700">
      {users.map((user) => (
        <li key={user.id} className="flex items-center">
          {/* Use button instead of div for better semantics */}
          <button
            onClick={() => onUserClick(user.id)}
            className="w-full text-left flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700"
          >
            <ImageSmall />
            <div className="ml-3">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-400">{user.preview}</p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MessageInboxUser;
