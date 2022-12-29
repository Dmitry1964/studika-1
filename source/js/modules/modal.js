import { modal } from './regions.js';
import { request } from '../main.js';

// Обработка кнопки Сохранить в модальном окне
const URL = 'https://github.com/gencebay/httplive';
const METHOD = 'POST';
const userNavList = document.querySelector('.user-nav__list');

const submitButton = modal.querySelector('.modal__button');
const cities = new Set();
let stringCities = '';

const onSubmitButtonClick = (evt) => {
  document.querySelector('.user-nav__list').textContent = '';
  evt.preventDefault();
  getStringCities();
  modal.classList.remove('modal--hidden');
};

const getStringCities = () => {
  const listCities = modal.querySelectorAll('.modal__city-item span');

  listCities.forEach((item) => {
    cities.add(item.textContent);
  });

  cities.forEach((value) => {
    stringCities = stringCities + ` ${value}`;
  });
  userNavList.textContent = '';
  userNavList.textContent = stringCities;
  document.cookie = `cities=${stringCities}`;
  const data = JSON.stringify(stringCities);

  request(onSucses, onError, URL, METHOD, data)
};

const onSucses = () => {
  console.log('www');
};

const onError = () => {
  alert('');
  userNavList.textContent = 'Любой регион';
};

submitButton.addEventListener('click', onSubmitButtonClick);
