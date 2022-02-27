import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Videoinfo from "./Components/VideoInfo";
import Comment from "./Components/Comment";
import UserComment from "./Components/UserComment";

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
    </div>
  );
}

export default App;
