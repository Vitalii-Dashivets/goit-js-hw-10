function e(e){return fetch(e).then((e=>e.json())).catch((()=>s()))}function t(t){return console.log(t),a(),e(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}&api_key=live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT`).then((e=>(a(),function(e){const t=`<img src="${e.url}" alt='1' width=550>\n    <p><span class='cat-titles'>Назва породи:</span> ${e.breeds[0].name}</p>\n    <p><span class='cat-titles'>Опис :</span> ${e.breeds[0].description} </p>\n    <p><span class='cat-titles'>Темперамент:</span> ${e.breeds[0].temperament}</p>`;return c.animalCard.innerHTML=t}(...e)))).catch((()=>s()))}function n(){c.alertLoader.classList.toggle("is-hidden"),c.select.classList.toggle("is-hidden")}function n(){c.alertLoader.classList.toggle("is-hidden"),c.select.classList.toggle("is-hidden")}function a(){c.alertLoader.classList.toggle("is-hidden"),c.catInfo.classList.toggle("is-hidden")}function s(){c.alertError.classList.toggle("is-hidden")}const c={select:document.querySelector(".breed-select"),animalCard:document.querySelector(".cat-info"),alertLoader:document.querySelector(".loader"),alertError:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};var i;c.select.addEventListener("change",(function(e){const n=e.target.value;return console.log(n),t(n)})),c.alertLoader.classList.add("is-hidden"),c.alertError.classList.add("is-hidden"),console.log(c.animalCard),i="https://api.thecatapi.com/v1/breeds?live_qE21O52c52A37ctUcV6hliaEyBnz59hGiAFTOKXxN2VjhrYLa3zzbYTrw7v0eoiT",n(),e(i).then((e=>(n(),t(e[0].id),function(e){const t=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");return c.select.insertAdjacentHTML("afterbegin",t)}(e)))).catch((()=>s()));
//# sourceMappingURL=index.41a97129.js.map
