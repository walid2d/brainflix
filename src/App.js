import Upload from "./Components/Pages/Upload";
import Header from "./Components/Header/Header";
import NotFound from "./Components/Pages/NotFound";
import Hero from "./Components/Hero/Hero";
import Videoinfo from "./Components/VideoInfo/VideoInfo";
import Comment from "./Components/Comment/Comment";
import VideoDetails from "./Data/video-details.json";
import Cardlist from "./Components/CardList/CardList";
import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

class App extends Component {
  state = {
    allData: VideoDetails,
    initialState: VideoDetails[0],
  };
  clickHandler = (id) => {
    const currentVideo = this.state.allData.find((video) => video.id === id);
    this.setState({
      initialState: currentVideo,
    });
  };
  render() {
    return (
      <div className="main">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Hero poster={this.state.initialState.image}></Hero>
            <div className="main__wrapper">
              <div className="main__comment-box">
                <Videoinfo initialVideo={this.state.initialState} />
                <Comment comment={this.state.initialState.comments} />
              </div>
              <Cardlist
                videoData={this.state.allData}
                currentVideos={this.state.initialState}
                updateVideo={this.clickHandler}
              />
            </div>
          </Route>
          <Route path="/upload">
            <Upload thumbnail={this.state.initialState.image} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
