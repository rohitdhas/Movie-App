import { HomePage, AddBtn, SearchForm } from "../styles/homeStyles";
import MovieCard from "../components/movieCard";
import Pagination from "../components/pagination";
import { Link } from "react-router-dom";
import { useFetchData } from "../helpers/dataHandler";
import { useEffect, useState } from "react";
import { searchFor } from "../helpers/searchHandler";
import { SearchSpinner } from "../components/spinner";

export default function Home() {
  const {
    data: movies,
    setData,
    fetchData,
  } = useFetchData("http://localhost:8080/movie/get-all");

  const unwantedPathForBtn = ["/add-new"];
  const [searchInput, setSearchInput] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  // Get Current Posts
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  useEffect(() => {
    if (searchInput) {
      searchFor(searchInput, setData);
    } else {
      fetchData();
    }
  }, [searchInput]);

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
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="Type Movie Name"
        />
      </SearchForm>
      <SearchSpinner />
      {!movies.length ? (
        <h2 className="no_data">No Movies Found!🎈</h2>
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
