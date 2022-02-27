import "./Hero.scss";

function Hero(props) {
  return (
    <section className="video">
      <video className="video__player" controls poster={props.poster}></video>
    </section>
  );
}
export default Hero;
