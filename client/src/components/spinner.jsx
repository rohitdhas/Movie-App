import { Loader, LoaderBox } from "../styles/spinnerStyles";

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
