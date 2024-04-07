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