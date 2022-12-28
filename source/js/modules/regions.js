import { request } from '../main.js';

const URL = 'https://studika.ru/api/areas';
const METHOD = 'POST';
const AREA = 'area';


const userNavCityes = document.querySelector('.user-nav__cityes');
const modal = document.querySelector('.modal');
const animation = modal.querySelector('.modal__animation');

const onSucses = (data) => {
  setRegionsList(data);
  animation.classList.add('modal__animation--hidden');
};

const onError = () => {
  console.log('error');
};

const onUserNavCityesClick = () => {
  if (!userNavCityes.getAttribute('data-load')) {
    modal.classList.add('modal--hidden');
    userNavCityes.setAttribute('data-load', 'ok');
    request(onSucses, onError, URL, METHOD);
  };
  if (userNavCityes.getAttribute('data-load')) {
    modal.classList.add('modal--hidden');
  }
};

// формируем список городов и регионов

const setRegionsList = (data) => {
  const modalList = modal.querySelector('.modal__list');
  modalList.classList.remove('modal__list--hidden');
  data.forEach((region) => {
    const modalRegion = document.createElement('div');
    const nameRegion = document.createElement('span');
    nameRegion.classList.add('modal__region-area');
    modalRegion.classList.add('modal__region');
    modalRegion.setAttribute('data-area', 'area');
    nameRegion.textContent = region.name;
    modalList.append(modalRegion);
    modalRegion.append(nameRegion);
    if (region.type === AREA) {
      region.cities.forEach((elem) => {
        const modalRegion1 = document.createElement('div');
        const nameCity = document.createElement('p');
        const nameRegion1 = document.createElement('span');
        modalRegion1.classList.add('modal__region');
        modalRegion1.setAttribute('data-city', elem.name);
        nameRegion1.classList.add('modal__city-region');
        nameCity.classList.add('modal__city');
        nameCity.textContent = elem.name;
        nameRegion1.textContent = region.name;
        modalList.append(modalRegion1);
        modalRegion1.append(nameCity);
        modalRegion1.append(nameRegion1);
      });
    }
  });
};

// const onWindowClick = (evt) => {
//   if (evt.target.closest('article')) {
//     return;
//   } else {
//     modal.classList.remove('modal--hidden');
//     // console.log(evt.target);
//   }
// };

userNavCityes.addEventListener('click', onUserNavCityesClick);
// window.addEventListener('click', onWindowClick);

export { modal };
