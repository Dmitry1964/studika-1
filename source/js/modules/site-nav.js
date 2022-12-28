let translate = 0;
const step = 200;

// Перемещение элементов меню при действии на кноаки next & prev

const siteNav = document.querySelector('.site-nav');
const lastItem = siteNav.querySelector('.site-nav__item--last');
const siteNavList = siteNav.querySelector('.site-nav__list');
const buttonNext = siteNav.querySelector('.site-nav__btn--next');
const buttonPrev = siteNav.querySelector('.site-nav__btn--prev');


const widthSiteNavList = lastItem.getBoundingClientRect().right;

// const elementStyle = getComputedStyle(siteNavList);
// const gap = parseInt(elementStyle.gap, 10);

const onSiteNavButtonClick = (evt) => {
  const button = evt.target.closest('button');
  if (button.classList.contains('site-nav__btn--next')) {
    translateMenuNext(button);
  } else if (button.classList.contains('site-nav__btn--prev')) {
    translateMenuPrev(button);
  }
};

const translateMenuNext = (button) => {
  translate = translate + step;
  const documentWidth = document.documentElement.clientWidth;
  const lastItemPosition = lastItem.getBoundingClientRect().right;
  buttonPrev.classList.remove('site-nav__btn--hidden');

  if (documentWidth < lastItemPosition) {
    siteNavList.setAttribute('style', `transform: translate(-${translate}px)`);
  } else if (documentWidth > lastItemPosition) {
    button.classList.add('site-nav__btn--hidden');
  };
};


const translateMenuPrev = (button) => {
  translate = translate - step;
  buttonNext.classList.remove('site-nav__btn--hidden');

  if (translate === 0) {
    button.classList.add('site-nav__btn--hidden');
  }
  siteNavList.setAttribute('style', `transform: translate(-${translate}px)`);
};

siteNav.addEventListener('click', onSiteNavButtonClick);
