import { startSpinner, stopSpinner, updateLoadingText } from "../components/spinner";

export function uploadFile(e, nameRef, releaseYearRef, ratingsRef, categoryRef, thumbnailRef, movieRef, errorRef, formRef, languageRef) {
    e.preventDefault()
    const name = nameRef.current.value;
    const releaseYear = releaseYearRef.current.value;
    const ratings = ratingsRef.current.value;
    const category = categoryRef.current.value;
    const language = languageRef.current.value;
    const thumbnail = thumbnailRef.current.files[0];
    const movie = movieRef.current.files[0];
    let isFormEmpty = false;

    // Check for empty values
    const allRefs = [name, releaseYear, language, ratings, category, thumbnail, movie];
    allRefs.forEach(ref => {
        if (!ref) {
            errorRef.current.innerText = 'Input Fields cannot be empty!'
            errorRef.current.classList.add('active')
            formRef.current.classList.add('error')
            isFormEmpty = true;
            return;
        }
    })

    if (isFormEmpty) return;

    // check for file types
    if (thumbnail.type.split('/')[0] !== 'image' || movie.type.split('/')[0] !== 'video') {
        errorRef.current.innerText = 'Please select correct file types!'
        errorRef.current.classList.add('active')
        return
    }

    // Check for file sizes 
    if (thumbnail.size / 1024 > 1024 || movie.size / 1024 > 14000) {
        errorRef.current.innerText = 'File Size Limits Exceeded!'
        errorRef.current.classList.add('active')
        formRef.current.classList.add('error')
        return;
    }

    startSpinner()
    updateLoadingText('Uploading Movie...🚀🔥')

    const formData = new FormData();

    formData.append('name', name)
    formData.append('year', releaseYear)
    formData.append('rating', ratings)
    formData.append('category', category)
    formData.append('language', language)
    formData.append('thumbnail', thumbnail)
    formData.append('movie', movie)


    fetch('http://localhost:8080/file/upload', {
        method: 'post',
        body: formData

    }).then(res => res.json())
        .then(({ success, msg }) => {
            stopSpinner()
            if (success) {
                window.location = '/';
            }
        })
        .catch(err => console.log(err))

}