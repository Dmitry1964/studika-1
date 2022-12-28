import { modal } from './regions';

// отбор города при изменении поля Регион, город, населенный пункт

const modalInputField = document.querySelector('.modal__input-field');
const modalListSelect = modal.querySelector('.modal__list-select');

const onInputChange = () => {
  modal.querySelector('.modal__list').classList.add('visually-hidden');
  const valueField = modalInputField.value;
  const subString = formatStr(valueField);
  selectCities(subString);
};

const formatStr = (str) => {
  const firstSimbol = str[0].toUpperCase();
  const otherSimbols = str.slice(1);
  const subString = firstSimbol + otherSimbols;
  return subString;
};

const selectCities = (subString) => {
  const cityNames = [];
  modalListSelect.innerHTML = '';
  const modalItems = modal.querySelectorAll('.modal__region');
  modalItems.forEach((item) => {
    if (item.getAttribute('data-city')) {
      const nameCity = item.querySelector('.modal__city').textContent;

      if (nameCity.startsWith(subString)) {
        const nameArea = item.querySelector('.modal__city-region').textContent;
        const object = {};
        object.name = nameCity;
        object.area = nameArea;
        // делаем массив имен
        cityNames.push(object);

        const regionString = getColorString(cityNames, subString);
        console.log(regionString);
        modalListSelect.insertAdjacentHTML('beforeend', regionString);
      }
    }
  });
};

const getColorString = (cityNames, subString) => {

  cityNames.forEach((item) => {
    const endName = item.name.slice(subString.length);
    item.endName = endName;
    item.startName = subString;
    // let string = '';
  });
  const string = cityNames.map(({ startName, endName, area }) => `
    <div class="modal__region">
      <p class="modal__city">
        <span class="sub-string">${startName}</span><span>${endName}</span>
      </p>
      <span class="modal__city-region">${area}</span>
    </div>
    `).join('');

  // console.log(string);

  return string;
};


modalInputField.addEventListener('input', onInputChange);
