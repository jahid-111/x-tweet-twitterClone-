import clientApi from "../../../../services/axiosAPI_Config";

export default function Follow({ user, authId }) {
  // console.log(user?._id);

  async function handleUserFollow(e, id) {
    console.log("authID---", authId);
    e.preventDefault();
    const payload = {
      userId: authId,
      targetId: user,
    };

    const response = await clientApi.put(`user/${id}/follow`, {
      body: payload,
    });

    console.log(response);
  }

  return (
    <>
      <button
        onClick={(e) => handleUserFollow(e, user?._id)}
        className="bg-gray-200 hover:bg-gray-300 text-gray-900 f§ont-medium rounded-full px-5 py-1"
      >
        Follow
      </button>
    </>
  );
}
