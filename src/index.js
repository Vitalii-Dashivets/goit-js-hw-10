import "./css/style.css";

import { fetchBreeds, fetchCatByBreed, API_KEY } from './js/cat-api.js';
import SlimSelect from 'slim-select';

const refs = {
     select : document.querySelector('.breed-select'),
     animalCard : document.querySelector('.cat-info'),
     alertLoader : document.querySelector('.loader'),
     alertError: document.querySelector('.error'),
     catInfo: document.querySelector('.cat-info'),
}

refs.select.addEventListener('change', onNewChoiceAnimal);
// select.addEventListener('change', onNewChoiceAnimal);
refs.alertLoader.classList.add('is-hidden');
refs.alertError.classList.add('is-hidden');

console.log((refs.animalCard));


function onNewChoiceAnimal(event) {
    const breed_ids = event.target.value;
    console.log(breed_ids);
    return fetchCatByBreed(breed_ids);
       
};

fetchBreeds(`https://api.thecatapi.com/v1/breeds?${API_KEY}`);
    
    
export { refs};