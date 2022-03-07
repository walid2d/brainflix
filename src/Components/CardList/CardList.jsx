import VideoCard from "../VideoCard/VideoCard";
import "./CardList.scss";
import { Link } from "react-router-dom";

function Cardlist({ videoList }) {
  return (
    <section className="cardlist">
      <h1 className="cardlist__header">Next Videos</h1>
      {videoList &&
        videoList.map((v) => (
          <Link to={`/home/${v.id}`} key={v.id}>
            <VideoCard
              title={v.title}
              channel={v.channel}
              image={v.image}
              alt={v.title}
            />
          </Link>
        ))}
    </section>
  );
}

export default Cardlist;
