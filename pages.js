var currentPage = "explore";
var searchPhrase = "";

var appsList = [
    {
        name: "Test App",
        iconUrl: "media/logo.svg",
        author: {
            name: "Test User"
        },
        description: "An example app for demonstration purposes.",
        installationUrl: "https://example.com"
    },
    {
        name: "GameProxy Chat",
        iconUrl: "https://gameproxy.host/media/apple-touch-icon.png",
        author: {
            name: "Subnodal Technologies"
        },
        description: "Join our servers now here at GameProxy Chat to start finding your community!",
        installationUrl: "https://gameproxy.host/chat"
    },
    {
        name: "Proxi",
        iconUrl: "https://proxi.emux.app/www/media/proxi.svg",
        author: {
            name: "Emux Technologies"
        },
        description: "Ensure that you keep your distance from others through alerts and tracking.",
        installationUrl: "https://proxi.emux.app",
        screenshotUrls: [
            "https://proxi.emux.app/storefront/screenshot1.png",
            "https://proxi.emux.app/storefront/screenshot2.png",
            "https://proxi.emux.app/storefront/screenshot3.png",
            "https://proxi.emux.app/storefront/screenshot4.png",
            "https://proxi.emux.app/storefront/screenshot5.png",
            "https://proxi.emux.app/storefront/screenshot6.png"
        ]
    }
];

function switchToPage(page) {
    currentPage = page;

    subElements.render();
}

function switchToSearch() {
    currentPage = "search";
    searchPhrase = document.getElementById("search").value;

    if (searchPhrase.trim() == "") {
        currentPage = "explore";
    }

    subElements.render();
}