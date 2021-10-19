import { HomePage, AddBtn, SearchForm } from "../styles/homeStyles";
import MovieCard from "../components/movieCard";
import Pagination from "../components/pagination";
import { Link } from "react-router-dom";

export default function Home() {
  const movieData = {
    name: "Predestination",
    year: 2013,
    category: "Fantasy",
    lang: "English",
    rating: 4.5,
  };

  const unwantedPathForBtn = ["/add-new"];

  return (
    <HomePage>
      {!unwantedPathForBtn.includes(window.location.pathname) && (
        <AddBtn id="add_btn">
          <Link to="/add-new">
            <button>
              <i className="bi bi-plus-square-fill"></i>
              Upload a Movie
            </button>
          </Link>
        </AddBtn>
      )}
      <SearchForm>
        <div className="label">
          <label>Search Movie</label>
          <i className="bi bi-search search_icon"></i>
        </div>
        <input type="text" placeholder="Type Movie Name" />
      </SearchForm>
      <MovieCard data={movieData} />
      <MovieCard data={movieData} />
      <MovieCard data={movieData} />
      <MovieCard data={movieData} />
      <MovieCard data={movieData} />
      <MovieCard data={movieData} />
      <Pagination />
    </HomePage>
  );
}
