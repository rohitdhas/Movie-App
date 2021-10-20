import {
  AddMovieForm,
  AddMoviePage,
  FormNav,
} from "../styles/addMovieFormStyles";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { uploadFile } from "../helpers/formHandler";

export default function AddNewMovieForm() {
  const movieName = useRef();
  const releaseYear = useRef();
  const ratings = useRef();
  const category = useRef();
  const thumbnail = useRef();
  const movie = useRef();
  const language = useRef();
  const error = useRef();
  const formRef = useRef();

  const [isThumbnail, setIsThumbnail] = useState(false);
  const [isMovie, setIsMovie] = useState(false);

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
        <AddMovieForm ref={formRef}>
          <div className="error" ref={error}></div>
          <div>
            <label>
              Movie Name <span style={{ color: "tomato" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Movie Name"
              required
              ref={movieName}
            />
          </div>
          <div>
            <label>
              Language <span style={{ color: "tomato" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Movie Language"
              required
              ref={language}
            />
          </div>
          <div>
            <label>
              Year of Release <span style={{ color: "tomato" }}>*</span>
            </label>
            <input
              type="number"
              placeholder="Year of Release"
              required
              ref={releaseYear}
              name="year"
            />
          </div>
          <div>
            <label>
              Ratings <span style={{ color: "tomato" }}>*</span>
            </label>
            <input
              type="number"
              placeholder="Movie Rating"
              required
              max={10}
              min={0}
              ref={ratings}
              name="ratings"
            />
          </div>
          <div>
            <label>
              Category <span style={{ color: "tomato" }}>*</span>
            </label>
            <select name="category" required ref={category}>
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
            <label className="custom_file_input" htmlFor="thumbnail_input">
              <span>
                {!isThumbnail ? (
                  <>
                    Select Thumbnail{" "}
                    <span style={{ color: "tomato" }}>(Max size 1 MB)*</span>
                  </>
                ) : (
                  <>File Selected</>
                )}
              </span>
              <i className="bi bi-plus-square-fill"></i>
            </label>
            <input
              accept="image/*"
              id="thumbnail_input"
              type="file"
              required
              ref={thumbnail}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setIsThumbnail(true);
                } else {
                  setIsThumbnail(false);
                }
              }}
            />
          </div>
          <div>
            <label className="custom_file_input" htmlFor="video_input">
              <span>
                {!isMovie ? (
                  <>
                    Select Movie{" "}
                    <span style={{ color: "tomato" }}>(Max size 14 MB)*</span>
                  </>
                ) : (
                  <>File Selected</>
                )}
              </span>
              <i className="bi bi-plus-square-fill"></i>
            </label>
            <input
              id="video_input"
              accept="video/*"
              type="file"
              required
              ref={movie}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setIsMovie(true);
                } else {
                  setIsMovie(false);
                }
              }}
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              uploadFile(
                e,
                movieName,
                releaseYear,
                ratings,
                category,
                thumbnail,
                movie,
                error,
                formRef,
                language
              );
            }}
          >
            Add Movie
          </button>
        </AddMovieForm>
      </AddMoviePage>
    </>
  );
}
