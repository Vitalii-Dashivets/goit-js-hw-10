function e(e){return fetch(e).then((e=>e.json())).catch((()=>c()))}function t(t){return console.log(t),n(),e(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}&api_key=live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT`).then((e=>{!function(e){const t=`<img src="${e.url}" alt='1' width=550>\n    <p><span class='cat-titles'>Назва породи:</span> ${e.breeds[0].name}</p>\n    <p><span class='cat-titles'>Опис :</span> ${e.breeds[0].description} </p>\n    <p><span class='cat-titles'>Темперамент:</span> ${e.breeds[0].temperament}</p>`;s.animalCard.innerHTML=t}(...e),n()})).catch((()=>c()))}function a(){s.alertLoader.classList.toggle("is-hidden"),s.select.classList.toggle("is-hidden")}function n(){s.alertLoader.classList.toggle("is-hidden"),s.catInfo.classList.toggle("is-hidden")}function c(){s.alertError.classList.toggle("is-hidden")}const s={select:document.querySelector(".breed-select"),animalCard:document.querySelector(".cat-info"),alertLoader:document.querySelector(".loader"),alertError:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};var i;s.select.addEventListener("change",(function(e){const a=e.target.value;return console.log(a),t(a)})),s.alertLoader.classList.add("is-hidden"),s.alertError.classList.add("is-hidden"),console.log(s.animalCard),i="https://api.thecatapi.com/v1/breeds?live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT",a(),e(i).then((e=>{t(e[0].id),function(e){const t=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");s.select.insertAdjacentHTML("afterbegin",t)}(e),a()})).catch((()=>c()));
//# sourceMappingURL=index.61a84806.js.map
