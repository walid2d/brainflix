import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Videoinfo from "./Components/VideoInfo";
import Comment from "./Components/Comment";
import UserComment from "./Components/UserComment";
import VideoCard from "./Components/VideoCard";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero></Hero>
      <Videoinfo />
      <Comment />
      <UserComment />
      <UserComment />
      <UserComment />
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
