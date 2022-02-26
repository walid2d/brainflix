import "./VideoInfo.scss";
import ViewsIcon from "../Assets/Icons/views.svg";
import LikeIcon from "../Assets/Icons/likes.svg";

function Videoinfo() {
  return (
    <section className="videoinfo">
      <h1 className="videoinfo__title">BMX Rampage: 2021 Highlights</h1>
      <div className="videoinfo__wrapper">
        <div className="videoinfo__box-id">
          <h3 className="videoinfo__author">By Red Crow</h3>
          <h4 className="videoinfo__date">07/11/2021</h4>
        </div>
        <div className="videoinfo__box-kpi">
          <div className="videoinfo__views">
            <img
              className="videoingo__views-icon"
              alt="An eye shaped Icon"
              src={ViewsIcon}
            ></img>
            <h3 className="videoinfo__views-text">100023</h3>
          </div>

          <div className="videoinfo__like">
            <img
              className="videoinfo__like-icon"
              alt="Heart Icon"
              src={LikeIcon}
            ></img>
            <h4 className="videoinfo__like-text">110985</h4>
          </div>
        </div>
      </div>
      <div className="videoinfo__wrapper-des">
        <p className="videoinfo__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3 className="videoinfo__cmnts">3 Comments</h3>
      </div>
    </section>
  );
}

export default Videoinfo;
