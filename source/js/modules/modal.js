import { modal } from './regions.js';
import { request } from '../main.js';

// Обработка кнопки Сохранить в модальном окне
const URL = 'https://github.com/gencebay/httplive';
const METHOD = 'POST';

const submitButton = modal.querySelector('.modal__button');
const cities = new Set();
let stringCities = '';

const onSubmitButtonClick = (evt) => {
  evt.preventDefault();
  getStringCities();
  modal.classList.remove('modal--hidden');
};

const getStringCities = () => {
  const userNavList = document.querySelector('.user-nav__list');
  stringCities = '';
  const listCities = modal.querySelectorAll('.modal__city-item span');
  listCities.forEach((item) => {
    cities.add(item.textContent);
  });

  cities.forEach((value) => {
    stringCities = stringCities + ` ${value}`;
  });
  userNavList.textContent = stringCities;
  document.cookie = `cities=${stringCities}`;
  const data = JSON.stringify(stringCities);

  request(onSucses, onError, URL, METHOD, data)
};

const onSucses = () => {
  console.log('www');
};

const onError = () => {
  alert('Здесь я не знаю');
};

submitButton.addEventListener('click', onSubmitButtonClick);
