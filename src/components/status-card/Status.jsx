import ImageSmall from "../images/ImageSmall";
import StatusImages from "../images/StatusImages";

const Status = () => {
  return (
    <div className=" p-3">
      <div className=" flex gap-3 justify-start items-center">
        <ImageSmall />
        <div>
          <h5>Mohd Jahidul Islam</h5>
          <h5>@user name</h5>
        </div>
      </div>

      <p className="text-wrap mb-2 ">
        AI experts are earning $200k-$335k yearly. So I built 𝟱𝟴+ 𝗚𝗣𝗧-𝟰 𝗣𝗿𝗼𝗺𝗽𝘁𝘀
        for you. You will get: - 5+ Chapters - 58+ AI Prompts - 58+ New AI Tools
        And for 24 hrs, its 100% FREE! To get it, 1. Like and Repost 2. Reply AI
        3. Follow me (so that I can DM)
      </p>

      <StatusImages />
      {/* Timmer Status */}
    </div>
  );
};

export default Status;
