const arrowSVG = document.querySelector("#Dribbble-Light-Preview");
const navDropdown = document.querySelector(".nav-dropdown");
//arrowSVG.setAttribute("fill","#e60012");
arrowSVG.setAttribute("fill","#434242");

const searchBar = document.querySelector(".search-bar");
const navGlass = document.querySelector(".nav-glass");

navGlass.style.stroke = "#434242";

searchBar.addEventListener("mouseover", () => {
    navGlass.style.stroke = "#e60012";
});

searchBar.addEventListener("mouseout", () => {
    navGlass.style.stroke = "#434242";
});

navDropdown.addEventListener("mouseover", () => {
    arrowSVG.setAttribute("fill","#e60012");
});

navDropdown.addEventListener("mouseout", () => {
    arrowSVG.setAttribute("fill","#434242");
});