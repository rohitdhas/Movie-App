import { HomePage, AddBtn, SearchForm } from "../styles/homeStyles";
import MovieCard from "../components/movieCard";
import Pagination from "../components/pagination";
import { Link } from "react-router-dom";
import { useFetchData } from "../helpers/dataHandler";
import { useState } from "react";

export default function Home() {
  const { data: movies } = useFetchData("http://localhost:8080/movie/get-all");
  const unwantedPathForBtn = ["/add-new"];

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 1;

  // Get Current Posts
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  console.log(currentMovies);
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
      {!movies.length ? (
        <h2 className="no_data">No Movie Data!🎈</h2>
      ) : (
        currentMovies.map((movie) => {
          return <MovieCard key={movie._id} data={movie} />;
        })
      )}
      {movies.length ? (
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={setCurrentPage}
        />
      ) : null}
    </HomePage>
  );
}
