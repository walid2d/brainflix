import Header from "./Components/Header/Header";
import React, { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Videoinfo from "./Components/VideoInfo/VideoInfo";
import Comment from "./Components/Comment/Comment";
import VideoDetails from "./Data/video-details.json";
import Cardlist from "./Components/CardList/CardList";

import "./App.scss";

function App() {
  const [state, setState] = useState(VideoDetails);
  let intialState = state[0];
  console.log(intialState);
  return (
    <div className="main">
      <Header />
      <Hero poster={intialState.image} duration={intialState.duration}></Hero>
      <div className="main__wrapper">
        <div className="main__comment-box">
          <Videoinfo
            creator={intialState.channel}
            text={intialState.description}
            likes={intialState.likes}
            title={intialState.title}
            views={intialState.views}
            date={intialState.timestamp}
            cmntsNumber={intialState.comments.length}
          />
          <Comment comment={intialState.comments} />
        </div>
        <Cardlist />
      </div>
    </div>
  );
}

export default App;
