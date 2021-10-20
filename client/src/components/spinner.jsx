import { Loader, LoaderBox, SearchSpinnerBox } from "../styles/spinnerStyles";

export default function Spinner() {
  return (
    <LoaderBox id="spinner">
      <Loader />
      <div id="status_info">Loading...🚀</div>
    </LoaderBox>
  );
}

export function startSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.classList.add("active");
}

export function stopSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("active");
}

export function updateLoadingText(text) {
  const statusInfo = document.getElementById("status_info");
  statusInfo.innerText = text;
}

// Search Spinner

export function SearchSpinner() {
  return (
    <SearchSpinnerBox id="search_spinner">
      <Loader />
    </SearchSpinnerBox>
  );
}

export function startSearchSpinner() {
  const spinner = document.getElementById("search_spinner");
  spinner.classList.add("active");
}

export function stopSearchSpinner() {
  const spinner = document.getElementById("search_spinner");
  spinner.classList.remove("active");
}
