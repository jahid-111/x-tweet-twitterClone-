export default function Follow({ user }) {
  // console.log(user?._id);

  function handleUserFollow(e, id) {
    e.preventDefault();
    console.log(id);
  }

  return (
    <>
      <button
        onClick={(e) => handleUserFollow(e, user?._id)}
        className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-5 py-1"
      >
        Follow
      </button>
    </>
  );
}
