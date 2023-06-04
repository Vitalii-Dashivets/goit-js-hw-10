import {  refs, API_KEY,BASE_URL } from "../index.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';


Notify.init({
    width: '500px',
    fontSize: '25px',
    position: 'center-top',
    timeout: '5000',
    messageMaxLength: 150,
    distance: '20px',
    showOnlyTheLastOne: true,
    warning: {
        background: 'rgba(190, 194, 79, 1)',
        textColor: '#fff',
        childClassName: 'notiflix-notify-warning',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-exclamation-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,1)',
        backOverlayColor: 'rgba(238,191,49,0.2)',
    },
});


function fetchBreeds(adress) {
    onShowLoadListAction();
    return fetchAnimals(adress)
        .then((response) => {
            
            // fetchCatByBreed(response[0].id);
            renderSelect(response);
            onShowLoadListAction();
            return ;
        })
        .catch(() => onShowError());
       };


function fetchAnimals(adress) {
    return fetch(adress)
        .then((response) => {
            return response.json();                        
        })
        .catch(() => onShowError());
};
    

function renderSelect(animals) {
    const markup =animals.map(elem => {
                return `<option value="${elem.id}">${elem.name}</option>`
            }).join('');
    refs.select.insertAdjacentHTML('afterbegin', markup);
    new SlimSelect({
        select: '#first-select'
    });
    return;
};


function fetchCatByBreed(breedId) {
    
    onShowLoadAnimalAction();
    return fetchAnimals(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then((response) => {
                       
            renderAnimalCard(...response);
            onShowLoadAnimalAction();
            return;
        })
        .catch(() =>onShowError());
};


function renderAnimalCard(animal) {
    
    const markup = `<img src="${animal.url}" alt='cat' width=700><div class="cat-description">
    <p class='cat-titles'> ${animal.breeds[0].name}</p>
    <p> ${animal.breeds[0].description} </p>
    <p><span class='cat-temp'>Temperament:</span> ${animal.breeds[0].temperament}</p></div>`;
    return refs.animalCard.innerHTML=markup;
};


function onShowLoadListAction() {
    refs.alertLoader.classList.toggle('is-hidden');
    refs.select.classList.toggle('is-hidden');
};


function onShowLoadAnimalAction() {
    refs.alertLoader.classList.toggle('is-hidden');
    refs.catInfo.classList.toggle('is-hidden');
};


 function onShowError() {
     Notify.failure('Error loading page...');
};



export { fetchBreeds ,fetchCatByBreed};
