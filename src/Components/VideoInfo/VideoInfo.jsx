import "./VideoInfo.scss";
import ViewsIcon from "../../Assets/Icons/views.svg";
import LikeIcon from "../../Assets/Icons/likes.svg";

function Videoinfo(props) {
  const dateConvert = new Date(Number(props.date));
  const newDate = dateConvert.toLocaleDateString();
  return (
    <section className="videoinfo">
      <h1 className="videoinfo__title">{props.title}</h1>
      <div className="videoinfo__wrapper">
        <div className="videoinfo__box-id">
          <h3 className="videoinfo__author">By {props.creator}</h3>
          <h4 className="videoinfo__date">{newDate}</h4>
        </div>
        <div className="videoinfo__box-kpi">
          <div className="videoinfo__views">
            <img
              className="videoingo__views-icon"
              alt="An eye shaped Icon"
              src={ViewsIcon}
            ></img>
            <h3 className="videoinfo__views-text">{props.views}</h3>
          </div>

          <div className="videoinfo__like">
            <img
              className="videoinfo__like-icon"
              alt="Heart Icon"
              src={LikeIcon}
            ></img>
            <h4 className="videoinfo__like-text">{props.likes}</h4>
          </div>
        </div>
      </div>
      <div className="videoinfo__wrapper-des">
        <p className="videoinfo__text">{props.text}</p>
        <h3 className="videoinfo__cmnts">{props.cmntsNumber} Comments</h3>
      </div>
    </section>
  );
}

export default Videoinfo;
