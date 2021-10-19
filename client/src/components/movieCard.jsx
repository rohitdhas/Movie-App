import { Card } from "../styles/movieCardStyles";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  return (
    <Link to="/watch" style={{ textDecoration: "none", color: "black" }}>
      <Card>
        <div className="thumbnail">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4BAjnsqnZo04y2QXVojQW0YlIHvFcsMT4PRhVgvf2BQelwxTAxoUbwGBA3PnuOqtlwQ&usqp=CAU"
            alt="thumbnail"
          />
        </div>
        <div className="movie_info">
          <div className="name">
            {data.name} - <span className="year">({data.year})</span>
          </div>
          <div className="language">Language - {data.lang}</div>
          <div className="category">Category - {data.category}</div>
          <div className="rating">Rating - {data.rating}⭐</div>
        </div>
      </Card>
    </Link>
  );
}
