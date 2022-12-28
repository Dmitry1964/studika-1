// import { onSucses, onError, setRegionsObject } from './modules/regions';
import './modules/regions.js';
import './modules/cities.js';
import './modules/select-city.js';
import './modules/site-nav.js';
import './modules/modal.js';

const request = (onSucses, onError, URL, METHOD, body) => {
  fetch(
    URL,
    {
      method: METHOD,
      body: body,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSucses(data);
    })
    .catch(() => {
      onError();
    });
};

export { request };
