import VideoCard from "../VideoCard/VideoCard";
import "./CardList.scss";

function Cardlist(props) {
  return (
    <section className="cardlist">
      <h1 className="cardlist__header">Next Videos</h1>
      {props.videoData
        .filter((v) => v.id !== props.currentVideos.id)
        .map((v) => (
          <a
            key={v.id}
            onClick={() => {
              props.updateVideo(v.id);
            }}
          >
            <VideoCard
              title={v.title}
              channel={v.channel}
              image={v.image}
              alt={v.title}
            />
          </a>
        ))}
    </section>
  );
}
export default Cardlist;
