import { onSucses, onError } from "./modules/regions";

const request = (URL, METHOD, body) => {
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
