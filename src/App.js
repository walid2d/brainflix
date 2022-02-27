import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Videoinfo from "./Components/VideoInfo/VideoInfo";
import Comment from "./Components/Comment/Comment";
import UserComment from "./Components/UserComment/UserComment";
import VideoCard from "./Components/VideoCard/VideoCard";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero></Hero>
      <Videoinfo />
      <Comment />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default App;
