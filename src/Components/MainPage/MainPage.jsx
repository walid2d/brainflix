import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Videoinfo from "../VideoInfo/VideoInfo";
import Comment from "../Comment/Comment";
import Cardlist from "../CardList/CardList";
import "./MainPage.scss";
import axios from "axios";

class MainPage extends Component {
  state = {
    videoData: null,
    initialState: null,
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/videos`)
      .then((response) => {
        const alldata = response.data.data;
        this.setState({
          videoData: alldata,
        });

        const initialStateId = response.data.data[0].id;
        const currentId = this.props.match.params.videoId;
        let id = "";
        if (!currentId) {
          id = initialStateId;
        } else {
          id = currentId;
        }
        axios
          .get(`${process.env.REACT_APP_API}/videos/${id}`)
          .then((response) => {
            const intialData = response.data.data;
            this.setState({
              initialState: intialData,
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
            initialState: response.data.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    if (this.state.videoData && this.state.initialState) {
      const filteredVideo = this.state.videoData.filter(
        (ele) => ele.id !== this.state.initialState.id
      );
      return (
        <div className="main">
          <Hero poster={this.state.initialState.image}></Hero>
          <div className="main__wrapper">
            <div className="main__comment-box">
              <Videoinfo allInfo={this.state.initialState} />
              <Comment comment={this.state.initialState.comments} />
            </div>
            <Cardlist
              videoList={filteredVideo}
              updateVideo={this.clickHandler}
            />
          </div>
        </div>
      );
    } else {
      return <h1 className="loading-text"> Loading...</h1>;
    }
  }
}
export default MainPage;
