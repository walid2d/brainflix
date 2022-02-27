import "./Comment.scss";
import "./Header.scss";
import Pfp from "../Assets/Images/Mohan-muruge.jpg";

function Comment() {
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
            className="form__input search__input"
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
    </section>
  );
}

export default Comment;
