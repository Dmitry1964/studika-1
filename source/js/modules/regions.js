import { request } from "../main.js";

const URL = 'https://studika.ru/api/areas';
const METHOD = 'POST';
const AREA = 'area';

const userNavCityes = document.querySelector('.user-nav__cityes');
const modal = document.querySelector('.modal');
const animation = modal.querySelector('.modal__animation');
const modalCytyList = modal.querySelector('.modal__city-list');


// const request = (URL, METHOD, body) => {
//   fetch(
//     URL,
//     {
//       method: METHOD,
//       body: body,
//     },
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       onSucses(data);
//     })
//     .catch(() => {
//       onError();
//     });
// };

const onSucses = (data) => {
  setRegionsList(data);
  animation.classList.add('modal__animation--hidden');
  // console.log(data);
}

const onError = () => {
  console.log('error');
}

const onUserNavCityesClick = () => {
  if (!userNavCityes.getAttribute('data-load')) {
    modal.classList.add('modal--hidden');
    userNavCityes.setAttribute('data-load', 'ok');
    request(URL, METHOD);
  } else {
    modal.classList.add('modal--hidden');
  }
}

// формируем список городов и регионов

const setRegionsList = (data) => {
  const modalList = modal.querySelector('.modal__list');
  modalList.classList.remove('modal__list--hidden');
  data.forEach((region) => {
    const modalRegion = document.createElement('div');
    const nameRegion = document.createElement('p');
    const modalRegionList = document.createElement('ul')

    modalRegion.classList.add('modal__region');
    modalRegionList.classList.add('modal__region-list')
    nameRegion.textContent = region.name;
    modalList.append(modalRegion);
    modalRegion.append(nameRegion);
    modalRegion.append(modalRegionList);

    if (region.type === AREA) {
      region.cities.forEach((city) => {
        const modalRegionItem = document.createElement('li');
        const modalCity = document.createElement('span');
        const modalCityRegion = document.createElement('span');

        modalRegionItem.classList.add('modal__region-item');
        modalCity.classList.add('modal__city');
        modalCityRegion.classList.add('modal__city-region');

        modalCity.textContent = city.name;
        modalCityRegion.textContent = region.name;

        modalRegionList.append(modalRegionItem);
        modalRegionItem.append(modalCity);
        modalRegionItem.append(modalCityRegion);
      })
    }
  })
}

userNavCityes.addEventListener('click', onUserNavCityesClick);

export { onSucses, onError }
