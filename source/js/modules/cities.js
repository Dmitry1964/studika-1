import { modal } from './regions';

// cityCurrent - имя выбранного города в общем списке
// itemCurrent - элемент по которому кликаем (элемент <li>)
// currentCityList - список выбранных городов (элемент <li>)

const modalList = modal.querySelector('.modal__list');
const modalCityList = modal.querySelector('.modal__city-list');

const onCitiesListClick = (evt) => {
  const itemCurrent = evt.target.closest('li');
  const cityCurrent = evt.target.closest('span');

  if (cityCurrent.classList.contains('modal__city-region')) {
    return;
  }
  // открываем список выбранных городов
  if (modalCityList.classList.contains('modal__city-list--hidden')) {
    modalCityList.classList.remove('modal__city-list--hidden');
  }
  if (!isCurrent(itemCurrent)) {
    // вставляем элемент в список выбранных городов
    addElement(cityCurrent);
  } else {
    // удаляем элемент из списка выбранных городов
    removeElement(cityCurrent);
  }
};

const addElement = (cityCurrent) => {
  const cityItem = document.createElement('li');
  const nameCity = document.createElement('span');
  const cityItemBtn = document.createElement('button');
  cityItem.classList.add('modal__city-item');
  cityItemBtn.classList.add('modal__city-btn');
  nameCity.textContent = cityCurrent.textContent;
  modalCityList.append(cityItem);
  cityItem.append(nameCity);
  cityItem.append(cityItemBtn);
};

const removeElement = (cityCurrent) => {
  const currentCityList = document.querySelectorAll('.modal__city-item');

  currentCityList.forEach((city) => {
    if (city.textContent === cityCurrent.textContent) {
      city.remove();
    }
  });
};

const isCurrent = (element) => {
  if (element.getAttribute('data-element')) {
    element.removeAttribute('data-element');
    return true;
  } else {
    element.setAttribute('data-element', 'current');
    return false;
  }
};

const onModalCityListClick = () => {

}

modalList.addEventListener('click', onCitiesListClick);
modalCityList.addEventListener('click', onModalCityListClick);

