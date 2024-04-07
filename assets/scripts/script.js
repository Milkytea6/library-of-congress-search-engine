const searchForm = document.querySelector('#form-container');

function handleSearchFormSubmit(event){
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value;
    const formatInput = document.querySelector('#format-input').value;


    if (!searchInput){
        window.alert('The search input was blank.');
        return;
    }

    const queryString = `./search-index.html?q=${searchInput}&format=${formatInput}`;

    location.assign(queryString);
}
searchForm.addEventListener('submit', handleSearchFormSubmit);