var currentPage = "explore";
var searchPhrase = "";

function switchToPage(page) {
    currentPage = page;

    subElements.render();
}

function switchToSearch() {
    currentPage = "search";
    searchPhrase = document.getElementById("search").value;

    subElements.render();
}