import { Link } from "react-router-dom";

const TrendingCard = () => {
  return (
    <div className={``}>
      <Link to="/">
        <div className="px-3 py-2 flex flex-col gap-1 hover:bg-linkColor transition">
          <h5 className="text-sm text-gray-500">Trending in World IT</h5>
          <strong className=" ms-4">#Development</strong>
          <p className=" text-gray-500">333 posts</p>
        </div>
      </Link>
    </div>
  );
};

export default TrendingCard;
