var currentPage = "explore";
var searchPhrase = "";

var appsList = [
    {
        name: "Test App",
        iconUrl: "media/logo.svg",
        author: {
            name: "Test User"
        },
        synopsis: "An example app for demonstration purposes.",
        installationUrl: "https://example.com",
        category: "productivity",
        sharingModel: {
            type: "foss",
            licence: "MIT"
        }
    },
    {
        name: "GameProxy Chat",
        iconUrl: "https://gameproxy.host/media/apple-touch-icon.png",
        author: {
            name: "Subnodal Technologies"
        },
        synopsis: "Join our servers now here at GameProxy Chat to start finding your community!",
        installationUrl: "https://gameproxy.host/chat",
        category: "social",
        sharingModel: {
            type: "freeAds"
        }
    },
    {
        name: "Proxi",
        iconUrl: "https://proxi.emux.app/www/media/proxi.svg",
        featureUrl: "https://proxi.emux.app/storefront/feature.png",
        author: {
            name: "Emux Technologies"
        },
        synopsis: "Ensure that you keep your distance from others through alerts and tracking.",
        description: "Help others around you to keep their distance through Proxi. You can use Proxi to:\n* Be reminded through vibrations and audible alerts when other users with the Proxi app come within 3m of you\n* View a heatmap of busy spots in cities so you can know which places to avoid\n* Gain virtual awards for keeping safe in the community\n* Add family contacts so that you don't get alerted when your family is nearby\n* Set your home address so your location isn't shared when you're at home\nProxi is proud to be one of the few tracking apps that respects your privacy. We handle your data in strict compliance with our Privacy Policy, viewable at **emux.app/privacy**.",
        websiteUrl: "https://emux.app",
        installationUrl: "https://proxi.emux.app",
        sourceUrl: "https://github.com/EmuxApp",
        category: "health",
        sharingModel: {
            type: "free"
        },
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

var currentApp = {};

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

function websiteIsValid(url) {
    return typeof(url) == "string" && (url.startsWith("http://") || url.startsWith("https://"));
}

function switchToApp(index) {
    currentPage = "app";
    currentApp = appsList[index];

    document.querySelector("#currentAppDescription").innerHTML = generateDescription(currentApp.description);

    subElements.render();
}