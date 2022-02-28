import "./UserComment.scss";
import "../Header/Header.scss";

function UserComment(props) {
  const dateConvert = new Date(Number(props.date));
  const newDate = dateConvert.toLocaleDateString();
  return (
    <section className="user-comment">
      <img className="user-comment__img pfp" />
      <div className="user-comment__wrapper">
        <div className="user-comment__text-box">
          <h3 className="user-comment__name">{props.name}</h3>
          <h4 className="user-comment__date">{newDate}</h4>
        </div>
        <p className="user-comment__text">{props.text}</p>
      </div>
    </section>
  );
}

export default UserComment;
