import { Player } from "../styles/viewerStyles";
import { Link } from "react-router-dom";
import { useFetchData, deleteMovie } from "../helpers/dataHandler";
import { useParams } from "react-router";

export default function Viewer() {
  const params = useParams();
  const { data } = useFetchData(`http://localhost:8080/movie?id=${params.id}`);

  return (
    <Player>
      <Link to="/">
        <button className="back_btn">
          <i className="bi bi-arrow-left-square"></i>
          Back
        </button>
      </Link>
      <video controls src={`http://localhost:8080/file/${data.movie}`}></video>
      <div className="video_info">
        <div className="name">
          {data.name} - <span className="year">({data.year})</span>
        </div>
        <div className="language">Language - {data.language}</div>
        <div className="category">Category - {data.category}</div>
        <div className="rating">Rating - {data.rating}⭐</div>
      </div>
      <button onClick={() => deleteMovie(data.movie)} className="delete_btn">
        <i className="bi bi-trash"></i>
        Delete Movie
      </button>
    </Player>
  );
}
