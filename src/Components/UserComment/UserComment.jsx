import "./UserComment.scss";
import "../Header/Header.scss";

function UserComment() {
  return (
    <section className="user-comment">
      <img className="user-comment__img pfp" />
      <div className="user-comment__wrapper">
        <div className="user-comment__text-box">
          <h3 className="user-comment__name">Connor Walton</h3>
          <h4 className="user-comment__date">16/02/2021</h4>
        </div>
        <p className="user-comment__text">
          This is art. This is inexplicable magic expressed in the purest way,
          everything that makes up this majestic work deserves reverence. Let us
          appreciate this for what it is and what it contains.
        </p>
      </div>
    </section>
  );
}

export default UserComment;
