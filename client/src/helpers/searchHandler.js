import { startSearchSpinner, stopSearchSpinner } from "../components/spinner"

export function searchFor(term, setState) {
    startSearchSpinner()
    fetch(`http://localhost:8080/movie/search?term=${term}`)
        .then(res => res.json())
        .then(({ data }) => {
            stopSearchSpinner()
            if (data) {
                setState(data)
            }
        })
        .catch(err => console.log(err))
}