const URL = 'https://studika.ru/api/areas';
const METHOD = 'POST';


const request = (URL, METHOD) => {
  fetch(
    URL,
    {
      method: METHOD,
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

const onSucses = (data) => {
  console.log(data);
}

const onError = () => {
  console.log('error');
}

request(URL, METHOD)
