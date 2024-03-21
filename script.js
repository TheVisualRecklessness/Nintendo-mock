const arrowSVG = document.querySelector("#Dribbble-Light-Preview");
const navDropdown = document.querySelector(".nav-dropdown");
const searchBar = document.querySelector(".search-bar");
const navGlass = document.querySelector(".nav-glass");
const support = document.querySelector("#support-svg-style-stroke");
const wishlist = document.querySelector("#wishlist-svg-fill");
const cart = document.querySelector("#cart-svg-fill");
const login = document.querySelector("#login-svg-fill");
const navSupport = document.querySelector("#nav-support");
const navWishlist = document.querySelector("#nav-wishlist");
const navCart = document.querySelector("#nav-cart");
const navLogin = document.querySelector("#nav-login");

support.style.stroke = "#434242";
wishlist.setAttribute("fill", "#434242");
cart.setAttribute("fill", "#434242");
login.setAttribute("fill", "#434242");
navGlass.style.stroke = "#434242";
arrowSVG.setAttribute("fill","#434242");

const navRightElements = document.querySelectorAll(".nav-right-item");

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

navSupport.addEventListener("mouseover", () => {
    support.style.stroke = "#e60012";
    navSupport.style.cursor = "pointer";
});

navSupport.addEventListener("mouseout", () => {
    support.style.stroke = "#434242";
});

navWishlist.addEventListener("mouseover", () => {
    wishlist.setAttribute("fill", "#e60012");
    navWishlist.style.cursor = "pointer";
});

navWishlist.addEventListener("mouseout", () => {
    wishlist.setAttribute("fill", "#434242");
});

navCart.addEventListener("mouseover", () => {
    cart.setAttribute("fill", "#e60012");
    navCart.style.cursor = "pointer";
});

navCart.addEventListener("mouseout", () => {
    cart.setAttribute("fill", "#434242");
});

navLogin.addEventListener("mouseover", () => {
    login.setAttribute("fill", "#e60012");
    navLogin.style.cursor = "pointer";
});

navLogin.addEventListener("mouseout", () => {
    login.setAttribute("fill", "#434242");
});
