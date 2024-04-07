const resultTextEl = document.querySelector('#result-text');
const resultContentEl = document.querySelector('#result-content');
const searchFormEL = document.querySelector('#form-container');

function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    const searchParamsArray = document.loction.search.split("&");

    // Spliting the array again divided by "=" and pop will return the last value being the values for query and format.
    const query = searchParamsArray[0].split("=").pop;
    const format = searchParamsArray[1].split("=").pop;

    searchApi(query, format);
}
// This function  should use the api to find data with the parameter that were inputted into the form by the user.
function searchApi(query, format) {
    // Sets the url to a variable
    let locQueryUrl = 'https://www.loc.gov/search/?fo=json';
    // If there is a format, the url will change to search by the inputted format.
    if (format) {
        locQueryUrl = `https://www.loc.gov/${format}/?fo=json`;
    }
    // This will add on the search term that was inputted in the form via query
    locQueryUrl = `${locQueryUrl}&q=${query}`;
    //This will fetch the url then if the response comes back it will convert to json format.
    fetch(locQueryUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        // this will set the text, alert if there is no data, then loop through each item in the array and run a printResults function on each item.
        .then(function (locRes) {
            resultTextEl.textContent = locRes.search.query;

            console.log(locRes);

            if (!locRes.results.length) {
                window.alert('No results found.');
            }
            else {
                for (let i = 0; i < locRes.results.length; i++) {
                    printResults(locRes.results[i]);
                }
            }
        })
        // Catches the throw so the promise doesn't error out??
        .catch(function (error) {
            window.alert(error);
        });
}



// Copied from script.js because the form is on this page as well
const searchForm = document.querySelector('#form-container');
// Function to submit the form and link to new page with results.
function handleSearchFormSubmit(event) {
    event.preventDefault();
    // Sets values to the inputs in the form
    const searchInput = document.querySelector('#search-input').value;
    const formatInput = document.querySelector('#format-input').value;


    if (!searchInput) {
        window.alert('The search input was blank.');
        return;
    }
    // Adds the values as parameters to the url.
    const queryString = `./search-index.html?q=${searchInput}&format=${formatInput}`;

    location.assign(queryString);
}
searchForm.addEventListener('submit', handleSearchFormSubmit);