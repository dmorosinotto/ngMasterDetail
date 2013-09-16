﻿require.config({
    baseUrl: "app/js"
});

require(
    [
        "../translations/translations-de",
        "constants",
        "app",
        "infrastructure/thinktecture.Authentication",
        "infrastructure/tools",
        "infrastructure/directives",
        "infrastructure/filters",
        "services/routeResolver",
        "services/alertService",
        "services/dataPushService",
        "services/logPushService",
        "services/dialogService",
        "services/articlesApiService",
        "services/personalizationService",
        "controllers/navigationController",
        "controllers/loginController",
        "controllers/infoController"
    ],
    function () {
        angular.bootstrap(document, ["myApp"]);
    }
);
