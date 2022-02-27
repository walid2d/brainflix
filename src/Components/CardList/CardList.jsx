import VideoCard from "../VideoCard/VideoCard";
import "./CardList.scss";
import VideoCardData from "../../Data/videos.json";

function Cardlist(props) {
  const dataCopy = VideoCardData.slice();

  return (
    <section className="cardlist">
      <h1 className="cardlist__header">Next Videos</h1>
      {dataCopy.map((v) => {
        return (
          <VideoCard
            key={v.id}
            title={v.title}
            channel={v.channel}
            image={v.image}
            alt={v.title}
          />
        );
      })}
    </section>
  );
}
export default Cardlist;
