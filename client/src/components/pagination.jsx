import { List, Number } from "../styles/paginationStyles";

export default function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];

  for (let x = 1; x <= Math.ceil(totalMovies / moviesPerPage); x++) {
    pageNumbers.push(x);
  }

  return (
    <>
      <p style={{ fontWeight: "bold", marginTop: "50px" }}>
        Jump to Page
        <i style={{ marginLeft: "10px" }} className="bi bi-arrow-right"></i>
      </p>
      <List>
        {pageNumbers.map((num) => {
          return (
            <Number onClick={() => paginate(num)} key={num}>
              <a href="#">{num}</a>
            </Number>
          );
        })}
      </List>
    </>
  );
}
