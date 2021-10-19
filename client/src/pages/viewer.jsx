import Video from "../video/video.mp4";
import { Player } from "../styles/viewerStyles";
import { Link } from "react-router-dom";

export default function Viewer() {
  const data = {
    name: "Predestination",
    year: 2013,
    category: "Fantasy",
    lang: "English",
    rating: 4.5,
  };

  return (
    <Player>
      <Link to="/">
        <button className="back_btn">
          <i className="bi bi-arrow-left-square"></i>
          Back
        </button>
      </Link>
      <video controls src={Video}></video>
      <div className="video_info">
        <div className="name">
          {data.name} - <span className="year">({data.year})</span>
        </div>
        <div className="language">Language - {data.lang}</div>
        <div className="category">Category - {data.category}</div>
        <div className="rating">Rating - {data.rating}⭐</div>
      </div>
      <button className="delete_btn">
        <i className="bi bi-trash"></i>
        Delete Movie
      </button>
    </Player>
  );
}
