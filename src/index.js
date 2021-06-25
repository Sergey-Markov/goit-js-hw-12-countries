import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import  template from './handlebars/template';

const refs = {
    countrySearch: document.querySelector('.countrySearch'),
    searchingForm: document.getElementById('searching'),
};

// refs.countrySearch.addEventListener('input', debounce(changeValue, 4000));


// function changeValue(){
//    return console.log(refs.countrySearch.value);
// }; 

// function render(response){
//   return console.log( refs.searchingForm.insertAdjacentHTML('afterend', template(response)));
// };

fetchCountries().then(response => {
    console.log(response);
    const markup = template(response);
    console.log(markup);
//    const markup = template(response);
//    console.log(markup);
})




    
