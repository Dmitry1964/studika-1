import { modal } from './regions';

const MIN_SINBOLS = 1;

const modalInputField = document.querySelector('.modal__input-field');

const onInputChange = () => {
  const valueField = modalInputField.value;
  const string = formatStr(valueField);
  if (string.length >= MIN_SINBOLS) {
    selectCity(string);
  }
};

const formatStr = (str) => {
  const firstSimbol = str[0].toUpperCase();
  const otherSimbols = str.slice(1);
  return firstSimbol + otherSimbols;
};

const selectCity = (string) => {
  console.log(string);
};

modalInputField.addEventListener('input', onInputChange);
