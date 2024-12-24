import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <div className="w-full flex mx-auto">
      <main className=" w-full">
        {[...Array(20)].map((_, index) => (
          <Link key={index} to="/">
            <div className="px-3 py-2 flex flex-col gap-1 hover:bg-linkColor transition">
              <h5 className="text-sm text-gray-500"> HELLO WORLD</h5>
              <strong className=" ms-4">#Software</strong>
              <p className=" text-gray-500">333 posts</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default NewsPage;
