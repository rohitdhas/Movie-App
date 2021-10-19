import {
  AddMovieForm,
  AddMoviePage,
  FormNav,
} from "../styles/addMovieFormStyles";
import { Link } from "react-router-dom";

export default function AddNewMovieForm() {
  return (
    <>
      <FormNav>
        <Link to="/">
          <button>
            <i className="bi bi-arrow-left-square"></i>
            Back
          </button>
        </Link>
      </FormNav>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        <i
          className="bi bi-plus-square-fill"
          style={{ marginRight: "10px", color: "royalblue" }}
        ></i>
        Upload a Movie
      </h2>
      <AddMoviePage>
        <AddMovieForm>
          <div className="error"></div>
          <div id="name_input">
            <label>Movie Name</label>
            <input type="text" placeholder="Enter Movie Name" />
          </div>
          <div id="year_input">
            <label>Year of Release</label>
            <input type="number" placeholder="Year of Release" />
          </div>
          <div id="rating_input">
            <label>Ratings</label>
            <input type="number" placeholder="Movie Rating" />
          </div>
          <div>
            <label>Category</label>
            <select>
              <option value="Action">Action</option>
              <option value="Romantic">Romantic</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div>
            <label className="custom_file_input" for="thumbnail_input">
              Select Thumbnail
              <i className="bi bi-plus-square-fill"></i>
            </label>
            <input id="thumbnail_input" type="file" />
          </div>
          <div>
            <label className="custom_file_input" for="video_input">
              Select Movie
              <i className="bi bi-plus-square-fill"></i>
            </label>
            <input id="video_input" type="file" />
          </div>

          <button>Add Movie</button>
        </AddMovieForm>
      </AddMoviePage>
    </>
  );
}
