import "./Comment.scss";
import "../Header/Header.scss";
import UserComment from "../UserComment/UserComment";
import Pfp from "../../Assets/Images/Mohan-muruge.jpg";
import { v4 as uuid } from "uuid";
function Comment(props) {
  return (
    <section className="comment">
      <form className="form">
        <img className="form__img pfp" src={Pfp} />
        <div className="form__wrapper">
          <label for="comment" className="form__label ">
            Join The Conversation
          </label>
          <textarea
            type="text"
            className="form__input"
            name="usercomment"
            placeholder="Add a comment"
          ></textarea>
          <input
            type="submit"
            className="btn form--btn"
            value="Comment"
          ></input>
        </div>
      </form>
      <div className="comment__forum">
        {props.comment.map((e, i) => {
          return (
            <UserComment
              key={uuid()}
              name={e.name}
              date={e.timestamp}
              text={e.comment}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Comment;
