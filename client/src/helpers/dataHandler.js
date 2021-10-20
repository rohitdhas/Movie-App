import { useState, useEffect } from "react";
import { startSpinner, stopSpinner, updateLoadingText } from '../components/spinner'

export function useFetchData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        startSpinner()
        fetch(url)
            .then(res => res.json())
            .then(({ data }) => {
                stopSpinner();
                if (data) {
                    setData(data);
                }
            })
            .catch(err => console.log(err))
    }, [])

    return { data }
}

export function deleteMovie(movieId) {
    startSpinner()
    updateLoadingText('Deleting Movie..')

    fetch(`http://localhost:8080/file/${movieId}`, {
        method: 'DELETE'
    }).then(res => res.json())
        .then(({ success }) => {
            stopSpinner()
            if (success) {
                window.location = '/'
            }
        }).catch((err) => {
            console.log(err)
        })
}