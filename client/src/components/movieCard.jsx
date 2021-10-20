import { Card } from "../styles/movieCardStyles";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  return (
    <Link
      to={`/watch/${data._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card>
        <div className="thumbnail">
          <img
            src={`http://localhost:8080/file/${data.thumbnail}`}
            alt="thumbnail"
          />
        </div>
        <div className="movie_info">
          <div className="name">
            {data.name} - <span className="year">({data.year})</span>
          </div>
          <div className="language">Language - {data.language}</div>
          <div className="category">Category - {data.category}</div>
          <div className="rating">Rating - {data.rating}⭐</div>
        </div>
      </Card>
    </Link>
  );
}
