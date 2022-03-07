import "./Upload.scss";
import { Redirect } from "react-router-dom";
import { Component } from "react";
import VideoThumbnail from "../../../Assets/Images/Upload-video-preview.jpg";

class Upload extends Component {
  state = {
    submit: null,
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target.name.value && event.target.description.value) {
      alert(`Form Successfully Submitted!`);
      this.setState({ submit: true });
    } else {
      alert(`Please Populate The Form!`);
    }
  };

  render() {
    if (this.state.submit) {
      return <Redirect to="/" />;
    }
    return (
      <div className="upload-page">
        <form
          className="upload-page__container"
          onSubmit={this.onSubmitHandler}
        >
          <h1 className="upload-page__title">Upload Video</h1>
          <div className="upload-page__wrapper">
            <div className="upload-page__thumbnail">
              <h4 className="upload-page__thumbnail-label label">
                Video Thumbnail
              </h4>
              <img
                src={VideoThumbnail}
                alt="A person riding a blue bike"
                className="upload-page__thumbnail-img"
              />
            </div>
            <div className=" upload-page__form">
              <label className="upload-page__form-label label">
                Title your video
              </label>
              <input
                type="text"
                className="upload-page__input input"
                name="name"
                placeholder="Add a title to your video"
                autocomple="off"
              />
              <label className=" upload-page__form-label label">
                Add a video description
              </label>
              <textarea
                type="text"
                className="upload-page__input-comment input"
                name="description"
                autocomple="off"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
          <div className="upload-page__btn-box">
            <input
              type="submit"
              className="upload-page__btn btn"
              value="publish"
            />
            <input
              type="reset"
              className="upload-page__btn-cancel btn"
              value="cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Upload;
