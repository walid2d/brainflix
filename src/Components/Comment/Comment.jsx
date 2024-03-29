import "./Comment.scss";
import "../Header/Header.scss";
import UserComment from "../UserComment/UserComment";
import Pfp from "../../Assets/Images/Mohan-muruge.jpg";
import { v4 as uuidv4 } from "uuid";

function Comment(props) {
  return (
    <section className="comment">
      <form className="form">
        <img className="form__img pfp" src={Pfp} />
        <div className="form__wrapper">
          <label htmlFor="comment" className="form__label ">
            Join The Conversation
          </label>
          <div className="form__input-wrapper">
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
        </div>
      </form>
      <div className="comment__forum">
        {props.comment.map((e) => {
          return (
            <UserComment
              key={uuidv4()}
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
