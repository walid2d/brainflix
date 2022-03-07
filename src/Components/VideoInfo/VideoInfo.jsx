import "./VideoInfo.scss";
import ViewsIcon from "../../Assets/Icons/views.svg";
import LikeIcon from "../../Assets/Icons/likes.svg";

function Videoinfo(props) {
  const { title, channel, timestamp, views, likes, description, comments } =
    props.allInfo;
  const dateConvert = new Date(Number(timestamp));
  const newDate = dateConvert.toLocaleDateString();
  return (
    <section className="videoinfo">
      <h1 className="videoinfo__title">{title}</h1>
      <div className="videoinfo__wrapper">
        <div className="videoinfo__box-id">
          <h3 className="videoinfo__author">By {channel}</h3>
          <h4 className="videoinfo__date">{newDate}</h4>
        </div>
        <div className="videoinfo__box-kpi">
          <div className="videoinfo__views">
            <img
              className="videoingo__views-icon"
              alt="An eye shaped Icon"
              src={ViewsIcon}
            />
            <h3 className="videoinfo__views-text">{views}</h3>
          </div>
          <div className="videoinfo__like">
            <img
              className="videoinfo__like-icon"
              alt="Heart Icon"
              src={LikeIcon}
            />
            <h4 className="videoinfo__like-text">{likes}</h4>
          </div>
        </div>
      </div>
      <div className="videoinfo__wrapper-des">
        <p className="videoinfo__text">{description}</p>
        <h3 className="videoinfo__cmnts">{comments.length} Comments</h3>
      </div>
    </section>
  );
}

export default Videoinfo;
