import { modal } from './regions';

// отбор города при изменении поля Регион, город, населенный пункт

const modalInputField = document.querySelector('.modal__input-field');
const modalListSelect = modal.querySelector('.modal__list-select');
const modalInputBtn = modal.querySelector('.modal__input-btn');

const onInputChange = () => {
  modal.querySelector('.modal__list').classList.add('visually-hidden');
  const valueField = modalInputField.value;
  const subString = formatStr(valueField);
  const arrayCities = getArrayCities(subString);
  const stringModalRegion = getStringModalRegion(arrayCities);
  modalListSelect.innerHTML = '';
  modalListSelect.insertAdjacentHTML('beforeend', stringModalRegion);
};

const onModalInputBtnClick = (evt) => {
  evt.preventDefault();
  modalInputField.value = '';
  modalListSelect.innerHTML = '';
  modal.querySelector('.modal__list').classList.remove('visually-hidden');
};


const formatStr = (str) => {
  const firstSimbol = str[0].toUpperCase();
  const otherSimbols = str.slice(1);
  const subString = firstSimbol + otherSimbols;
  return subString;
};

// создаем объекты -  начало имени города; окончание имени города; имя региона;
const getArrayCities = (subString) => {
  const cityNames = [];
  modalListSelect.innerHTML = '';
  const modalItems = modal.querySelectorAll('.modal__region');
  modalItems.forEach((item) => {
    if (item.getAttribute('data-city')) {
      const nameCity = item.querySelector('.modal__city').textContent;
      const nameArea = item.querySelector('.modal__city-region').textContent;

      if (nameCity.startsWith(subString)) {
        const object = {};
        object.endName = nameCity.slice(subString.length);
        object.startName = subString;
        object.area = nameArea;
        // делаем массив имен
        cityNames.push(object);
      }
    }
  });
  return cityNames;
};

const getStringModalRegion = (array) => {

  const string = array.map(({ endName, startName, area }) => `
    <div class="modal__region">
      <p class="modal__city">
        <span class="sub-string">${startName}</span><span>${endName}</span>
      </p>
      <span class="modal__city-region">${area}</span>
    </div>
    `).join('');
  return string;
};


modalInputField.addEventListener('input', onInputChange);
modalInputBtn.addEventListener('click', onModalInputBtnClick);
modalInputField.addEventListener('click', () => {
  modalInputBtn.classList.remove('visually-hidden');
});
