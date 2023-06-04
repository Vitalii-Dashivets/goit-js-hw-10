// const select = document.querySelector('.breed-select');
// select.addEventListener('change', onNewChoiceAnimal);
import { refs} from "../index.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const API_KEY = 'live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT';

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
})




function fetchBreeds(adress) {
    onShowLoadListAction();
    return fetchAnimals(adress)
        .then((response) => {
            
            // console.log(response[0].id);
            fetchCatByBreed(response[0].id);
            renderSelect(response);
            onShowLoadListAction();  
            return;
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
           
    return refs.select.insertAdjacentHTML('afterbegin', markup);
        //    select.insertAdjacentHTML('afterbegin', markup);
}


function fetchCatByBreed(breedId) {
    console.log(breedId);
    onShowLoadAnimalAction();
    return fetchAnimals(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then((response) => {
            //   console.log(...response);
            
            renderAnimalCard(...response);
            onShowLoadAnimalAction();
            return;
        })
        .catch(() =>onShowError());
       
}

function renderAnimalCard(animal) {
    
    const markup = `<img src="${animal.url}" alt='1' width=550><div class="cat-description">
    <p><span class='cat-titles'>Назва породи:</span> ${animal.breeds[0].name}</p>
    <p><span class='cat-titles'>Опис :</span> ${animal.breeds[0].description} </p>
    <p><span class='cat-titles'>Темперамент:</span> ${animal.breeds[0].temperament}</p></div>`;
    return refs.animalCard.innerHTML=markup;
}

function onShowLoadListAction() {
    refs.alertLoader.classList.toggle('is-hidden');
    refs.select.classList.toggle('is-hidden');

}

function onShowLoadAnimalAction() {
    refs.alertLoader.classList.toggle('is-hidden');
    refs.catInfo.classList.toggle('is-hidden');

}
 function onShowError() {
    Notify.failure('Error loading page...')
    //  refs.alertError.classList.toggle('is-hidden');
}

export { fetchBreeds ,fetchCatByBreed, API_KEY};
