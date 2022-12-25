// import { modal } from './regions.js';


const modal = document.querySelector('.modal');
const submitButton = modal.querySelector('.modal__button');
let stringCities = '';

const onSubmitButtonClick = () => {
  getStringCities();
  modal.classList.remove('modal--hidden');
  console.log(modal);
};

const getStringCities = () => {
  const listCities = modal.querySelectorAll('.modal__city-item span');
  listCities.forEach((item) => {
    stringCities = stringCities + ` ${item.textContent}`;
  });
  const userNavList = document.querySelector('.user-nav__list');
  userNavList.textContent = stringCities;
};



submitButton.addEventListener('click', onSubmitButtonClick);
