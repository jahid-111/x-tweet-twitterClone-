const StatusImages = ({ tweetMain }) => {
  // console.log("tweet", tweetMain);
  return (
    <div className="w-full">
      <div className="flex justify-start items-center">
        <img
          alt="tweet-content-image"
          className="w-full h-full rounded-3xl "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
        />
      </div>
    </div>
  );
};

export default StatusImages;
