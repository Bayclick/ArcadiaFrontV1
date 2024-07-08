import Route from "./Route.js";

//Définir les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Services", "/pages/services.html"),
];

export const websiteName = "Arcadia";