import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import  template from './handlebars/template';

const refs = {
    countrySearch: document.querySelector('.countrySearch'),
    searchingForm: document.getElementById('searching'),
};


refs.countrySearch.addEventListener('input', debounce(changeValue, 500));


function changeValue(){
    const country = refs.countrySearch.value;
    fetchCountries(country)
        .then(render)
        .catch(reject => console.log('error:',reject));
}; 

function render(response){
    
  refs.searchingForm.insertAdjacentHTML('afterend', template(response));
    
};






    
