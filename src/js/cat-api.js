// const select = document.querySelector('.breed-select');
// select.addEventListener('change', onNewChoiceAnimal);
import { refs} from "../index.js";

const API_KEY = 'live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT';

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
        .catch(() => onShowError());
       
}

function renderAnimalCard(animal) {
    
    const markup = `<img src="${animal.url}" alt='1' width=550>
    <p><span class='cat-titles'>Назва породи:</span> ${animal.breeds[0].name}</p>
    <p><span class='cat-titles'>Опис :</span> ${animal.breeds[0].description} </p>
    <p><span class='cat-titles'>Темперамент:</span> ${animal.breeds[0].temperament}</p>`;
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
    refs.alertError.classList.toggle('is-hidden');
}

export { fetchBreeds ,fetchCatByBreed, API_KEY};
