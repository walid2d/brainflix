import "./Hero.scss";

function Hero(props) {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={`${process.env.REACT_APP_API}${props.image}`}
        controls
      ></video>
    </section>
  );
}
export default Hero;
