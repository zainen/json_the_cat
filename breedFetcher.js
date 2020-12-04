const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search';


// const breedFetcher = (name) => {
//   URL += `?q=${name}`;
//   request(URL, (err, response, body) => {
//     if (err) {
//       return console.log('URL Error: ', err);
//     }
//     const arr = JSON.parse(body);
//     if (arr.length === 0) {
//       return console.log('Breed not found');
//     }
//     console.log(arr[0].description);
//   });
// };


const fetchBreedDescription = function(breedName, callback) {
  URL += `?q=${breedName}`;
  request(URL, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    const arr = JSON.parse(body);
    if (arr.length === 0) {
      callback(`Breed ${breedName} not found`, null);
      return;
    }
    callback(null, arr[0].description);
  });
};
module.exports = { fetchBreedDescription };