const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search';
const name = process.argv[2];


const breedFetcher = (name) => {
  URL += `?q=${name}`;
  request(URL, (err, response, body) => {
    if (err) return console.log('URL Error: ', err);
    const arr = JSON.parse(body);
    if (arr.length === 0) return console.log('Breed not found');
    console.log(arr[0].description);
  });
};
breedFetcher(name);