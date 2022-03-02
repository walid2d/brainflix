import "./Upload.scss";

function Upload(props) {
  return (
    <div className="upload-page">
      <div className="upload-page__container">
        <h1 className="upload-page__title">Upload Video</h1>
        <div className="upload-page__wrapper">
          <div className="upload-page__thumbnail">
            <h4 className="upload-page__thumbnail-label label">
              Video Thumbnail
            </h4>
            <img
              src={props.thumbnail}
              alt=""
              className="upload-page__thumbnail-img"
            />
          </div>
          <form className=" upload-page__form">
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
              name="comment"
              autocomple="off"
              placeholder="Add a description to your video"
            ></textarea>
          </form>
        </div>
        <div className="upload-page__btn-box">
          <input
            type="submit"
            className="upload-page__btn btn"
            value="publish"
          />
          <input
            type="submit"
            className="upload-page__btn-cancel btn"
            value="cancel"
          />
        </div>
      </div>
    </div>
  );
}
export default Upload;
