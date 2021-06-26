function fetchCountries(country){
   return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
       .then(response => {
           return response.json();
       })
};

export {fetchCountries};