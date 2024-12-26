import Modal from "../../components/fallback-components/Modal";
import FeedReaction from "../../components/feed-card/FeedReaction";
import ImageSmall from "../../components/images/ImageSmall";
import StatusImages from "../../components/images/StatusImages";

const StatusModalPage = () => {
  return (
    <Modal modalTitle="esc">
      <main className="md:flex md:flex-row flex-col w-full gap-4">
        <section className="w-full md:w-[75%] border-l border-r border-gray-700">
          <div className="px-2 md:px-28 flex flex-col justify-center items-center m-auto">
            <StatusImages />
            <FeedReaction />
          </div>
        </section>

        <aside className="hidden md:block md:w-[25%] px-4">
          <div className="sticky top-3">
            <div className="flex gap-3 items-center mb-2">
              <ImageSmall />
              <div>
                <h5 className="font-bold">Mohd Jahidul Islam</h5>
                <h5 className="text-sm text-gray-500">@user_name</h5>
              </div>
            </div>

            <p className="text-justify mb-2">
              AI experts are earning $200k-$335k yearly. So I built 𝟱𝟴+ 𝗚𝗣𝗧-𝟰
              𝗣𝗿𝗼𝗺𝗽𝘁𝘀 for you. You will get: - 5+ Chapters - 58+ AI Prompts -
              58+ New AI Tools And for 24 hrs, its 100% FREE! To get it: 1. Like
              and Repost 2. Reply AI 3. Follow me (so that I can DM)
            </p>
          </div>
        </aside>
      </main>
    </Modal>
  );
};

export default StatusModalPage;
