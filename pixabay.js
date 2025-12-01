'use strict';


const seachImages = (text) => {
    const key = '53487813-9c88d26a545bade5140226556'
    const url = `https://pixabay.com/api/?key=${key}&q=${text}`

    return url

}   

const loadGallery = (text) => {
    const imagensInfo = seachImages (text);
    console.log(imagensInfo)
}

const handleKeypress = ({key, target}) => {
    if (key === 'Enter'){
        loadGallery(target.value)
    };
}

document.querySelector('#search-input')
        .addEventListener('keypress', handleKeypress)