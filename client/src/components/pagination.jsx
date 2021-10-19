import { List, Number } from "../styles/paginationStyles";

export default function Pagination() {
  return (
    <>
      <p style={{ fontWeight: "bold", marginTop: "50px" }}>
        Jump to Page
        <i style={{ marginLeft: "10px" }} className="bi bi-arrow-right"></i>
      </p>
      <List>
        <Number className="active">
          <a href="#">1</a>
        </Number>
        <Number>
          <a href="#">2</a>
        </Number>
        <Number>
          <a href="#">3</a>
        </Number>
      </List>
    </>
  );
}
