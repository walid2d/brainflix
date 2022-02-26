import Logo from "./Assets/Logo/BrainFlix-logo.svg";
import Pfp from "./Assets/Images/Mohan-muruge.jpg";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Videoinfo from "./Components/VideoInfo";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero></Hero>
      <Videoinfo />
    </div>
  );
}

export default App;

{
  /*
      <section className="">
        <h1 className="">video title</h1>
        <div className="">
          <h4 className="">posted by</h4>
          <h4 className="">Date</h4>
          <img className="" alt="icon"></img>
          <h4 className="">watched</h4>
          <img className="" alt="icon"></img>
          <h4 className="">likes</h4>
        </div>
        <p className="">Lorem ipsum</p>
        <h4 className="">number comments</h4>
      </section>
      <aside className="">
        <h2 className="">Next videos</h2>
        <div className="">
          <img className="" alt="card img"></img>
          <div className="">
            <h3 className="">video title</h3>
            <h4 className="">creator</h4>
          </div>
        </div>
      </aside>
      <section className="">
        <form className="form">
          <img className="pfp" />
          <label for="comment" className="">
            Join the conversation
          </label>
          <input
            type="text"
            className=""
            name="usercomment"
            autocomple="off"
            placeholder="Add a new comment"
          ></input>
          <input type="submit" className="btn" value="Comment" />
        </form>
        <div className="user-comment__box">
          <img className="user-comment__img" alt="pfp" />
          <div className="user-comment__wrapper">
            <div className="user-comment__text-box">
              <h3 className="user-comment__name">Michael Lyons</h3>
              <h4 className="user-comment__date">8/09/2021</h4>
            </div>
            <p className="user-comment__text">
              This is art. This is inexplicable magic expressed in the purest
              way, everything that makes up this majestic work deserves
              reverence. Let us appreciate this for what it is and what it
              contains.
            </p>
          </div>
        </div>
      </section> */
}
