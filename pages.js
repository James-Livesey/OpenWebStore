var currentPage = "explore";
var searchPhrase = "";

var appsList = [
    {
        name: "Test App",
        iconUrl: "",
        author: {
            name: "Test User"
        },
        description: "test"
    },
    {
        name: "Test 2",
        iconUrl: "",
        author: {
            name: "Test User"
        },
        description: "hi"
    }
];

function switchToPage(page) {
    currentPage = page;

    subElements.render();
}

function switchToSearch() {
    currentPage = "search";
    searchPhrase = document.getElementById("search").value;

    subElements.render();
}