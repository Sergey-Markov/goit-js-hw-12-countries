import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import  countryTemplate from './handlebars/countryTemplate';
import countryListTemplate from './handlebars/countryListTemplate';

import {  info, success, error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
defaults.delay = 5000;


  
  

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
    if(response.status === 404) {
        const myError = error({
            text: "The country you are looking for no found, or it does not yet exist. Try to check the search.(Страну которую Вы ищите не найдено, либо она пока не существует. Попробуйте уточнить поиск)"
          });
        return refs.searchingForm.innerHTML = '';
    }
    if(response.length > 10){
        const myInfo = info({
            text: "The answer has more than 10 countries - Try check search(Поиск нашел более 10 стран - уточните запрос)"
          });
        return refs.searchingForm.innerHTML = '';
    }
    if(response.length === 0) {
        return refs.searchingForm.innerHTML = '';
    };
    if(response.length <= 10 && response.length >= 2 ){
        const myInfo = info({
            text: "Here are countries - appropriate search.(Вот страны - соответствующие поиску.)"
          });
        refs.searchingForm.innerHTML = countryListTemplate(response);
    } else {
        

        const mySuccess = success({
            title: 'Success',
            text: "The country you were looking for.(Страна которую ты искал.)",
           
        });   

        refs.searchingForm.innerHTML = countryTemplate(response);
    }
    
};






    
