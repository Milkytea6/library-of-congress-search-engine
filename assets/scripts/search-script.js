const resultTextEl = document.querySelector('#result-text');
const resultContentEl = document.querySelector('#result-content');
const searchFormEL = document.querySelector('#form-container');

function getParams(){
    const searchParamsArray = document.loction.search.split("&");


    const query = searchParamsArray[0].split("=").pop;
    const format = searchParamsArray[1].split("=").pop;

    searchApi(query, format);
}

function searchApi(query, format){
    let locQueryUrl = 'https://www.loc.gov/search/?fo=json';

    
}



// Copied from script.js because the form is on this page as well
const searchForm = document.querySelector('#form-container');
// Function to submit the form and link to new page with results.
function handleSearchFormSubmit(event){
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value;
    const formatInput = document.querySelector('#format-input').value;


    if (!searchInput){
        window.alert('The search input was blank.');
        return;
    }
    // Adds the values as parameters to the url.
    const queryString = `./search-index.html?q=${searchInput}&format=${formatInput}`;

    location.assign(queryString);
}
searchForm.addEventListener('submit', handleSearchFormSubmit);