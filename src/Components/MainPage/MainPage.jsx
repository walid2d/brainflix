import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Videoinfo from "../VideoInfo/VideoInfo";
import Comment from "../Comment/Comment";
import Cardlist from "../CardList/CardList";
import "./MainPage.scss";
import axios from "axios";

class MainPage extends Component {
  state = {
    videoData: {},
    initialState: {},
  };

  componentDidMount() {
    document.title = "Brainflix";
    axios
      .get(`${process.env.REACT_APP_API}/videos`)
      .then((response) => {
        const alldata = response.data.data;
        this.setState({
          videoData: alldata,
        });

        const currentVideoId = response.data.data[0].id;
        const currentId = this.props.match.params.videoId;
        let id = "";
        if (!currentId) {
          id = currentVideoId;
        } else {
          id = currentId;
        }
        axios
          .get(`${process.env.REACT_APP_API}/videos/${id}`)
          .then((response) => {
            const intialData = response.data.data;
            this.setState({
              currentVideo: intialData,
            });
          });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevprops) {
    const currentId = this.props.match.params.videoId;
    if (prevprops.match.params.videoId !== currentId) {
      axios
        .get(`${process.env.REACT_APP_API}/videos/${currentId}`)
        .then((response) => {
          this.setState({
            currentVideo: response.data.data,
          });
        })
        .catch((err) => console.log(err));
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { videoData, currentVideo } = this.state;
    if (videoData && currentVideo) {
      const filteredVideo = videoData.filter(
        (ele) => ele.id !== currentVideo.id
      );
      return (
        <div className="main">
          <Hero image={currentVideo.image}></Hero>
          <div className="main__wrapper">
            <div className="main__comment-box">
              <Videoinfo allInfo={currentVideo} />
              <Comment comment={currentVideo.comments} />
            </div>
            <Cardlist videoList={filteredVideo} />
          </div>
        </div>
      );
    } else {
      return <h1 className="loading-text"> Loading...</h1>;
    }
  }
}
export default MainPage;
