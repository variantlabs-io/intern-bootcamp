const searchBar = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
const searchWrapper = document.querySelector(".search-bar");

//add event listener for keyup
searchBar.addEventListener('keyup', (e) => { 
    let userContain = e.target.value;
    let dataArray = [];
    if (userContain) {
        dataArray = suggestions.filter((data) => {
            // filter the data
            return data.toLocaleLowerCase().startsWith(userContain.toLocaleLowerCase());
        });
        dataArray = dataArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        searchWrapper.classList.add("active");
    }
    else {
        searchWrapper.classList.remove("active");
    }
    showSuggestions(dataArray);
});

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = searchBar.value;
    }
    else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}