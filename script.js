var subElements = require("com.subnodal.subelements");
var core = require("com.subnodal.subelements.core");
var requests = require("com.subnodal.subelements.requests");
var l10n = require("com.subnodal.subelements.l10n");

var _;

Promise.all([
    requests.getJson("locale/en_GB.json")
]).then(function(resources) {
    subElements.init({
        languageResources: {
            "en_GB": resources[0]
        },
        localeCode: core.parameter("lang") || undefined,
        fallbackLocaleCode: "en_GB"
    });

    _ = l10n.translate;
});