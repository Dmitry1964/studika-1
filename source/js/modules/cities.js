import { modal } from './regions';

const modalCityList = modal.querySelector('.modal__city-list');


const onCitiesListClick = (evt) => {
  const itemCurrent = evt.target.closest('li');
  const currentCityList = document.querySelectorAll('.modal__city-item');
  if (!isCurrent(itemCurrent)) {
    console.log('Вставляем');
  } else {
    console.log('удаляем');
  }
  //
  // isCurrent(itemCurrent);
  // const cityCurrent = evt.target.closest('span');
  // if (cityCurrent.classList.contains('modal__city-region')) {
  //   return;
  // }
  // if (modalCityList.classList.contains('modal__city-list--hidden')) {
  //   modalCityList.classList.remove('modal__city-list--hidden');
  // }
  // const cityItem = document.createElement('li');
  // const nameCity = document.createElement('span');
  // const cityItemBtn = document.createElement('button');
  // cityItem.classList.add('modal__city-item');
  // cityItemBtn.classList.add('modal__city-btn');
  // nameCity.textContent = cityCurrent.textContent;
  // modalCityList.append(cityItem);
  // cityItem.append(nameCity);
  // cityItem.append(cityItemBtn);
};


// cityCurrent - имя выбранного города
// itemCurrent - элемент по которому кликаем (элемент <li>)
// current CityList - список выбранных городов (элемент <li>)

const isCurrent = (element) => {
  if (element.getAttribute('data-element')) {
    element.removeAttribute('data-element');
    return true;
  } else {
    element.setAttribute('data-element', 'current');
    return false;
  }
}

modal.addEventListener('click', onCitiesListClick);

