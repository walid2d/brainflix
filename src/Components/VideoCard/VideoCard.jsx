import "./VideoCard.scss";

function VideoCard(props) {
  return (
    <section className="video-card">
      <img className="video-card__img" src={props.image} alt={props.alt} />
      <div className="video-card__box">
        <p className="video-card__des">{props.title}</p>
        <p className="video-card__creator">{props.channel}</p>
      </div>
    </section>
  );
}

export default VideoCard;
