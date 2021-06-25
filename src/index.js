import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';
// import  template from './handlebars/template';

const refs = {
    countrySearch: document.querySelector('.countrySearch'),
    searchingForm: document.getElementById('searching'),
};



refs.countrySearch.addEventListener('input', _.debounce(() => {console.log(refs.countrySearch.value)}, 3));


fetchCountries().then(response => {
    console.log(response);
})




    
