'use strict';



const createCard = ({webformatURL}) => {
    const card = document.createElement('div');
    card.innerHTML = `
    
    <img src=${webformatURL}>
    
    `;

    return  ;
}

const seachImages = async (text) => {
    const key = '53487813-9c88d26a545bade5140226556'
    const url = `https://pixabay.com/api/?key=${key}&q=${text}`

    const response = await fetch(url);
    return response.json();
    

   

}   

const loadGallery = async (text) => {
    const container = document.querySelector('.container-gallery')

    const {hits} = await seachImages (text);
    const cards = hits.map(createCard);
    container.replaceChildren(cards)
    console.log(cards)
}

const handleKeypress = ({key, target}) => {
    if (key === 'Enter'){
        loadGallery(target.value)
    };
}

document.querySelector('#search-input')
        .addEventListener('keypress', handleKeypress)