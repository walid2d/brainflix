import "./Hero.scss";

function Hero(props) {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={`${process.env.REACT_APP_API}${props.poster}`}
        controls
      ></video>
    </section>
  );
}
export default Hero;
