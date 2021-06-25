function fetchCountries(){
   return fetch(`https://restcountries.eu/rest/v2/name/uk`)
       .then(response => {
           return response.json();
       })
};

export {fetchCountries};