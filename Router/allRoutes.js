import Route from "./Route.js";

//Définir les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "Galerie", "pages/galerie.html", "/js/galerie.js"),
];

export const websiteName = "Arcadia";