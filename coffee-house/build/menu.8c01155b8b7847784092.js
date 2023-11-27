/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/coffeeCards.js":
/*!************************************!*\
  !*** ./src/scripts/coffeeCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showCard: () => (/* binding */ showCard)
/* harmony export */ });
/* harmony import */ var _assets_img_coffee_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/coffee-1.png */ "./src/assets/img/coffee-1.png");
/* harmony import */ var _assets_img_coffee_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/img/coffee-2.png */ "./src/assets/img/coffee-2.png");
/* harmony import */ var _assets_img_coffee_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img/coffee-3.png */ "./src/assets/img/coffee-3.png");
/* harmony import */ var _assets_img_coffee_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/img/coffee-4.png */ "./src/assets/img/coffee-4.png");
/* harmony import */ var _assets_img_coffee_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/img/coffee-5.png */ "./src/assets/img/coffee-5.png");
/* harmony import */ var _assets_img_coffee_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/img/coffee-6.png */ "./src/assets/img/coffee-6.png");
/* harmony import */ var _assets_img_coffee_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assets/img/coffee-7.png */ "./src/assets/img/coffee-7.png");
/* harmony import */ var _assets_img_coffee_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../assets/img/coffee-8.png */ "./src/assets/img/coffee-8.png");








const arrCoffee = [_assets_img_coffee_1_png__WEBPACK_IMPORTED_MODULE_0__, _assets_img_coffee_2_png__WEBPACK_IMPORTED_MODULE_1__, _assets_img_coffee_3_png__WEBPACK_IMPORTED_MODULE_2__, _assets_img_coffee_4_png__WEBPACK_IMPORTED_MODULE_3__, _assets_img_coffee_5_png__WEBPACK_IMPORTED_MODULE_4__, _assets_img_coffee_6_png__WEBPACK_IMPORTED_MODULE_5__, _assets_img_coffee_7_png__WEBPACK_IMPORTED_MODULE_6__, _assets_img_coffee_8_png__WEBPACK_IMPORTED_MODULE_7__];
function showCard(data) {
  const cardItem = data.products;
  const card = document.querySelector('.menu__content-menu');
  const coffeeCards = cardItem.filter(element => element.category === 'coffee');
  const SCREEN_WIDTH = window.innerWidth;
  card.innerHTML = '';
  for (let i = 0; i < Math.min(arrCoffee.length); i += 1) {
    coffeeCards[i].image = arrCoffee[i];
  }
  const maxVisibleCards = SCREEN_WIDTH <= 1425 && SCREEN_WIDTH >= 1050 ? 6 : SCREEN_WIDTH < 1050 ? 4 : coffeeCards.length;
  const visibleCards = coffeeCards.slice(0, maxVisibleCards);
  visibleCards.forEach(element => {
    const menuCard = document.createElement('div');
    menuCard.classList.add('.menu__card');
    menuCard.style = 'margin-bottom: 40px';
    menuCard.innerHTML = `
        <div class="menu__card">
          <div class="card__content">
            <div class="menu__card-image">
              <img src="${element.image}" alt="${element.name}">
            </div>
            <div class="menu__card-description">
              <div class="menu__title-subtitle">
                <div class="menu__card-title">
                  <h3>${element.name}</h3>
                </div>
                <div class="menu__card-subtitle">
                  <p>${element.description}</p>
                </div>
              </div>
              <div class="menu__card-price">
                <p>${new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol'
    }).format(element.price)}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    card.appendChild(menuCard);
  });
}

/***/ }),

/***/ "./src/scripts/menuGetData.js":
/*!************************************!*\
  !*** ./src/scripts/menuGetData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var _coffeeCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffeeCards */ "./src/scripts/coffeeCards.js");
/* harmony import */ var _database_products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/products.json */ "./src/scripts/database/products.json");


async function fetchData() {
  try {
    const response = await fetch(_database_products_json__WEBPACK_IMPORTED_MODULE_1__);
    if (!response.ok) {
      throw new Error('ошибка при загрузке');
    }
    const data = await response.json();
    (0,_coffeeCards__WEBPACK_IMPORTED_MODULE_0__.showCard)(data);
  } catch (error) {
    console.error('failed 404', error.message);
    throw error;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/fonts/Inter-Medium.ttf */ "./src/assets/fonts/Inter-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/img/img-hero.png */ "./src/assets/img/img-hero.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

@font-face {
  font-family: "inter";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
body {
  font-family: "inter";
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body._lock {
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

a {
  text-decoration: none;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  color: #403F3D;
  background: #E1D4C9;
}

.container__home {
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  margin: 0 auto 40px auto;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 380px) {
  .container__home {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.container__menu {
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  margin: 0 auto 40px auto;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 380px) {
  .container__menu {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.logo {
  width: 100px;
  height: 60px;
}

.enjoy .enjoy__button {
  width: 12.5rem;
  height: 4rem;
}
.enjoy .enjoy__button button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #E1D4C9;
  border: 0;
  border-radius: 6.25rem;
  cursor: pointer;
}
.enjoy .enjoy__button button span {
  color: #403F3D;
  transform: translateX(29%);
  transition: all 0.5s ease;
}
@media screen and (max-width: 768px) {
  .enjoy .enjoy__button button span {
    transform: translateX(0);
  }
}
.enjoy .enjoy__button button svg {
  opacity: 0;
  margin-left: 8px;
  animation: btn-opacity-0 0.3s ease;
}
@media screen and (max-width: 768px) {
  .enjoy .enjoy__button button svg {
    opacity: 1;
  }
}

@media (hover: hover) {
  .enjoy__button:hover button span {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  .enjoy__button:hover button svg {
    animation: btn-opacity-1 0.3s ease forwards;
  }
}
@keyframes btn-opacity-1 {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
}
@keyframes btn-opacity-0 {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 0%;
  }
}
.favorite .favorite__content-slider .slider-btn {
  cursor: pointer;
  transition: all 0.3s ease;
}
.favorite .favorite__content-slider .slider-btn svg {
  transition: all 0.3s ease;
}
.favorite .favorite__content-slider .slider-btn svg path {
  transition: all 0.3s ease;
}

@media (hover: hover) {
  .slider-btn:hover svg {
    fill: #665F55;
  }
  .slider-btn:hover svg path {
    stroke: #E1D4C9;
  }
  .slider__btn-right:hover {
    transform: translateY(-5%);
  }
  .slider__btn-left:hover {
    transform: translateY(5%);
  }
}
.slider__btn-right:active {
  transform: translateY(0);
}

.slider__btn-left:active {
  transform: translateY(0);
}

.mobile-app .mobile-app__description-buttons {
  display: flex;
}
.mobile-app .mobile-app__description-buttons .apple__download-btn {
  margin-right: 20px;
}
.mobile-app .mobile-app__description-buttons .apple__download-btn .mobile-app__btn svg {
  margin-right: 8px;
}
.mobile-app .mobile-app__description-buttons .button {
  cursor: pointer;
  background: #E1D4C9;
  border: 1px solid #665F55;
  border-radius: 100px;
  width: 200px;
  transition: all 0.5s ease;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn {
  display: flex;
  align-items: center;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg {
  margin-left: 20px;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg path {
  transition: all 0.5s ease;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text {
  margin: 12px 0 12px 8px;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p {
  font-size: 10px;
  font-weight: 600;
  line-height: 140%;
  color: #403F3D;
  text-align: start;
  letter-spacing: -0.005rem;
  transition: all 0.5s ease;
}
.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p:last-child {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #403F3D;
  transition: all 0.5s ease;
}

@media (hover: hover) {
  .mobile-app .button:hover {
    background: #665F55;
    transition: all 0.5s ease;
  }
  .mobile-app .button:hover .mobile-app__btn svg path {
    fill: #E1D4C9;
    transition: all 0.5s ease;
  }
  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p {
    color: #E1D4C9;
    transition: all 0.5s ease;
  }
  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p:last-child {
    color: #E1D4C9;
    transition: all 0.5s ease;
  }
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter {
  margin-right: 12px;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg {
  transition: all 0.5s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg path {
  transition: all 0.1s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram {
  margin-right: 12px;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg {
  transition: all 0.5s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg path {
  transition: all 0.1s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg {
  transition: all 0.5s ease;
}
.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg path {
  transition: all 0.1s ease;
}

@media (hover: hover) {
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover svg {
    fill: #E1D4C9;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover path {
    stroke: #403F3D;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover svg {
    fill: #E1D4C9;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover path {
    stroke: #403F3D;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover svg {
    fill: #E1D4C9;
  }
  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover path {
    stroke: #403F3D;
  }
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link {
  margin-bottom: 20px;
  letter-spacing: 0.005rem;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #E1D4C9;
  position: relative;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {
  margin-right: 8px;
}
@media screen and (max-width: 1124px) {
  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {
    margin-right: 4px;
  }
}
@media screen and (max-width: 1124px) {
  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link {
    margin-bottom: 18px;
  }
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #E1D4C9;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer-link p {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #E1D4C9;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time svg {
  margin-right: 8px;
}

@media (hover: hover) {
  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link:hover a:before {
    transform: scaleX(1.1);
    transition: transform 0.5s ease;
  }
}
.menu .menu__content .menu__content-filter {
  display: flex;
  justify-content: center;
}
.menu .menu__content .menu__content-filter .filter__btn {
  display: flex;
  align-items: center;
  border: solid 1px #C1B6AD;
  border-radius: 100px;
  padding: 8px;
  margin: 40px 8px 40px 8px;
  transition: all 0.5s ease;
}
.menu .menu__content .menu__content-filter .filter__btn svg {
  margin-right: 8px;
}
.menu .menu__content .menu__content-filter .filter__btn svg rect {
  transition: all 0.5s ease;
}
.menu .menu__content .menu__content-filter .filter__btn p {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #403F3D;
  margin-right: 8px;
  transition: all 0.5s ease;
}
.menu .menu__content .menu__content-filter .filter__btn-active {
  background: #665F55;
}
.menu .menu__content .menu__content-filter .filter__btn-active svg rect {
  fill: #E1D4C9;
}
.menu .menu__content .menu__content-filter .filter__btn-active p {
  color: #E1D4C9;
}

@media (hover: hover) {
  .menu .menu__content .menu__content-filter .filter__btn:hover {
    background: #665F55;
    cursor: pointer;
  }
  .menu .menu__content .menu__content-filter .filter__btn:hover svg rect {
    fill: #E1D4C9;
  }
  .menu .menu__content .menu__content-filter .filter__btn:hover p {
    color: #E1D4C9;
  }
}
.menu .menu__content-menu {
  display: grid;
  grid-template-columns: repeat(4, 310px);
  column-gap: 2.96%;
}
.menu .menu__content-menu .menu__card {
  min-height: 100%;
  max-width: 310px;
  border: 1px solid #C1B6AD;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
}
.menu .menu__content-menu .menu__card .menu__card-image {
  position: relative;
  overflow: hidden;
  width: 310px;
  height: 310px;
  border-radius: 40px;
  object-fit: cover;
}
.menu .menu__content-menu .menu__card .menu__card-image img {
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: transform 0.4s ease;
}
.menu .menu__content-menu .menu__card .menu__card-description {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 51px;
}
.menu .menu__content-menu .menu__card .menu__card-title {
  margin-bottom: 10px;
}
.menu .menu__content-menu .menu__card .menu__card-title h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.menu .menu__content-menu .menu__card .menu__card-subtitle {
  margin-bottom: 10px;
}
.menu .menu__content-menu .menu__card .menu__card-subtitle p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #403F3D;
  letter-spacing: -0.01rem;
}
.menu .menu__content-menu .menu__card .menu__card-price {
  position: absolute;
  bottom: 20px;
}
.menu .menu__content-menu .menu__card .menu__card-price p {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
@media screen and (max-width: 1425px) {
  .menu .menu__content-menu {
    justify-content: center;
    grid-template-columns: repeat(3, 310px);
    grid-auto-rows: minmax(545px, auto);
    column-gap: 5.8%;
  }
}
@media screen and (max-width: 1050px) {
  .menu .menu__content-menu {
    grid-template-columns: repeat(2, 310px);
  }
}

@media (hover: hover) {
  .menu .menu__content-menu .menu__card:hover img {
    transform: translate(-50%, -50%) scale(1);
  }
}
.header .header__burger-btn {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid #403F3D;
  border-radius: 50%;
  position: relative;
  margin-top: 8px;
}
.header .header__burger-btn span {
  width: 16px;
  height: 1.5px;
  left: 13px;
  top: 21px;
  position: absolute;
  background: #403F3D;
}
.header .header__burger-btn span:first-child {
  transform: translateY(-4px);
}
.header .header__burger-btn span:last-child {
  transform: translateY(4px);
}
@media (hover: hover) {
  .header .header__burger-btn:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .header .header__burger-btn {
    display: block;
  }
  .header .header__nav {
    position: absolute;
    right: -380px;
    top: 0;
    width: 380px;
    background: #E1D4C9;
    height: 1000%;
    margin: 0;
  }
  .header .header__nav ul {
    display: block;
  }
  .header .header__menu-link {
    position: absolute;
    right: -380px;
    top: 6.6rem;
    width: 380px;
  }
}

.menu .menu__content-refresh {
  display: flex;
  justify-content: center;
  display: none;
}
.menu .menu__content-refresh button {
  background: #E1D4C9;
  padding: 17px 16px 14px 18px;
  border-radius: 50%;
  border: 1px solid #403F3D;
}
@media screen and (max-width: 1425px) {
  .menu .menu__content-refresh {
    display: flex;
  }
}

header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  height: 60px;
}
header nav {
  flex-basis: 39.5%;
  margin: 15px;
}
@media screen and (max-width: 1050px) {
  header nav {
    flex-basis: 52.5%;
  }
}
header ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
}
header .link {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #403F3D;
  text-decoration: none;
  position: relative;
  transition: 0.3s ease;
}
header .link:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #403F3D;
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
header #link-active {
  cursor: default;
}
@media screen and (max-width: 768px) {
  header #link-active:before {
    transform: scaleX(0);
  }
}
header .header__menu-link {
  margin: 15px 0;
}
header .header__menu-link img {
  margin-left: 0.28rem;
}

@media (hover: hover) {
  header .link:hover:before {
    transform: scaleX(1.1);
    transition: transform 0.5s ease;
  }
}
.enjoy {
  border-radius: 2.5rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40.25rem;
}
.enjoy .enjoy__content {
  width: 33.125rem;
  height: 27.75rem;
  padding-top: 6.25rem;
  margin-left: 6.25rem;
}
.enjoy .enjoy__content .enjoy__content-title {
  font-size: 72px;
  font-weight: 600;
  line-height: 105%;
  color: #E1D4C9;
  letter-spacing: 0.0375rem;
  margin-bottom: 2.5rem;
}
.enjoy .enjoy__content .enjoy__content-title span {
  font-style: italic;
  color: #B0907A;
}
.enjoy .enjoy__content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #E1D4C9;
  letter-spacing: -0.0051rem;
  margin-bottom: 2.5rem;
}
@media screen and (max-width: 768px) {
  .enjoy .enjoy__content {
    margin-left: 3.7rem;
  }
}

.favorite .favorite__content {
  text-align: center;
}
.favorite .favorite__content h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
  margin-top: 100px;
  margin-bottom: 40px;
}
.favorite .favorite__content h2 span {
  font-style: italic;
  color: #B0907A;
}
.favorite .favorite__content .favorite__content-slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.favorite .favorite__content .favorite__content-slider .slider__btn-left {
  rotate: 180deg;
}
.favorite .favorite__content .favorite__content-slider .slider-btn {
  margin-left: 4px;
  margin-right: 4px;
}
.favorite .favorite__content .favorite__content-slider .slider__item img {
  max-width: 480px;
  margin-bottom: 19px;
}
.favorite .favorite__content .favorite__content-slider .slider__item h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
  margin-bottom: 15px;
}
.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  max-width: 480px;
  margin-bottom: 15px;
}
.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-price {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
}
.favorite .favorite__content .favorite__control-panel {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.favorite .favorite__content .favorite__control-panel .panel__control {
  width: 40px;
  height: 4px;
  margin-left: 6px;
  margin-right: 6px;
  background: #C1B6AD;
}
.favorite .favorite__content .favorite__control-panel .panel__control.active {
  background: #665F55;
}

.about {
  margin-top: 100px;
}
.about .about__content-title {
  letter-spacing: 0.015rem;
}
.about .about__content-title h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.about .about__content-title h2 span {
  font-style: italic;
  color: #B0907A;
}
.about .about__content-images {
  display: flex;
}
.about .about__content-images .content__images-left {
  margin-right: 20px;
}
.about .about__content-images .content__images-right {
  margin-left: 20px;
}
.about .about__content-images .images-scales {
  position: relative;
  overflow: hidden;
  width: 660px;
  border-radius: 20px;
  object-fit: cover;
  margin-top: 40px;
}
.about .about__content-images .images__scales-first {
  height: 590px;
}
.about .about__content-images .images__scales-second {
  height: 430px;
}
@media screen and (max-width: 1435px) {
  .about .about__content-images .images__scales-second {
    display: none;
  }
}
.about .about__content-images .about-images {
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: transform 0.4s ease;
}
@media screen and (max-width: 1435px) {
  .about .about__content-images {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about .about__content-images .images__scales-second {
    display: none;
  }
  .about .about__content-images .content__images-left {
    margin-right: 0px;
  }
  .about .about__content-images .content__images-right {
    margin-left: 0px;
  }
  .about .about__content-images .images__scales-first {
    width: 688px;
    height: 590px;
  }
  .about .about__content-images .about-images {
    transform: translate(-50%, -50%) scale(1.06);
  }
}

@media (hover: hover) {
  .images-scales:hover .about-images {
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.4s ease;
  }
}
.mobile-app {
  margin-top: 98px;
  margin-bottom: 98px;
}
.mobile-app .mobile-app__content {
  display: flex;
  justify-content: space-between;
}
.mobile-app .mobile-app__content .mobile-app__content-description {
  max-width: 630px;
  margin-top: 144px;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title {
  text-align: start;
  letter-spacing: 0.02rem;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 span {
  font-style: italic;
  color: #B0907A;
}
.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-subtitle p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #403F3D;
  margin-top: 40px;
  margin-bottom: 40px;
  letter-spacing: -0.005rem;
}
@media screen and (max-width: 1140px) {
  .mobile-app .mobile-app__content {
    align-items: center;
    flex-direction: column;
  }
  .mobile-app .mobile-app__content .mobile-app__content-description {
    margin-top: 100px;
  }
}
@media screen and (max-width: 1140px) and (max-width: 850px) {
  .mobile-app .mobile-app__content .mobile-app__content-description {
    margin-right: 8%;
    margin-bottom: 14.5%;
  }
}
@media screen and (max-width: 1140px) {
  .mobile-app .mobile-app__content .mobile-app__content-description h2 {
    width: 108%;
  }
  .mobile-app .mobile-app__content .mobile-app__content-description p {
    width: 108%;
  }
}
@media screen and (max-width: 1140px) {
  .mobile-app {
    margin-top: 0;
  }
}

.footer {
  background: #665F55;
  border-radius: 40px;
}
.footer .footer__content {
  display: flex;
  align-items: center;
  padding: 100px;
}
.footer .footer__content .footer__content-left {
  max-width: 530px;
  width: 100%;
  margin-right: 100px;
}
.footer .footer__content .footer__content-left .footer__content-title {
  margin-bottom: 40px;
}
.footer .footer__content .footer__content-left .footer__content-title h2 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #E1D4C9;
  letter-spacing: 0.02rem;
}
.footer .footer__content .footer__content-left .footer__content-title h2 span {
  font-style: italic;
  color: #B0907A;
}
.footer .footer__content .footer__content-left .footer__content-web {
  display: flex;
}
.footer .footer__content .footer__content-right {
  min-width: 265px;
}
.footer .footer__content .footer__content-right .footer__contacts-title {
  margin-bottom: 40px;
}
.footer .footer__content .footer__content-right .footer__contacts-title h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  color: #E1D4C9;
}
@media screen and (max-width: 1140px) {
  .footer .footer__content .footer__content-left {
    margin-right: 10%;
  }
}
@media screen and (max-width: 1140px) and (max-width: 1124px) {
  .footer .footer__content {
    padding: 100px 60px 96px 60px;
    flex-direction: column;
    align-items: start;
  }
  .footer .footer__content .footer__content-left {
    margin-bottom: 97px;
    margin-right: 0;
  }
  .footer .footer__content .footer__content-right .footer__contacts-title {
    margin-bottom: 37px;
  }
}

.menu {
  margin-bottom: 60px;
}
@media screen and (max-width: 1425px) {
  .menu {
    margin-bottom: 100px;
  }
}
.menu .menu__content .menu__content-title {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.menu .menu__content .menu__content-title h1 {
  font-size: 60px;
  font-weight: 600;
  line-height: 125%;
  color: #403F3D;
}
.menu .menu__content .menu__content-title h1 span {
  font-style: italic;
  color: #B0907A;
}`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css","webpack://./src/style/main.scss","webpack://./src/style/base/_fonts.scss","webpack://./src/style/base/_start-style.scss","webpack://./src/style/abstracts/_variables.scss","webpack://./src/style/components/_logo.scss","webpack://./src/style/components/_btn-enjoy.scss","webpack://./src/style/components/_btns-favorite.scss","webpack://./src/style/components/_btns-app.scss","webpack://./src/style/components/_btns-footer-web.scss","webpack://./src/style/components/_links-footer.scss","webpack://./src/style/components/_btns-filter.scss","webpack://./src/style/components/_menu-cards.scss","webpack://./src/style/components/_btn-burger.scss","webpack://./src/style/components/_btn-refresh.scss","webpack://./src/style/layout/_header.scss","webpack://./src/style/layout/_enjoy.scss","webpack://./src/style/layout/_favorite.scss","webpack://./src/style/layout/_about.scss","webpack://./src/style/layout/_mobile-app.scss","webpack://./src/style/layout/_footer.scss","webpack://./src/style/layout/_menu.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"inter\";\n  src: url(./../assets/fonts/Inter-Medium.ttf);\n}\nbody {\n  font-family: \"inter\";\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody._lock {\n  overflow: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nbody {\n  color: #403F3D;\n  background: #E1D4C9;\n}\n\n.container__home {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 380px) {\n  .container__home {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.container__menu {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 380px) {\n  .container__menu {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.logo {\n  width: 100px;\n  height: 60px;\n}\n\n.enjoy .enjoy__button {\n  width: 12.5rem;\n  height: 4rem;\n}\n.enjoy .enjoy__button button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #E1D4C9;\n  border: 0;\n  border-radius: 6.25rem;\n  cursor: pointer;\n}\n.enjoy .enjoy__button button span {\n  color: #403F3D;\n  transform: translateX(29%);\n  transition: all 0.5s ease;\n}\n@media screen and (max-width: 768px) {\n  .enjoy .enjoy__button button span {\n    transform: translateX(0);\n  }\n}\n.enjoy .enjoy__button button svg {\n  opacity: 0;\n  margin-left: 8px;\n  animation: btn-opacity-0 0.3s ease;\n}\n@media screen and (max-width: 768px) {\n  .enjoy .enjoy__button button svg {\n    opacity: 1;\n  }\n}\n\n@media (hover: hover) {\n  .enjoy__button:hover button span {\n    transform: translateX(0%);\n    transition: all 0.5s ease;\n  }\n  .enjoy__button:hover button svg {\n    animation: btn-opacity-1 0.3s ease forwards;\n  }\n}\n@keyframes btn-opacity-1 {\n  0% {\n    opacity: 0%;\n  }\n  50% {\n    opacity: 50%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\n@keyframes btn-opacity-0 {\n  0% {\n    opacity: 100%;\n  }\n  50% {\n    opacity: 50%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n.favorite .favorite__content-slider .slider-btn {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.favorite .favorite__content-slider .slider-btn svg {\n  transition: all 0.3s ease;\n}\n.favorite .favorite__content-slider .slider-btn svg path {\n  transition: all 0.3s ease;\n}\n\n@media (hover: hover) {\n  .slider-btn:hover svg {\n    fill: #665F55;\n  }\n  .slider-btn:hover svg path {\n    stroke: #E1D4C9;\n  }\n  .slider__btn-right:hover {\n    transform: translateY(-5%);\n  }\n  .slider__btn-left:hover {\n    transform: translateY(5%);\n  }\n}\n.slider__btn-right:active {\n  transform: translateY(0);\n}\n\n.slider__btn-left:active {\n  transform: translateY(0);\n}\n\n.mobile-app .mobile-app__description-buttons {\n  display: flex;\n}\n.mobile-app .mobile-app__description-buttons .apple__download-btn {\n  margin-right: 20px;\n}\n.mobile-app .mobile-app__description-buttons .apple__download-btn .mobile-app__btn svg {\n  margin-right: 8px;\n}\n.mobile-app .mobile-app__description-buttons .button {\n  cursor: pointer;\n  background: #E1D4C9;\n  border: 1px solid #665F55;\n  border-radius: 100px;\n  width: 200px;\n  transition: all 0.5s ease;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn {\n  display: flex;\n  align-items: center;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg {\n  margin-left: 20px;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn svg path {\n  transition: all 0.5s ease;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text {\n  margin: 12px 0 12px 8px;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 140%;\n  color: #403F3D;\n  text-align: start;\n  letter-spacing: -0.005rem;\n  transition: all 0.5s ease;\n}\n.mobile-app .mobile-app__description-buttons .button .mobile-app__btn .mobile-app__btn-text p:last-child {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403F3D;\n  transition: all 0.5s ease;\n}\n\n@media (hover: hover) {\n  .mobile-app .button:hover {\n    background: #665F55;\n    transition: all 0.5s ease;\n  }\n  .mobile-app .button:hover .mobile-app__btn svg path {\n    fill: #E1D4C9;\n    transition: all 0.5s ease;\n  }\n  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p {\n    color: #E1D4C9;\n    transition: all 0.5s ease;\n  }\n  .mobile-app .button:hover .mobile-app__btn .mobile-app__btn-text p:last-child {\n    color: #E1D4C9;\n    transition: all 0.5s ease;\n  }\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter {\n  margin-right: 12px;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg {\n  transition: all 0.5s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter svg path {\n  transition: all 0.1s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram {\n  margin-right: 12px;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg {\n  transition: all 0.5s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram svg path {\n  transition: all 0.1s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg {\n  transition: all 0.5s ease;\n}\n.footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook svg path {\n  transition: all 0.1s ease;\n}\n\n@media (hover: hover) {\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover svg {\n    fill: #E1D4C9;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-twitter a:hover path {\n    stroke: #403F3D;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover svg {\n    fill: #E1D4C9;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-instagram:hover path {\n    stroke: #403F3D;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover svg {\n    fill: #E1D4C9;\n  }\n  .footer .footer__content .footer__content-left .footer__content-web .footer__web-facebook:hover path {\n    stroke: #403F3D;\n  }\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link {\n  margin-bottom: 20px;\n  letter-spacing: 0.005rem;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #E1D4C9;\n  position: relative;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {\n  margin-right: 8px;\n}\n@media screen and (max-width: 1124px) {\n  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link a svg {\n    margin-right: 4px;\n  }\n}\n@media screen and (max-width: 1124px) {\n  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link {\n    margin-bottom: 18px;\n  }\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link a:before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #E1D4C9;\n  position: absolute;\n  left: 0;\n  bottom: -4px;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer-link p {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #E1D4C9;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.footer .footer__content .footer__content-right .footer__contacts-content .footer__contacts-time svg {\n  margin-right: 8px;\n}\n\n@media (hover: hover) {\n  .footer .footer__content .footer__content-right .footer__contacts-content .footer-link:hover a:before {\n    transform: scaleX(1.1);\n    transition: transform 0.5s ease;\n  }\n}\n.menu .menu__content .menu__content-filter {\n  display: flex;\n  justify-content: center;\n}\n.menu .menu__content .menu__content-filter .filter__btn {\n  display: flex;\n  align-items: center;\n  border: solid 1px #C1B6AD;\n  border-radius: 100px;\n  padding: 8px;\n  margin: 40px 8px 40px 8px;\n  transition: all 0.5s ease;\n}\n.menu .menu__content .menu__content-filter .filter__btn svg {\n  margin-right: 8px;\n}\n.menu .menu__content .menu__content-filter .filter__btn svg rect {\n  transition: all 0.5s ease;\n}\n.menu .menu__content .menu__content-filter .filter__btn p {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403F3D;\n  margin-right: 8px;\n  transition: all 0.5s ease;\n}\n.menu .menu__content .menu__content-filter .filter__btn-active {\n  background: #665F55;\n}\n.menu .menu__content .menu__content-filter .filter__btn-active svg rect {\n  fill: #E1D4C9;\n}\n.menu .menu__content .menu__content-filter .filter__btn-active p {\n  color: #E1D4C9;\n}\n\n@media (hover: hover) {\n  .menu .menu__content .menu__content-filter .filter__btn:hover {\n    background: #665F55;\n    cursor: pointer;\n  }\n  .menu .menu__content .menu__content-filter .filter__btn:hover svg rect {\n    fill: #E1D4C9;\n  }\n  .menu .menu__content .menu__content-filter .filter__btn:hover p {\n    color: #E1D4C9;\n  }\n}\n.menu .menu__content-menu {\n  display: grid;\n  grid-template-columns: repeat(4, 310px);\n  column-gap: 2.96%;\n}\n.menu .menu__content-menu .menu__card {\n  min-height: 100%;\n  max-width: 310px;\n  border: 1px solid #C1B6AD;\n  border-radius: 40px;\n  cursor: pointer;\n  position: relative;\n}\n.menu .menu__content-menu .menu__card .menu__card-image {\n  position: relative;\n  overflow: hidden;\n  width: 310px;\n  height: 310px;\n  border-radius: 40px;\n  object-fit: cover;\n}\n.menu .menu__content-menu .menu__card .menu__card-image img {\n  position: absolute;\n  max-width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.1);\n  transition: transform 0.4s ease;\n}\n.menu .menu__content-menu .menu__card .menu__card-description {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 51px;\n}\n.menu .menu__content-menu .menu__card .menu__card-title {\n  margin-bottom: 10px;\n}\n.menu .menu__content-menu .menu__card .menu__card-title h3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.menu .menu__content-menu .menu__card .menu__card-subtitle {\n  margin-bottom: 10px;\n}\n.menu .menu__content-menu .menu__card .menu__card-subtitle p {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  color: #403F3D;\n  letter-spacing: -0.01rem;\n}\n.menu .menu__content-menu .menu__card .menu__card-price {\n  position: absolute;\n  bottom: 20px;\n}\n.menu .menu__content-menu .menu__card .menu__card-price p {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n@media screen and (max-width: 1425px) {\n  .menu .menu__content-menu {\n    justify-content: center;\n    grid-template-columns: repeat(3, 310px);\n    grid-auto-rows: minmax(545px, auto);\n    column-gap: 5.8%;\n  }\n}\n@media screen and (max-width: 1050px) {\n  .menu .menu__content-menu {\n    grid-template-columns: repeat(2, 310px);\n  }\n}\n\n@media (hover: hover) {\n  .menu .menu__content-menu .menu__card:hover img {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.header .header__burger-btn {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border: 1px solid #403F3D;\n  border-radius: 50%;\n  position: relative;\n  margin-top: 8px;\n}\n.header .header__burger-btn span {\n  width: 16px;\n  height: 1.5px;\n  left: 13px;\n  top: 21px;\n  position: absolute;\n  background: #403F3D;\n}\n.header .header__burger-btn span:first-child {\n  transform: translateY(-4px);\n}\n.header .header__burger-btn span:last-child {\n  transform: translateY(4px);\n}\n@media (hover: hover) {\n  .header .header__burger-btn:hover {\n    cursor: pointer;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header .header__burger-btn {\n    display: block;\n  }\n  .header .header__nav {\n    position: absolute;\n    right: -380px;\n    top: 0;\n    width: 380px;\n    background: #E1D4C9;\n    height: 1000%;\n    margin: 0;\n  }\n  .header .header__nav ul {\n    display: block;\n  }\n  .header .header__menu-link {\n    position: absolute;\n    right: -380px;\n    top: 6.6rem;\n    width: 380px;\n  }\n}\n\n.menu .menu__content-refresh {\n  display: flex;\n  justify-content: center;\n  display: none;\n}\n.menu .menu__content-refresh button {\n  background: #E1D4C9;\n  padding: 17px 16px 14px 18px;\n  border-radius: 50%;\n  border: 1px solid #403F3D;\n}\n@media screen and (max-width: 1425px) {\n  .menu .menu__content-refresh {\n    display: flex;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n  height: 60px;\n}\nheader nav {\n  flex-basis: 39.5%;\n  margin: 15px;\n}\n@media screen and (max-width: 1050px) {\n  header nav {\n    flex-basis: 52.5%;\n  }\n}\nheader ul {\n  display: flex;\n  justify-content: space-evenly;\n  list-style: none;\n}\nheader .link {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403F3D;\n  text-decoration: none;\n  position: relative;\n  transition: 0.3s ease;\n}\nheader .link:before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #403F3D;\n  position: absolute;\n  left: 0;\n  bottom: -4px;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n}\nheader #link-active {\n  cursor: default;\n}\n@media screen and (max-width: 768px) {\n  header #link-active:before {\n    transform: scaleX(0);\n  }\n}\nheader .header__menu-link {\n  margin: 15px 0;\n}\nheader .header__menu-link img {\n  margin-left: 0.28rem;\n}\n\n@media (hover: hover) {\n  header .link:hover:before {\n    transform: scaleX(1.1);\n    transition: transform 0.5s ease;\n  }\n}\n.enjoy {\n  border-radius: 2.5rem;\n  background-image: url(./../assets/img/img-hero.png);\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  height: 40.25rem;\n}\n.enjoy .enjoy__content {\n  width: 33.125rem;\n  height: 27.75rem;\n  padding-top: 6.25rem;\n  margin-left: 6.25rem;\n}\n.enjoy .enjoy__content .enjoy__content-title {\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 105%;\n  color: #E1D4C9;\n  letter-spacing: 0.0375rem;\n  margin-bottom: 2.5rem;\n}\n.enjoy .enjoy__content .enjoy__content-title span {\n  font-style: italic;\n  color: #B0907A;\n}\n.enjoy .enjoy__content p {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  color: #E1D4C9;\n  letter-spacing: -0.0051rem;\n  margin-bottom: 2.5rem;\n}\n@media screen and (max-width: 768px) {\n  .enjoy .enjoy__content {\n    margin-left: 3.7rem;\n  }\n}\n\n.favorite .favorite__content {\n  text-align: center;\n}\n.favorite .favorite__content h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n  margin-top: 100px;\n  margin-bottom: 40px;\n}\n.favorite .favorite__content h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.favorite .favorite__content .favorite__content-slider {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.favorite .favorite__content .favorite__content-slider .slider__btn-left {\n  rotate: 180deg;\n}\n.favorite .favorite__content .favorite__content-slider .slider-btn {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item img {\n  max-width: 480px;\n  margin-bottom: 19px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item h3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n  margin-bottom: 15px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-subtitle {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  max-width: 480px;\n  margin-bottom: 15px;\n}\n.favorite .favorite__content .favorite__content-slider .slider__item p.slider__item-price {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n}\n.favorite .favorite__content .favorite__control-panel {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.favorite .favorite__content .favorite__control-panel .panel__control {\n  width: 40px;\n  height: 4px;\n  margin-left: 6px;\n  margin-right: 6px;\n  background: #C1B6AD;\n}\n.favorite .favorite__content .favorite__control-panel .panel__control.active {\n  background: #665F55;\n}\n\n.about {\n  margin-top: 100px;\n}\n.about .about__content-title {\n  letter-spacing: 0.015rem;\n}\n.about .about__content-title h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.about .about__content-title h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.about .about__content-images {\n  display: flex;\n}\n.about .about__content-images .content__images-left {\n  margin-right: 20px;\n}\n.about .about__content-images .content__images-right {\n  margin-left: 20px;\n}\n.about .about__content-images .images-scales {\n  position: relative;\n  overflow: hidden;\n  width: 660px;\n  border-radius: 20px;\n  object-fit: cover;\n  margin-top: 40px;\n}\n.about .about__content-images .images__scales-first {\n  height: 590px;\n}\n.about .about__content-images .images__scales-second {\n  height: 430px;\n}\n@media screen and (max-width: 1435px) {\n  .about .about__content-images .images__scales-second {\n    display: none;\n  }\n}\n.about .about__content-images .about-images {\n  position: absolute;\n  max-width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.1);\n  transition: transform 0.4s ease;\n}\n@media screen and (max-width: 1435px) {\n  .about .about__content-images {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .about .about__content-images .images__scales-second {\n    display: none;\n  }\n  .about .about__content-images .content__images-left {\n    margin-right: 0px;\n  }\n  .about .about__content-images .content__images-right {\n    margin-left: 0px;\n  }\n  .about .about__content-images .images__scales-first {\n    width: 688px;\n    height: 590px;\n  }\n  .about .about__content-images .about-images {\n    transform: translate(-50%, -50%) scale(1.06);\n  }\n}\n\n@media (hover: hover) {\n  .images-scales:hover .about-images {\n    transform: translate(-50%, -50%) scale(1);\n    transition: transform 0.4s ease;\n  }\n}\n.mobile-app {\n  margin-top: 98px;\n  margin-bottom: 98px;\n}\n.mobile-app .mobile-app__content {\n  display: flex;\n  justify-content: space-between;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description {\n  max-width: 630px;\n  margin-top: 144px;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title {\n  text-align: start;\n  letter-spacing: 0.02rem;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-title h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.mobile-app .mobile-app__content .mobile-app__content-description .mobile-app__description-subtitle p {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n  color: #403F3D;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  letter-spacing: -0.005rem;\n}\n@media screen and (max-width: 1140px) {\n  .mobile-app .mobile-app__content {\n    align-items: center;\n    flex-direction: column;\n  }\n  .mobile-app .mobile-app__content .mobile-app__content-description {\n    margin-top: 100px;\n  }\n}\n@media screen and (max-width: 1140px) and (max-width: 850px) {\n  .mobile-app .mobile-app__content .mobile-app__content-description {\n    margin-right: 8%;\n    margin-bottom: 14.5%;\n  }\n}\n@media screen and (max-width: 1140px) {\n  .mobile-app .mobile-app__content .mobile-app__content-description h2 {\n    width: 108%;\n  }\n  .mobile-app .mobile-app__content .mobile-app__content-description p {\n    width: 108%;\n  }\n}\n@media screen and (max-width: 1140px) {\n  .mobile-app {\n    margin-top: 0;\n  }\n}\n\n.footer {\n  background: #665F55;\n  border-radius: 40px;\n}\n.footer .footer__content {\n  display: flex;\n  align-items: center;\n  padding: 100px;\n}\n.footer .footer__content .footer__content-left {\n  max-width: 530px;\n  width: 100%;\n  margin-right: 100px;\n}\n.footer .footer__content .footer__content-left .footer__content-title {\n  margin-bottom: 40px;\n}\n.footer .footer__content .footer__content-left .footer__content-title h2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #E1D4C9;\n  letter-spacing: 0.02rem;\n}\n.footer .footer__content .footer__content-left .footer__content-title h2 span {\n  font-style: italic;\n  color: #B0907A;\n}\n.footer .footer__content .footer__content-left .footer__content-web {\n  display: flex;\n}\n.footer .footer__content .footer__content-right {\n  min-width: 265px;\n}\n.footer .footer__content .footer__content-right .footer__contacts-title {\n  margin-bottom: 40px;\n}\n.footer .footer__content .footer__content-right .footer__contacts-title h3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #E1D4C9;\n}\n@media screen and (max-width: 1140px) {\n  .footer .footer__content .footer__content-left {\n    margin-right: 10%;\n  }\n}\n@media screen and (max-width: 1140px) and (max-width: 1124px) {\n  .footer .footer__content {\n    padding: 100px 60px 96px 60px;\n    flex-direction: column;\n    align-items: start;\n  }\n  .footer .footer__content .footer__content-left {\n    margin-bottom: 97px;\n    margin-right: 0;\n  }\n  .footer .footer__content .footer__content-right .footer__contacts-title {\n    margin-bottom: 37px;\n  }\n}\n\n.menu {\n  margin-bottom: 60px;\n}\n@media screen and (max-width: 1425px) {\n  .menu {\n    margin-bottom: 100px;\n  }\n}\n.menu .menu__content .menu__content-title {\n  text-align: center;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.menu .menu__content .menu__content-title h1 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n  color: #403F3D;\n}\n.menu .menu__content .menu__content-title h1 span {\n  font-style: italic;\n  color: #B0907A;\n}","@font-face {\n  font-family: 'inter';\n  src: url(./../assets/fonts/Inter-Medium.ttf);\n}\n\nbody {\n  font-family: 'inter';\n}","*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody._lock {\n  overflow: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nbody {\n  color: $text-dark;\n  background: $background-body;\n}\n\n.container__home {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n\n  @media screen and (max-width: 380px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n.container__menu {\n  max-width: 1440px;\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n  margin: 0 auto 40px auto;\n  overflow: hidden;\n  position: relative;\n\n  @media screen and (max-width: 380px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}","// text color:\n$text-dark: #403F3D;\n$text-light: #E1D4C9;\n$text-accent: #B0907A;\n\n// background color:\n$background-body: #E1D4C9;\n$background-container: #665F55;\n$background-backdrop: #403F3DCC;\n\n// border color:\n$border-light: #C1B6AD;\n$border-dark: #665F55;\n\n// mixins\n// heading [mobile]\n@mixin heading-mobile-1 {\n  font-size: 42px;\n  font-weight: 600;\n  line-height: 115%;\n}\n\n@mixin heading-mobile-1-accent {\n  font-style: italic;\n}\n\n@mixin heading-mobile-2 {\n  font-size: 42px;\n  font-weight: 600;\n  line-height: 115%;\n}\n\n@mixin heading-mobile-2-accent {\n  font-style: italic;\n}\n\n// heading\n@mixin heading-1 {\n  font-size: 72px;\n  font-weight: 600;\n  line-height: 105%;\n}\n\n@mixin heading-1-accent {\n  font-style: italic;\n}\n\n@mixin heading-2 {\n  font-size: 60px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n@mixin heading-2-accent {\n  font-style: italic;\n}\n\n@mixin heading-3 {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n// body\n@mixin body-medium {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 150%;\n}\n\n@mixin body-caption {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 140%;\n}\n\n// action\n@mixin link-button {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n}\n\n@mixin burger-link {\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 125%;\n}",".logo {\n  width: 100px;\n  height: 60px;\n}",".enjoy {\n\n\n  .enjoy__button {\n    width: 12.5rem;\n    height: 4rem;\n\n    button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      width: 100%;\n      height: 100%;\n\n      background: $background-body;\n      border: 0;\n      border-radius: 6.25rem;\n\n      cursor: pointer;\n\n      span {\n        color: $text-dark;\n        transform: translateX(29%);\n        transition: all .5s ease;\n\n        @media screen and (max-width:768px) {\n        transform: translateX(0);\n        }\n      }\n\n      svg {\n        opacity: 0;\n        margin-left: 8px;\n        animation: btn-opacity-0 .3s ease;\n\n        @media screen and (max-width:768px) {\n          opacity: 1;\n        }\n      }\n    }\n\n\n  }\n}\n\n@media (hover:hover) {\n  .enjoy__button:hover {\n    button {\n      span {\n        transform: translateX(0%);\n        transition: all .5s ease;\n      }\n\n      svg {\n        animation: btn-opacity-1 .3s ease forwards;\n      }\n    }\n  }\n}\n\n@keyframes btn-opacity-1 {\n  0% {\n    opacity: 0%;\n  }\n\n  50% {\n    opacity: 50%;\n  }\n\n  100% {\n    opacity: 100%;\n  }\n}\n\n@keyframes btn-opacity-0 {\n  0% {\n    opacity: 100%;\n  }\n\n  50% {\n    opacity: 50%;\n  }\n\n  100% {\n    opacity: 0%;\n  }\n}",".favorite {\n\n  .favorite__content-slider {\n\n    .slider-btn {\n      cursor: pointer;\n      transition: all .3s ease;\n\n      svg {\n        transition: all .3s ease;\n\n        path {\n          transition: all .3s ease;\n        }\n      }\n    }\n  }\n}\n\n@media (hover:hover) {\n\n  .slider-btn:hover {\n\n    svg {\n      fill: $background-container;\n\n      path {\n        stroke: $text-light;\n      }\n    }\n  }\n\n  .slider__btn-right:hover {\n\n    transform: translateY(-5%);\n  }\n\n  .slider__btn-left:hover {\n\n    transform: translateY(5%);\n  }\n}\n\n.slider__btn-right:active {\n\n  transform: translateY(0);\n}\n\n.slider__btn-left:active {\n\n  transform: translateY(0);\n}",".mobile-app {\n\n  .mobile-app__description-buttons {\n    display: flex;\n\n    .apple__download-btn {\n      margin-right: 20px;\n\n      .mobile-app__btn {\n\n        svg {\n          margin-right: 8px;\n        }\n      }\n    }\n\n    .button {\n\n      cursor: pointer;\n      background: $background-body;\n      border: 1px solid $border-dark;\n      border-radius: 100px;\n      width: 200px;\n      transition: all .5s ease;\n\n      .mobile-app__btn {\n        display: flex;\n        align-items: center;\n\n        svg {\n          margin-left: 20px;\n\n          path {\n            transition: all .5s ease;\n          }\n        }\n\n        .mobile-app__btn-text {\n\n          margin: 12px 0 12px 8px;\n\n          p {\n            @include body-caption;\n            color: $text-dark;\n            text-align: start;\n            letter-spacing: -0.005rem;\n            transition: all .5s ease;\n          }\n\n          p:last-child {\n            @include link-button;\n            color: $text-dark;\n            transition: all .5s ease;\n          }\n        }\n      }\n    }\n\n  }\n}\n\n@media (hover:hover) {\n  .mobile-app {\n\n    .button:hover {\n      background: $background-container;\n      transition: all .5s ease;\n\n      .mobile-app__btn {\n\n        svg {\n\n          path {\n            fill: $text-light;\n            transition: all .5s ease;\n          }\n        }\n\n        .mobile-app__btn-text {\n\n          p {\n            color: $text-light;\n            transition: all .5s ease;\n          }\n\n          p:last-child {\n            color: $text-light;\n            transition: all .5s ease;\n          }\n        }\n      }\n    }\n  }\n}",".footer {\r\n  .footer__content {\r\n    .footer__content-left {\r\n      .footer__content-web {\r\n        .footer__web-twitter {\r\n          margin-right: 12px;\r\n\r\n          svg {\r\n            transition: all .5s ease;\r\n\r\n            path {\r\n              transition: all .1s ease;\r\n            }\r\n          }\r\n        }\r\n\r\n        .footer__web-instagram {\r\n          margin-right: 12px;\r\n\r\n          svg {\r\n            transition: all .5s ease;\r\n\r\n            path {\r\n              transition: all .1s ease;\r\n            }\r\n          }\r\n        }\r\n\r\n        .footer__web-facebook {\r\n          svg {\r\n            transition: all .5s ease;\r\n\r\n            path {\r\n              transition: all .1s ease;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .footer {\r\n    .footer__content {\r\n      .footer__content-left {\r\n        .footer__content-web {\r\n          .footer__web-twitter {\r\n\r\n            a:hover {\r\n              svg {\r\n                fill: $background-body;\r\n              }\r\n\r\n              path {\r\n                stroke: $text-dark;\r\n              }\r\n            }\r\n          }\r\n\r\n          .footer__web-instagram:hover {\r\n            svg {\r\n              fill: $background-body;\r\n            }\r\n\r\n            path {\r\n              stroke: $text-dark;\r\n            }\r\n          }\r\n\r\n\r\n\r\n          .footer__web-facebook:hover {\r\n            svg {\r\n              fill: $background-body;\r\n            }\r\n\r\n            path {\r\n              stroke: $text-dark;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".footer {\r\n\r\n  .footer__content {\r\n\r\n    .footer__content-right {\r\n\r\n      .footer__contacts-content {\r\n\r\n        .footer-link {\r\n          margin-bottom: 20px;\r\n          letter-spacing: 0.005rem;\r\n\r\n          a {\r\n            @include link-button;\r\n            color: $text-light;\r\n            position: relative;\r\n\r\n            svg {\r\n              margin-right: 8px;\r\n\r\n              @media screen and (max-width:1124px) {\r\n                margin-right: 4px;\r\n              }\r\n            }\r\n          }\r\n\r\n          @media screen and (max-width:1124px) {\r\n            margin-bottom: 18px;\r\n          }\r\n\r\n          a:before {\r\n            content: '';\r\n            width: 100%;\r\n            height: 2px;\r\n            background-color: $text-light;\r\n            position: absolute;\r\n            left: 0;\r\n            bottom: -4px;\r\n            transform: scaleX(0);\r\n            transition: transform .5s ease;\r\n          }\r\n\r\n          p {\r\n            @include link-button;\r\n            color: $text-light;\r\n          }\r\n        }\r\n\r\n        .footer__contacts-time {\r\n          display: flex;\r\n          align-items: center;\r\n          margin-bottom: 10px;\r\n\r\n          svg {\r\n            margin-right: 8px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .footer {\r\n\r\n    .footer__content {\r\n\r\n      .footer__content-right {\r\n\r\n        .footer__contacts-content {\r\n\r\n          .footer-link:hover {\r\n\r\n            a:before {\r\n              transform: scaleX(1.1);\r\n              transition: transform .5s ease;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  .menu__content {\r\n\r\n    .menu__content-filter {\r\n      display: flex;\r\n      justify-content: center;\r\n\r\n      .filter__btn {\r\n        display: flex;\r\n        align-items: center;\r\n        border: solid 1px $border-light;\r\n        border-radius: 100px;\r\n        padding: 8px;\r\n        margin: 40px 8px 40px 8px;\r\n        transition: all .5s ease;\r\n\r\n        svg {\r\n          margin-right: 8px;\r\n\r\n          rect {\r\n            transition: all .5s ease;\r\n          }\r\n        }\r\n\r\n        p {\r\n          @include link-button;\r\n          color: $text-dark;\r\n          margin-right: 8px;\r\n          transition: all .5s ease;\r\n        }\r\n      }\r\n\r\n      .filter__btn-active {\r\n        background: $background-container;\r\n\r\n        svg {\r\n          rect {\r\n            fill: $background-body;\r\n          }\r\n        }\r\n\r\n        p {\r\n          color: $text-light;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .menu {\r\n    .menu__content {\r\n      .menu__content-filter {\r\n\r\n        .filter__btn:hover {\r\n          background: $background-container;\r\n          cursor: pointer;\r\n\r\n          svg {\r\n            rect {\r\n              fill: $background-body;\r\n            }\r\n          }\r\n\r\n          p {\r\n            color: $text-light;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  .menu__content-menu {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 310px);\r\n    column-gap: 2.96%;\r\n\r\n    .menu__card {\r\n      // display: flex;\r\n      // flex-direction: column;\r\n\r\n      min-height: 100%;\r\n      max-width: 310px;\r\n      border: 1px solid $border-light;\r\n      border-radius: 40px;\r\n      cursor: pointer;\r\n      position: relative;\r\n\r\n      .menu__card-image {\r\n        position: relative;\r\n        overflow: hidden;\r\n        width: 310px;\r\n        height: 310px;\r\n        border-radius: 40px;\r\n        object-fit: cover;\r\n\r\n        img {\r\n          position: absolute;\r\n          max-width: 100%;\r\n          top: 50%;\r\n          left: 50%;\r\n          transform: translate(-50%, -50%) scale(1.1);\r\n          transition: transform .4s ease;\r\n        }\r\n      }\r\n\r\n      .menu__card-description {\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin-top: 20px;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n        margin-bottom: 51px;\r\n      }\r\n\r\n      .menu__card-title {\r\n        margin-bottom: 10px;\r\n\r\n        h3 {\r\n          @include heading-3;\r\n          color: $text-dark;\r\n        }\r\n      }\r\n\r\n      .menu__card-subtitle {\r\n        margin-bottom: 10px;\r\n\r\n        p {\r\n          @include body-medium;\r\n          color: $text-dark;\r\n          letter-spacing: -0.01rem;\r\n        }\r\n      }\r\n\r\n      .menu__card-price {\r\n        position: absolute;\r\n        bottom: 20px;\r\n\r\n        p {\r\n          @include heading-3;\r\n          color: $text-dark;\r\n        }\r\n      }\r\n    }\r\n\r\n    @media screen and (max-width:1425px) {\r\n      justify-content: center;\r\n      grid-template-columns: repeat(3, 310px);\r\n      grid-auto-rows: minmax(545px, auto);\r\n      column-gap: 5.8%;\r\n    }\r\n\r\n    @media screen and (max-width:1050px) {\r\n\r\n      grid-template-columns: repeat(2, 310px);\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .menu {\r\n    .menu__content-menu {\r\n      .menu__card:hover {\r\n\r\n        img {\r\n          transform: translate(-50%, -50%) scale(1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".header {\r\n  .header__burger-btn {\r\n    display: none;\r\n    width: 44px;\r\n    height: 44px;\r\n    border: 1px solid $text-dark;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin-top: 8px;\r\n\r\n    span {\r\n      width: 16px;\r\n      height: 1.5px;\r\n      left: 13px;\r\n      top: 21px;\r\n      position: absolute;\r\n      background: $text-dark;\r\n\r\n      &:first-child {\r\n        transform: translateY(-4px);\r\n      }\r\n\r\n      &:last-child {\r\n        transform: translateY(4px);\r\n      }\r\n    }\r\n  }\r\n\r\n  @media (hover:hover) {\r\n    .header__burger-btn:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    .header__burger-btn {\r\n      display: block;\r\n    }\r\n\r\n    .header__nav {\r\n      position: absolute;\r\n      right: -380px;\r\n      top: 0;\r\n      width: 380px;\r\n      background: $background-body;\r\n      height: 1000%;\r\n      margin: 0;\r\n\r\n      ul {\r\n        display: block;\r\n      }\r\n    }\r\n\r\n    .header__menu-link {\r\n      position: absolute;\r\n      right: -380px;\r\n      top: 6.6rem;\r\n      width: 380px;\r\n    }\r\n  }\r\n}",".menu {\r\n  .menu__content-refresh {\r\n    display: flex;\r\n    justify-content: center;\r\n    display: none;\r\n\r\n\r\n    button {\r\n      background: $background-body;\r\n      padding: 17px 16px 14px 18px;\r\n      border-radius: 50%;\r\n      border: 1px solid $text-dark;\r\n    }\r\n\r\n    @media screen and (max-width:1425px) {\r\n      display: flex;\r\n    }\r\n  }\r\n}","header {\n  display: flex;\n  justify-content: space-between;\n\n  margin: 20px 0;\n  height: 60px;\n\n  nav {\n    flex-basis: 39.5%;\n    margin: 15px;\n\n    @media screen and (max-width: 1050px) {\n      flex-basis: 52.5%;\n    }\n  }\n\n  ul {\n    display: flex;\n    justify-content: space-evenly;\n\n    list-style: none;\n  }\n\n  .link {\n    @include link-button;\n    color: $text-dark;\n    text-decoration: none;\n\n    position: relative;\n    transition: 0.3s ease;\n  }\n\n  .link:before {\n    content: '';\n    width: 100%;\n    height: 2px;\n    background-color: $text-dark;\n    position: absolute;\n    left: 0;\n    bottom: -4px;\n    transform: scaleX(0);\n    transition: transform .5s ease;\n  }\n\n  #link-active {\n    cursor: default;\n  }\n\n  #link-active:before {\n    @media screen and (max-width: 768px) {\n      transform: scaleX(0);\n    }\n  }\n\n  .header__menu-link {\n    margin: 15px 0;\n\n    img {\n      margin-left: 0.28rem;\n    }\n  }\n}\n\n\n@media (hover:hover) {\n\n  header {\n    .link:hover:before {\n      transform: scaleX(1.1);\n      transition: transform .5s ease;\n    }\n  }\n}",".enjoy {\n  border-radius: 2.5rem;\n  background-image: url(./../assets/img/img-hero.png);\n  background-position: center;\n  background-size: cover;\n\n  width: 100%;\n  height: 40.25rem;\n\n  .enjoy__content {\n    width: 33.125rem;\n    height: 27.75rem;\n\n    padding-top: 6.25rem;\n    margin-left: 6.25rem;\n\n    .enjoy__content-title {\n      @include heading-1;\n      color: $text-light;\n      letter-spacing: 0.0375rem;\n      margin-bottom: 2.5rem;\n\n      span {\n        @include heading-1-accent;\n        color: $text-accent\n      }\n    }\n\n    p {\n      @include body-medium;\n      color: $text-light;\n      letter-spacing: -0.0051rem;\n      margin-bottom: 2.5rem;\n    }\n\n    @media screen and (max-width:768px) {\n      margin-left: 3.7rem;\n    }\n  }\n}",".favorite {\r\n\r\n  .favorite__content {\r\n    text-align: center;\r\n\r\n    h2 {\r\n      @include heading-2;\r\n      color: $text-dark;\r\n\r\n      margin-top: 100px;\r\n      margin-bottom: 40px;\r\n\r\n      span {\r\n        @include heading-2-accent;\r\n        color: $text-accent;\r\n      }\r\n    }\r\n\r\n    .favorite__content-slider {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n\r\n      .slider__btn-left {\r\n        rotate: 180deg;\r\n      }\r\n\r\n      .slider-btn {\r\n        margin-left: 4px;\r\n        margin-right: 4px;\r\n      }\r\n\r\n      .slider__item {\r\n\r\n        img {\r\n          max-width: 480px;\r\n          margin-bottom: 19px\r\n        }\r\n\r\n        h3 {\r\n          @include heading-3;\r\n          color: $text-dark;\r\n\r\n          margin-bottom: 15px;\r\n        }\r\n\r\n        p.slider__item-subtitle {\r\n          @include body-medium;\r\n\r\n          max-width: 480px;\r\n          margin-bottom: 15px;\r\n        }\r\n\r\n        p.slider__item-price {\r\n          @include heading-3;\r\n        }\r\n      }\r\n    }\r\n\r\n    .favorite__control-panel {\r\n      display: flex;\r\n      justify-content: center;\r\n      margin-top: 40px;\r\n\r\n      .panel__control {\r\n        width: 40px;\r\n        height: 4px;\r\n        margin-left: 6px;\r\n        margin-right: 6px;\r\n\r\n        background: $border-light;\r\n      }\r\n\r\n      .panel__control.active {\r\n        background: $border-dark;\r\n      }\r\n    }\r\n  }\r\n}",".about {\r\n  margin-top: 100px;\r\n\r\n  .about__content-title {\r\n    letter-spacing: 0.015rem;\r\n\r\n    h2 {\r\n      @include heading-2;\r\n      color: $text-dark;\r\n\r\n      span {\r\n        @include heading-2-accent;\r\n        color: $text-accent;\r\n      }\r\n    }\r\n  }\r\n\r\n  .about__content-images {\r\n    display: flex;\r\n\r\n    .content__images-left {\r\n      margin-right: 20px;\r\n    }\r\n\r\n    .content__images-right {\r\n      margin-left: 20px;\r\n    }\r\n\r\n    .images-scales {\r\n      position: relative;\r\n      overflow: hidden;\r\n      width: 660px;\r\n      // width: 100%;\r\n      border-radius: 20px;\r\n      object-fit: cover;\r\n      margin-top: 40px;\r\n\r\n    }\r\n\r\n    .images__scales-first {\r\n      height: 590px;\r\n    }\r\n\r\n    .images__scales-second {\r\n      height: 430px;\r\n\r\n      @media screen and (max-width:1435px) {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    .about-images {\r\n      position: absolute;\r\n      max-width: 100%;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%) scale(1.1);\r\n      transition: transform .4s ease;\r\n    }\r\n\r\n    @media screen and (max-width:1435px) {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n\r\n      .images__scales-second {\r\n        display: none;\r\n      }\r\n\r\n      .content__images-left {\r\n        margin-right: 0px;\r\n      }\r\n\r\n      .content__images-right {\r\n        margin-left: 0px;\r\n      }\r\n\r\n      .images__scales-first {\r\n        width: 688px;\r\n        height: 590px;\r\n      }\r\n\r\n      .about-images {\r\n        transform: translate(-50%, -50%) scale(1.06);\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (hover:hover) {\r\n  .images-scales:hover {\r\n    .about-images {\r\n      transform: translate(-50%, -50%) scale(1);\r\n      transition: transform .4s ease;\r\n\r\n    }\r\n  }\r\n}",".mobile-app {\r\n  margin-top: 98px;\r\n  margin-bottom: 98px;\r\n\r\n  .mobile-app__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .mobile-app__content-description {\r\n      max-width: 630px;\r\n      margin-top: 144px;\r\n\r\n      .mobile-app__description-title {\r\n        text-align: start;\r\n        letter-spacing: 0.02rem;\r\n\r\n        h2 {\r\n          @include heading-2;\r\n          color: $text-dark;\r\n\r\n          span {\r\n            @include heading-2-accent;\r\n            color: $text-accent;\r\n          }\r\n        }\r\n      }\r\n\r\n      .mobile-app__description-subtitle {\r\n\r\n        p {\r\n          @include body-medium;\r\n          color: $text-dark;\r\n          margin-top: 40px;\r\n          margin-bottom: 40px;\r\n          letter-spacing: -0.005rem;\r\n        }\r\n      }\r\n    }\r\n\r\n    @media screen and (max-width:1140px) {\r\n      align-items: center;\r\n      flex-direction: column;\r\n\r\n      .mobile-app__content-description {\r\n        margin-top: 100px;\r\n\r\n        @media screen and (max-width:850px) {\r\n        margin-right: 8%;\r\n        margin-bottom: 14.5%;\r\n        }\r\n\r\n        h2 {\r\n          width: 108%;\r\n        }\r\n\r\n        p {\r\n          width: 108%;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width:1140px) {\r\n    margin-top: 0;\r\n  }\r\n}",".footer {\r\n  background: $background-container;\r\n  border-radius: 40px;\r\n\r\n  .footer__content {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 100px;\r\n\r\n    .footer__content-left {\r\n      max-width: 530px;\r\n      width: 100%;\r\n      margin-right: 100px;\r\n\r\n      .footer__content-title {\r\n        margin-bottom: 40px;\r\n\r\n        h2 {\r\n          @include heading-2;\r\n          color: $text-light;\r\n          letter-spacing: 0.02rem;\r\n\r\n          span {\r\n            @include heading-2-accent;\r\n            color: $text-accent;\r\n          }\r\n        }\r\n      }\r\n\r\n      .footer__content-web {\r\n        display: flex;\r\n      }\r\n    }\r\n\r\n    .footer__content-right {\r\n      min-width: 265px;\r\n\r\n      .footer__contacts-title {\r\n        margin-bottom: 40px;\r\n\r\n        h3 {\r\n          @include heading-3;\r\n          color: $text-light;\r\n        }\r\n      }\r\n    }\r\n\r\n    @media screen and (max-width:1140px) {\r\n      .footer__content-left {\r\n        margin-right: 10%;\r\n      }\r\n\r\n      @media screen and (max-width:1124px) {\r\n        padding: 100px 60px 96px 60px;\r\n        flex-direction: column;\r\n        align-items: start;\r\n\r\n        .footer__content-left {\r\n          margin-bottom: 97px;\r\n          margin-right: 0;\r\n        }\r\n\r\n        .footer__content-right {\r\n          .footer__contacts-title {\r\n            margin-bottom: 37px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".menu {\r\n  margin-bottom: 60px;\r\n\r\n  @media screen and (max-width:1425px) {\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .menu__content {\r\n    .menu__content-title {\r\n      text-align: center;\r\n      max-width: 800px;\r\n      margin: 0 auto;\r\n\r\n      h1 {\r\n        @include heading-2;\r\n        color: $text-dark;\r\n\r\n        span {\r\n          @include heading-2-accent;\r\n          color: $text-accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/menu.html":
/*!***********************!*\
  !*** ./src/menu.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon/coffee-cup.svg */ "./src/assets/icon/coffee-cup.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon/logo.svg */ "./src/assets/icon/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon/refresh.svg */ "./src/assets/icon/refresh.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n  <title>Coffee | menu</title>\n</head>\n\n<body>\n  <div class=\"container__menu\">\n    <header class=\"header\">\n      <div class=\"header__logo-svg logo\">\n        <a href=\"index.html\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></a>\n      </div>\n      <nav class=\"header__nav\">\n        <ul>\n          <li><a href=\"index.html#favorite\" class=\"nav-link link\">Favorite coffee</a></li>\n          <li><a href=\"index.html#about\" class=\"nav-link link\">About</a></li>\n          <li><a href=\"index.html#app\" class=\"nav-link link\">Mobile app</a></li>\n          <li><a href=\"index.html#contacts\" class=\"nav-link link\">Contact us</a></li>\n        </ul>\n      </nav>\n      <div class=\"header__menu-link\">\n        <div id=\"link-active\" class=\"menu__link-text link\">\n          <span>Menu</span>\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"header__burger-btn\">\n        <span></span><span></span>\n      </div>\n    </header>\n    <main class=\"main\">\n      <section class=\"menu\">\n        <div class=\"menu__content\">\n          <div class=\"menu__content-title\">\n            <h1>Behind each of our cups hides an <span>amazing surprise</span></h1>\n          </div>\n          <div class=\"menu__content-filter\">\n            <div class=\"filter__coffee-btn filter__btn filter__btn-active\">\n              <svg width=\"31\" height=\"30\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <rect x=\"0.5\" width=\"30\" height=\"30\" rx=\"15\" fill=\"#C1B6AD\" />\n                <path d=\"M7.5 23.12H23.5V7.12H7.5V23.12Z\" fill=\"url(#pattern0)\" />\n                <defs>\n                  <pattern id=\"pattern0\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n                    <use xlink:href=\"#image0_27919_2389\" transform=\"scale(0.00625)\" />\n                  </pattern>\n                  <image id=\"image0_27919_2389\" width=\"160\" height=\"160\"\n                    xlink:href=\"data:image/png;base64,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\" />\n                </defs>\n              </svg>\n              <p>Coffee</p>\n            </div>\n            <div class=\"filter__tea-btn filter__btn\">\n              <svg width=\"31\" height=\"30\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <rect x=\"0.5\" width=\"30\" height=\"30\" rx=\"15\" fill=\"#C1B6AD\" />\n                <path d=\"M7.5 23.12H23.5V7.12H7.5V23.12Z\" fill=\"url(#pattern1)\" />\n                <defs>\n                  <pattern id=\"pattern1\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n                    <use xlink:href=\"#image0_27919_2771\" transform=\"scale(0.00625)\" />\n                  </pattern>\n                  <image id=\"image0_27919_2771\" width=\"160\" height=\"160\"\n                    xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAABQBklEQVR4nO19d5xlRZX/t6rue697cg6kAUnDEGaYIWcJQ1AJgiCIgrjuqijK8nNFghFU2NUVxXVZEUXJSGYQkDTEYZghhyE4M8AQJ3b3y/dW1e+POqeq7uue6R5AGrDP5/P6vb6vXt30vSefU8JaiwEaoP4i2d8HMED/3DQAwAHqVxoA4AD1Kw0AcID6lQYAOED9SgMAHKB+pQEADlC/0gAAB6hfaQCAA9SvNADAAepXGgDgAPUrDQBwgPqVBgA4QP1KAwAcoH6lAQAOUL/SAAAHqF9pAIAD1K80AMAB6lcaAOAA9SsNAHCA+pUS/rDfvgdj3IRxmLThRhgyeDCUAOrlKhYseAFZU2Pfg2birWVdaKQaK1cux+uvv4KXF76ILG2iXK7g7bde7XVnxWLbuzrYk075PhY8Ng9jxo/DttvvgDETx2LiuhPxqx+fg0KhiCefehL/cvIpeHLeI1i1bAX2OmA/3HnTLGy13TTsfeCBuOhXv8GOu+2KzbaajN/+7L/w8KNzet3ntjN2xFZbbYuXFjyNI79wLK7+06XDtpo29YvbbLv1J4aPGj6pq6Nz6SuLXp09596HLj7qS8e9MOu6G7HupI1w8QW/WqtzO/UHZ+OVlxZhycuLMXXnnfDoAw9i1wP2x90334zNp07FXTffgLET1sfokUOx4q2lOOkHZ2LF0qVY+ubbeOHpZ/DCggXYZd+ZuPayP692H889+wgAQMBi9Jhx2GLKNLzx5ivYdttdsHLZcnSsXIWDP/Np3D7rFhx4yEG44crrsMWULTFl6hSsu8E6GDt+LNrbB6FSKWPZ28vw5mtv4enHnsSbr7+JnfbaBXMfmIMNN94Ew0aPxM1XX4fnX3gM2pgej2XFyjcBRAAcoF5pCoDT/vN/f37IyFHDhrDosAKbWYNdj/j8kd95ZM7j9wA4B8Df+u0oP2Q0AMC+0ZFnn3/eH0eNGNxeSIBEuAsnAWgAqQBKxYLabuft99li2rS9L7/oz/8N4NsAen78B8jTAAB7p0OOO/HfLhs8uE3xBoFw4RiE1gKwBom04tPHHvnvtUZ1+NwH7/uX3iYfNWQ0vvX90/DsY0/8Qw7+g04DRsiaachJ3z3jgkIilDUZtDYwBjDWgQ5w79oA2hhorWFMBmE1Dv3sZ78E4ND+O/QPB/1Tc8AjjzwWyzs71jTky2PHjR5vdAqdWcAaCCRQQkErwAggNUCjqdHMMugsQ5Zl0DqFNSkOOvzob55/zo+uX93knzvmeDz/7IL3/Lw+TPRPDUAA2G7GdPzp97/v8buvfPvUL+q0gabUMFohURI6VcjSBImSsNYg0wZZppFpjTTTSNMUjWaGtJFikymTdwcwEcAb7+tJfYjonx6Aa6BB4yaM27JW6YJOExQSBSkFEqUgpIAUAsZaWGthSPxqY5GlGerNFLVmikbTqmk77jUdwKzWyXffaXusWLq0H07rg0UDOiCAk0/9DkzWaH2JWrVTVCplVMplVCoV1CpVVKtVVCtVdHZ2olatolqpoFqp+s9dlTLKlTLKXWXUyl0QUgghBeLXkZ85tL9P+QNDAxyQ6Me/PA9jJ4zHWSefiiVvLAaAyhsvL140aLNNP2atgYWFURLKaAgBCCGgtTNFjDHItEamDZrNFI1mijRtwmQWLzz+0LPxfn75uz9g6Ztvvf8n+AGlAQ7YA03degZ23G1nPP/0k7caYwEIWGtgSeRCCACAlBKCPreStcBbry1ZCGDhbrvujS023Qp/uu7G9+8kPiQ0wAFXQyNHjMedf73u4k985uivjR49EsOGDsKgtiJKxQISJSEdG4S1FplxhkitmaJSrWPFqi4sXd6BZ5544rpDDzsSy95e1t+n84GlAQB2p0EANgGw+VdPOfWwqdOmoliQkA5vkBKwcC/AfVAAZBFI2oEhQ4HRYy022shgcLFt5oN33nUCgKcBvAhgZb+c0QeY/pkBOBLAdADbANgSDnSbnHfZRRMLxYIUACQBjsHH0lbSu/V/3Lu0zjeohICQClNnbLP11tO3+b21gNbGrly+ogPASwBeAPAcgCfptfj9OeUPHv2zAXB7AIcD2O8XF/9uarFUUIALrTHAWsHGn7tpepa2kRbNnY6lBazKbzMWsFaKtnXHjJi4zpjtzFabb2es226MxeuvvvYKgNsAXAeXyJD9Q87+A0j/DAAcDOBLAL561vm/mJwo4biaT2cJolXJADRBf3L/I2J4LaC0Pdgi1pK4toFbOjACWrttxgisP2m9DdbbYL0vZwZfXvbWsrcfuueeywGcD8ctP9L0UQbgRAD/8YPzfn78yFEjRigVgUzAA0/Q/xLRO00Qv9s1bGt9Z7LCbdOR0ihpm5VhHikAY9zncRPGjPvEZw7/5t6f+uSJD90z+3oAZwH4yGYqfFQBePSp5/70f0aPGjGiEAFPyiBmWXRK4TgSg48BGHM80bKt9Xvb8jn+X8KBnEUuiANK/l4C1riBxrpULwEApUKy58x9j9hh9z0Ovf6yS88F8AMA6Xt8nXojCWAHAPsC2BbAenBGWhXAEgCPA7gdwFx0f/76RB81ABYAnPcfZ5/11YISSCSgVGRMyGBAxHqfFXngtYrbnqj1u1YJTJgKAKZ9mGiwoIks3HElBEIIAaMEhLFobyskR3zhuNOmTJt+wJUXXngkgL+v9VVZe9oAwNfPv/g3n19vvfETFPKSwQLQwA4a+LQxn/nR4oWvLL7jr3deCqc2vLk2O/qoAFABmPidn/zk97vstfvMRAFJDLzYwKAf9MTVmJhzxV76nt3N+bn4t/z7GKQSJJKF48asF3quSJ+tcZ8TI2EskGmLQmawzfStp48788zZl53/y08BeAZAcy2vUV9IATjjd1dedPqwwaVCItwTzeclEDJs/fkJYNJGG2x4/Fe+ePonj/j01y86//9OBvCHvu7wwwjAIoA9AOwMJxa2OOs3v5g0dNiQdgsBSeapAClbJlwoE1u3YAPBXdoYYEoSACNLOOYAPREDz1ggM06m8//+xlkLCwELC2sAbRxEjQFFWQBjDVzkxXrDJZECSVFgow3Grnv6uWc/WqvW07ffWvoanG/xSQAPAbgDwBpzy3qh9U75/nev2Gm37XYtKECJKNkW7lgzY2GMhbE2ssIELASMsRg+fNjwE0895aI//+6iqQBORh/Ecl8BOBLAcQDeAnD5Ozq9d08CwNdPOfvs00eOHjXeWANhHcvQVqCjs+qiE9a48BjrekI4TiZcBgt9pJvrQmtCCEgl3XwCEEKS7uZ+I4SApM8OQsHF4oEDyozRFhAWWaYdd4OlcF3InrFRFo0Hm3U31tINtnDzxgtZWXqSLFAYPnL4hsNGDt9wg8023W/GHrujUqlVH7zz7t8DOA1AeS2v7Z4//uXPrp44cexYRbiyFmgYC60Nmo0mGs0msjSDNtrfDKkUkqSApFAAhPQP29Ff/Pw3R40eN/b0f//KCQAaa9pxXwC447nnn3P10HET1+8op7jo1xdMAPDfa3mCAIBms479Dvr0O/kpABz3yaM/+yvoFJ0dHRAw5J+zkJKBJfJcKwKQIwspZGTCOr4lhIRS0ssZIQJHFB6ATiALGmSsIY5GMxvjZjMW2hgClAMYPxCwgNbag994P6EhsNno3cJo47m0d+fkfIsAIJFZINNm0La77fKNujGTbrrqkkNaL94LT89b3XXd8zs/OnPW6FFDBzOXtwZopBmqtRrqtRrqjTqazSZ0lvkHRykFKQSSYhGlUhtKpTZIpQCpICGw3yf2Paarck7h7NO/fRTWwAl7A+C//e7P//urpiwVm5lBMRH43L8e/5/nn/PzKoALevltj/TSgmd7H9QDffPMs06pdHVCCgspLLkvLAGMDQpBL3pCZbj5jgflnXfWGp9Q4EHH4psoOKRbBHCOS9loc+BuHuN0bJY4nAeUYZDSb431gDPGQEfc0oEegVOy3mgEDJyuqI3AlBkzDr7pqku2BfBYHy7rHpfccMusESOGDjbGQiqBWq0BAaBc7kK1WkGDAJg2m2imzYj7W6gkQVtbO5qlBhqlOkqlEgqFEiBdydanDjvkM88/88wjd9120382Gz371tcEwB9954ennlnPXLqRFAKJEhgyqKS+fuq3f3vaSd9YAeDqPpzke0HrjV9n4la1WhlKOp1IwJJhISBkMBgEAch9Jx2AhCDw2aBNuyoiAqBTqRmIfIFBoHRiNyiP/nvrJ4uA4jYbYzzX9NsROKUx+ewaQSIacHoWc0NtnBKb6YzEHH3vjpjGOh1NWwktEmy+zfR90QLAHjjghj/8+S+uGT1y2GDBmqkxMFqjUu5CuVJGrVJBpVpBrVpFljahtYagzCAIgaRQRLPRwKBBg6GzFDrNUGrXKBbbIFQCKQT+7Vvf+vFdt910C5zh1I1WB8Cff+kbX/33rmoDUipASO9KUEpgUCkR3z37p7//ytFHLADw1Bqh00KLFi7AzAPXWgxvlTZqsBJIlICWwjtwpQSMNlBKEkRsJDbznC1CT8s4BqD0HI+Fhtf5GNgAAQV+YBCLxlu0fiNN6LibAw+Ii5moaFsIl+JvCLxuiiDOLQSMNv53lv2KoCIpY2GhoEUBI8aO2yy+eH8+76zW6zn4v/73D9evs874MQJOj7bWot6so1KpwCXhdqGrswvVahmNeh1ZmsJoTT5TpzMnhRQ6c8VariAr6NAFABAKgwYVSqf/5Oe/+/4p39w1XNVAPQHwp0d94eh/X7VyJdpKJRSKJagkAV9+KYBCQWLs6BFD//N/L7r15C8d+3G44HqfSUrd+6A8TWjWq8iERaIUlBKey7F7pdm0Oe7ndEDpjlkyCIMR4niogZTK65DskBZ+HG9fvTHH3wnBOhoBjcAi6Auvy5GOCDhwg0W4EDDGuJvIYwlshq1PY2Cs8ZaoA2HEEYWClSUMGjR4zJou/w//6/xLtttxxlQpmYsbNBp1VMplVKsVVCtldHV2orOzA416HfVaDc1Gk9Qa5UGWFDJoHdQB0MMspISQAkoBwlhM327bnafvsNPRcx+497LWg2kF4NeO+OwRp3auWoViqZTXq5TKOVSLicBGG62/zk/Ov/DWk44/egbWItXo1lk3YL+ZB/Z1OADYRqMGJQRM4pRfb2DARtYqgAhwRhooKWFt0A3ddeKbbVAqSTAj6uaaEasHntfprAMxHab7SyLUKfTMwQJnk0LAwFnM1hoSa2yRA1mWkTUN6ExDG02gc+BjbmMsoInrGmsBoQBlobNm7sAT5W7z6LFjscMue37tkCM+fWgiQZzPoJk2UOkqo1oto1Ipo7OzE+XOTlTKXa7coNLV+fJzz/y+USnfJazttFKOHzV+4n6TNtviWGvRDggIKZGoBMViEUmaIEsKpAIJSGFw1HFfPGPuA/dejhYuGAPwwGNPOP6XnZ2rMHjwYEil0GymjkOoBAUpHaewLrYppUAhkZg8eeONvnHqmX848+R/Pax18jVRtVrp61AAeFvrDEJKGC0glIQx1j9pfAHYzSKlexKTxOkhKlF0IYR/oCAAJRXpgHBzEYDdgxYs15gjWusAr7MMSiV+GxAMBNjArWLmaYxGlmUkbq1/CGJ9z1mYiQOZtZAqgcwyAp1BBu04qCD90Vhk2tBxARAalc5VnhlcfeGv4+s45ZQzzvhJKXGSzBqNLG14sVurVVAuO+5X6epCudyJl59fcOPCZ57+6nobbvh6yz25+tYrLz1zynY7XLDJ1tMPUSpBoZCh2UyRJAmSLIWWEpAKsAabbrbxFtvtvPuRAK6MJ/EA3P+gmb/sWLGsIEaORKFQgJTONZE2JYk9CUUONOYUUgLFgsKBn/rEIU8++q/ffvi+u859dXHfEjg6Vizv0ziiVwUklCqgWCqiUEiQKIVCIUGxUEBSSKD4GJWCgHDbpHS+KuWABjJMGKAWFkqqnM7I5MS3k1CSQilel7SAUhLaOO4lJEgUxS/jOBw9k+zjq1Yr7liTxPv84toSrrDLMu1BaI1BpjOkaYYs02g2m1R/rNFoNtFoNNFMU/I9GjQrXT2VgQ76xf9edM34caOGKiUgrEWmM9TqdVSrVdTqNZTLFXR2dKJSLqPc1YWHZ9/1s0ULFpw2fty41TGWt2Zdd+0RBxdKt222zbZ7Z9ogTTN/DmmaIinAeywO/ezR3/3jb3/bMwCfenze7PETxm5Wr9dRaishSRKoLEOSFJBlGgWt6aZI8oW5uyMAFBKJr578/856+L67boHL/u2Vnnn2GWy99bS+DAWAZcNGjMawoYPRXiqiWCzQTVRIEkUPiPJGhxQSUpFvDyyuZXDHeLCxtUyOaxoQc0JEfkbvKiSdh/FqbJ71Z6wXeY4YPpfa2qC1gVQycD/2HZKI1qT3OaMk6H/WGlL4qQxUG6RZijRNkWaO+9TqKUyW1V556ml8+pijceilV+D+e+6DKCQ/mjZ968nFRAFwQG806qhVK2jUa6jVaiiXu9yrqxPzHrz/YgDf7cO9yS7/08XHnfK9jz1Xam8fkmnt9F8vAYy7H8Ji08mbTYVLbpjLP/bhzgdm3/29jpUrO+q1Guq1OhqNBnSaIdMZtMmQUtW/JU+4A5/TWZQUGDasvfDN0394AVw8sU80ZNiIvr6mj58wASNHjsKQYcMweMhQDBo8GO3tg9BWakOx2IZCoYgkKaJYKKJQdN55pRInhqWCVApSKvdgKRW4upRIEolESahEoOBfQCEBSolAUQHtCigK9ypIoCRd5kpJuM9Fei9IoK3gXFaJonmVpIclQZIUUCgWIaVyDnDp6oydZRm2KaXonAooJAUUCgUUi20olkootbWhrb0dbe1tGDxoMIYNHY6Rw0dh7OixWH/ddbHbnnsdDGBIdKm//o1TvnXy0EFFFAsSSgDNRh31eg0N4oBdnR3oWLUKXZ2dWPTCgnvnPHD/Vx+Z+0hfb+WS22bd9NNms4m0mSEjAFri6CDdtqCAnff6+AmvLXnF/zCOt785++47z08bDTQaDWRphjRtIktTpM0UWZo65dgYAh5Zf3CO4YKS2HnXXXc58LBjvjZ6/Droy6veSPv0+uQRx5xUKpaQFApICkWoQgEqSaBUAqkSKEWiNnH/840UZJGxr0/SZyWl51ju5odsGeaAUlA8VLgnStDFUvTiz3wRE5FP5+I0sEQJKCW84aSUgCLxHixGFY5RKX/MFvDnoVTi3mVCAHVgVol7yJJCgkKxgGKxgG132G6HU//r508B+DGA20/90em/HjuiTQ4qCBSkM3KazQbqtQZq9TrK5TI6VnWgq6uMt15/7dXrrrr6UAC1NSHuksuuwvznXsKKch2NzGD+w3N/XenqqrjyVE3cPPi03PW0mL7DdodHly4AUGuNeXMe+u+uzo7ORr2Oer2OZurYe0bcL0szGOPC0+yH45CXkgLFgsS/feuUswBs2Ienpq+08/a77zXTAasAqRJytQRAsQHiDQwOf+WiFDb4+LxPTwS/nRsSB0reEQnk5whRmiD+XYG6S050x+yAp7jrgmKOTedIE0jKnnUApTEqgaDxrJJICUxYd/yGMz9z+Bk77L7bfsVEQNFBpZl2rpV6A41mHbVaDV1dXejq6kK5q8Ncd/VVJ+CdFU91PT5//s1ZxiKYdGHmgHB4GTNu9JhRo0dN5R+1umGWP/LwnD/vu/+BJ9ZqNVL4C9CFArTWkCqD1sqfvIkmVkoiUQJjRo8Y9uWTTv3FrL9c0au3uVrp7PWsjjvxlLOSRAlJVji7hjiElrdiWYcLEAhgZQCAgxzBLYPgp46Jt6cWKIjewRnh218XRPtzviGnQ/pxQkJKA2M4yiyiBAnlDBUAgowbKYV3G0lIl1ntY9LBzylhYLImGk0BIYpoJo7rNhtNNEhnTNMU9XodlWoVXV2deOT++86Dy6pZI7305kpstuVW3ba/sOC5m3bfZ7+jtI+LGwCJN7SEcJJi8jbTdwLwKBABsH3QYADAww8+8Lu99t7nxCwtotFooFgsopg594FUClprJImBtd4UcZaicKKlWJDYe//9Dp31lyumwWXMvhuascOuu++tJLwYYxB1AxDdYA8CGuss3uCgDrHZaLwgo4Lm4c9MRUGupz6yxxiAHOvgfVvw/sMJcJaLOxYJKS2pOmQcSen8iTGY4RzZDpDChxZ5PmMNsixFo+GkQJYoCAGKXGgYsrRrNSeCl7/95stz7r//TD6Her0OAOjs7MLCJa8Djz6Og/ffF/c/9tyaTv3elCIjcQG/EIBKEphmCiksJqwz0aO3p0jIE48/Ou+2GTvuvH/abHP6XymFSpUXE1prEnsSxqcnWSgJFBKFQW0FcfBRx3znkgt+c/SajnblsrdX+93YdSbgcyd89VQlhXebCAnSpYLIBXE/f77sLulG1sd5fdw4fOVBGN/gmFQfwGejV0w+StLynbUWSglYK0KmNA2Qknyd7Nukc41SFzy3lELARP5IAMjSDEpJNJrkbywUIARgdObEo3FumGaziVq1gjv++tcTAayVc7YHevWN1157acSI4ZtwRCdcXI5UWYwZP24K/8ADsNQWGojfc9ddP5k2Y/v9m82mt36TRENnGqZA1o02kL6oEZ7bKClQLCrstteen7nkgt+ciXde2bXtHjMPPNxZkaTER3peyGAJT1n+OyfqvI+PANSNizEXjbjhO6UIPz1vt/kxQkhwukPYt+OfltLNIAAX+3cnJCBgDYf/6NzJzaQz3oFxTnsL2Ex7v6SSEtY4941LirWoNxpYsvjlh9BDB69WUmPWxx4z11/jmFcWLbx/08mTN+F4ubHBiHPnbzFm7NiNefzqkhHufeG55+7fcuq03dJmE81mikKh6PxS5GSUUsFSCIyfTGtclCCRAoMHFdWnjjr6ezdfdcUXejuxHkiedOqPfl2IdD8OvTmQh6QB5r4ydih7ERcBi8hZluF/Ft+c2CJXwwHXhlp1wQC4PBCVZM5H3IuMJiGE0xPpuAQASAlp4RJCBVx2hGWu7vaglII2OqSIWVACRAZrDJIkgdUZpYq59K5GM8Vj8+f9rn3IMGy4+bA1nterL7/cl9OfZ7Q5XlPChLu+pN+SJBs+YvgEHuwBOIh0QKZ77rrznM233HK34HXPXFwyy1C3LhdMgUJcfLWtK7sxSqJYUDjg4EOPufmqK04H0OMaDrV6V49nsMc+Bx0xdcaMXaUUvmySXyF/L2jySrXk9Hm+Ah+ecxGNaCcC4NxU/t4bCvlhfaZY6OQ4YQtrZM8B4JzW/iaxcUTQdQ9GxDbp/GEMjDdZHPczVrviKiFhpON8nN7lAGlgkRHDkD6DppFq/dqrS27oy/m1FYf0Pgh4msHnU82ih0QIgbZS0ePOf3i5O7r/uuztt5eU2trXc2EhA60zGFNEUpDQWYYkSULUwAJCWM9xEiUxZFBR7bLXPl+47fqrz+7LkROpz335xO8z13PKPHO2KFNZusoe9p95twvfacEp9I5yBUkedS3cKdIFYyxa9A2IHvT0rvl3Nj9GiBA9kdIVqfN3zA398QBBgaRBgUNaeqebHBeg0ATWuvm0tbCpoegQx56BN1574wkAK/pweqiWe/daAPg7hw9d/iA8x2flItZk15SQqh+bN/dP4yZMPC1NHRfMtOOE1hZCehGBAAAs+bSE0C5tK5HY+8CDTrjt+qt/htDX21N726Dc/yPHjMae+33itE0233wKV7Mp6URqXv+DFz8yEsfMLehrZyV6kezG+JtvLZIWy4Jveq73C/JgXB3FY2MO2JNBYmwY6NPHfMpW7LuE1wE5u8afIIFPCgkN5jRAUP6jsdbNq0kXBCyMFTBCYunbS+d+/BO952fOvfM2dHZ09DoOwBu1aq1hrC054zAcj79GtgcADh06tNtM8x6Zd8m+B37ytLSZOj2wWITRxhkjifFJloATKcYKSGGdspsoFIzBxzbe8GNbTJ3+KQDXx3M/Oe/Bng5+++NP/Nb3XCE5uU+Y+3kUhSKffJq8Da4V1v/QM3CUBIwVHnBexCP8oFWP6yutCXjON9b9S1YtjHXXNIisKDMn2gMnhVrigtI6M8bSg2pIOghJaJfCJZOSAeOYpIAQCo1afVFfzmvqLnviiQdn92Wo7ursXCHEuhP55Nj1BMr6iZM+eqsJee7FBc/N2Xrb6TtxJCQrpCjYojNGjIaySVAyiQMq5Z7YglIoFQ0+ecSR/+/KP/z++l72Nfwn5190WbFYSDjTWQDeAGFL0aXPx8aF9X5I5gKePGeM/mddKgJfzmGM7q++EjM2E/0fv3tVMNIJbRyhsY5bm5Z8xFxiLD2EUgA6Oh+n/1pfLSmEs3hZUrFFw5V6xghAKAhV6BNbA4ATTvr3Po1Lm+lyazGRj1kQF/dXI+KKHoAbbvSxHieb/8gjf5iy9TY7BT3Q+GwHnWUwSQJLKVC+pxmEC8AbhULBYLuddtz1yj/8fhcAnu194dgv4rFH5mFldRWGDB+J3fbZ/9wNN954EykASRdYiBBbZf9fQITwT5cHX/jGnWqkvMVcrpsuiKCbtVJP+l9vOiGDMNY/c5KxZTTnA/JBOWbB24hTU/hDABBSwGgnabhmxIlkxwBckqwrWGLRztqXs4qdBIBUUEJ2O6LVUZr2uRa+zAZha3Y5ZwAxBSNk8eLVTXZts9n8TZo2E60zys41vurL+GRIEfxctIMkUSgag/ZSgv0POfSbV/3+ggcBYNvNu4VxDjzsmC/8S9zBwEc92AoOGhCdEL23QMExheCktVZ4btotxNEDrQ5sMeh6Al9eSEYPAZyy3yJFfTG64NAa6XhcO8zn2I17x/tksApAWAFLeWLBonbbLBVIuUQmd10MACEVLFBa8xUJVCn37LXogar+UOkEOCucpRZTX+C/7O8vvviQNS7LwRgbClGiBEp+Ul3mBqc9SRSSBKWiwn4HHng4gM17mH+rs379f5cnSkgpLJSw/iBzbpJIHIkcJ+Tnm7lcJK7i92iHPiphwwyrY1BrAl1P1Aq+eB6/v3i/1JvDIGRTA5HOCDYcQto+O6I1idiwj7jsgK+FyKktlj64d4m29kET2toHoS+vfMLtGl8NVgPYEOFzE/4gHHkOuNkWU7A6eurJJ2/detq03TVl6WZaI9E6GCNkXUml6IRVKK5JgDYUgeFKHfH5L3y32Vk+/tUFvoZp3E/Ov/D64cOHDoc1xPmiWxm5GGIPXxCjrhlHKzicS8LEimK48XTyHPeNd2fgQm49gc0CaFILtaIM27rtO+zCNyOK3S5MvktCdFyt9cWOK5KqETdJj86T9QwhiO9744q9BAJG87EKRI4pKKUwesI6G/Vwuj1SUfW5b6bmJSmc7gl/VfihYvIAXPLyGo2huzLNFVkuFGcpQ5fFsQCXNzoflQuoS0hlIaWGUgafPe64z//p17+5D8ClAGZ+77zzfjlmwoSNjNGAsEh8Ha0Dj3c6gw0cdz75m+4urReV/JRFnFAbN0IIF03IGQPhDfHD2ZNITcSax7Ry0hyXpS+d/uXAFQwEftYc0OJHzL1FqWYsPmPxTORiwmGnfBmkkiFBINavpcLE9TfY5vyzvtd6v3ukL3zphD6N4wP3erWA81d6x3gPAHzjzTV21ZrX1dHR1T5o0FAdA5EkhmF3jLXk6HRKLqewu2WtgCGD2+R//Pi7FzYbzf9LbSLrdZfoyrW3uSfXcz6mUBxuYcOTDhBrdyfN/8dkjOsXo4TTCf2kcc5kCxhbxSfQPY5sV/Nu6MXXh6+96xEYRJXjjG5A0P2sF5nOcA3XGXAgdRlYsZ5IICa9nCNFwYhhl4zxBynovqz/sU0mAxiOd9fYqJVcAErEd4/eY6c6+t6cKFu08KUHxo6fcIAvM6SXYcdmFCCPRZsAIBL3XyL5ZhRlWnOrSgphvdHBPEREyp93LpM4tsaEsAazdiGpTiMSYWCOYr3tYb0oCKE6P96Sa6YHrZg54Or0wBiAFsECjoHHD6qxrmbY60I2KmhnX4U1/vy4/QcNCP8Tp/PPmv/O+pvMwOS0MCGDa4ax0VYqyo0nT9kRrtHkGqla63PPoyQ2GmPGYVtUDQ/A3ff8+BpnXLxw0d3Tt9/pAC6Y4RO0UdE0n2z0AHus8CsD3wjK9uB3IYhT0Q6tU80FfxahJQS4/ZmgkJTU5FhmpZumiDijC787ziklTxEg5eEfydcYeLG+18olY/Ebc7yYc+lc0yKLRArXzYCaHMUGiKYOX+w/Y2BxH5lYZ/S9Yjz4mGNywROVhlrrrjUCaAVcE8+Nt9hyJvoAwBEjRvU2hGmwN4JEkEoMPi7MByIALvr7i71NOttVYpEbxuarn+IaV0WiM66RsHDgSzWQZk6H5APxRgM92sYGDiHgAC2Nof5+rN9Z+EfZUNs0ArKwASJxmr61zsHtQOIUcnecgaMaQ0kLhLgYfK2ilolDayzheE1hUhbyXImsXlfLy50QgnXLeqA1cRA/4hw0r4luqIX1JaC+BQjrmTb09Mt5BiJ9cNr2Ox/yx1+d+/96A8DjAI44+qjehgFAO2eoc74iZY2C66GZPACr5V7Z62Plcld10ODBg7JMI0tdjqAx1gPRRndIiVB5wmIpNUCawTu0uXCFLyIQ+q7E3Msp3gKSfF1ezMdKOQBE20Vgg4B0JZBKSgKJyyS2zAVFsIgFySspndhnhT9H1h+WJ22Cb88B0ARRCYT2Gi0cL0hX7itjPfe3Jty0WHQxqPwNZRD6pkZBMnGXBsPdFbz0Io3ZAutOmrQJgJ0AzOkNBKW29t6GAMBIRQBUUgEkfRh8XAcNrF2H1ObLixbNHz1m7O7upCM2Ty9tNLRJUFB597AFkFl3k9IscNG4bpafUFaNpBA+I1gahw4TZX9Y4eLOlsQUh+uYKzI2OH2J23EwB42zjQ3xQyEEJIEdrGpG08bn42Wu8NKNjDFuMERqBuCvFXMteM4Xz2ejJuYsJiORi8BFDc0Vi+Hwynfe8i8dtrFOGkSxwfZ77HPCrCsv6RWAF/zXz3oFyrd/dPZoXzAWVF13rY1BlgV3jgfg9rvu3uvEr7+2ZN7U6TN2T9MUhWLBnyyvFlnwT7lrhwsE8GUGSFNLCzxnJLqJHVtE4hgeLE4ESrAPnTmWIMBwQgHAYiWyfqITFlL47GhOlrKWuSVb3SCQk9IuQCAn44TmE4IzToKSben43XsQewClQXGaFAPION1MSOFBwHo0x9Vjbhc+uysah7O8Vc3cN8cBTdC9wPqhG+u4JkdhgBm77nH4rCsvORHvvhP/4KHDhw9lDhj7iwypXT1ywNdefaX7VN3pYa0zap5jiK078CUmqtY3rqaVxVxmgDSzSDONLE3Jmc16Ix+c9pwPgPf9Gem4iKCKHE7BcoaJ44gCIB9JJPN4EhssaIC4tnfI8lgHcnZra8uNL60zfnIymPXUkEZvGVTRzXf6nQ5ZLrE8RgwuFqlRN9QIcDkdkMWzDV2zWIz7uQAqCGcDhDledHxedIP0UmDYiOGjJm26+Uz0kppfX9nrItsbtbWVhFRccB/Ow1gLnWl0dXX52hMPwLdeb+090yPN5R4ozEqdHqj8RciMgdJOD3IFNy7rN9UWbMRo7XQSrSOrjTieNzRAd5fErxXsOnE3mA0HzvANClcQbTFA4m3OtcOyVQAiGDgGzoPvzgcehKxjBkBEIjRS9tkA4EiM7+8XiVQ+oLgjqlc/GHSea8Xgi3XAWMyiGxC585V3/RiT444sgsP+LLaYNv2wu268Zo0A3Gyzzdb0NQBMKVLvHtbFeX6XpJph5fLlntsFI6TaJx/P4o5VK5YPGTJ4NJvTWmskxO51pqGUptphSXqhde1jtfbNdbTOXPV8JIL5wkohfISandLBpAdgXZq+gY261HAv5livoYIYKbyBAw88vrkgx64gkUz7o3b6gixbIQL35UcjblLJQGJO5w2y+GAiDsSHElwmLAUCdwoAbNXzaHw0lg0Nd17w4tcHC3rSCYkbQUj6vcBW07c/4K4br8k/xS00cb01FyUBmFEsFFwugFReRTI2NCxa9vZbvlBtbZdpsG+8/vqTEyau83FNTWi0zjxnM8ogS1NXsqkU1SrAAS4NcWRtTPQERzeKtT0bXwHW/6wvgGJ3hUHP2RTMKfOhLeR0Kw9qsE+Q9y18maMX6izKvbOcxTlbsRZx1CK4Umxuv0EXZC7GotDE03b3DuRAmBfTbBE5K1qQNWyiuZ1hlP+9259AsMphJUaNHbvuiFFjNsUaGo5ee8XFawTId374091LxQJ1KotWANAGaZah0Whi+dtLfaNwD8D9Djp4jRMzrVi27GmttQMgs3gGo9FQSJBlGsoCRroT1to1WXRAdfqjjXSm6Ep65yvdcbdZwrNyKlgM/sXc88rGidsgg80R3DfRcC9i6YFQlMFjEIL6PA6A72jARxuLYbbkmdN5P6Bh7TKY00G0clobzWMCBwM9ELmm5jEAWSTHnDUa5/XOiEPG1zyfDOEUQWEFho0aNR1r2fE2oiFTtt5mu0KxAJU4BqRNRnqmQZZmaDQaeO3Vxb6Dmgfg60t6LFzriZ7QWeZB59LIQ087IVIklu+IK65mv5+zfq0PjNvo4rPR4Z9QkE8OAKwMXAZBF4yURuStZPoZpL/hsPA9AeHDHE4HbDabUMp5La2xDqxs5bIFbIPbhmeP8deqg/E+mdOzQWY9x4rAGLtkPFftievRfmxYEiIHPj/O+HFxjxZ+MIJPslUnFNhok82mA7hidTc/ieo5eqD9RgwfUihQBzILgDu6plmGesN1XXtzyau+7ZYH4KsvL17TxDE9xiI3yzIkOiFd0EBpjYzA4Pojh67u3v8Xte5ihR5AkHPkfBXki7MCrIiBLQrhQ2ktOh7ddAjpxSAHdzna4rka/TFWQ1EnVWsMDFvhLeJWkmuIRTvQwgH9fO6mBwMo0u+8/heH1fIGjWn53xsqsUHCop2Op1WfZCs8cLuozyBxam+URPsBJMZMWGebNd38u274y2q/O+r4Lx7e3lZEQh1phWVjk/rQ1BpY+tabr69ascxzWA/Ars4+ldwBwDPlcrne3t7WpiknUCeZS1JNFKR1LR+kJd0NwceljSHOqT2X8xfaxz9Z9LHgijiRDZ0BnL8sJEHA+/Ic8CRZstKEyEjQm2wOHG5vNL8I+6OJIUAlfcL9Z8h5po1rvsj8OOZaxj8Mgat5V6CNjQ3iWF7ng5f53HXeRzNiXZkeXtavIJDT+9gS94D0/knj7we7Z9iLYEyGsRMmbHHhuT/uKxZiGrXnPvscUiwWXIcuIRz4jLMLGo0GarUqFjz15E2IlKZ3slZc45VFCx8ZNWrk7r6drNZQOkOWUoNFRRearqWxlLpPhUzGaLDbIVa+SYayPHZLZ5HYNCYslcXAdvoeAVkI79h1qUguUdXAeG4aIQLstGa9ksHueULAD4XjRAQ+N4AvMh868SnwElyAM2oMIv0MCMBDrNeZ3APgn5XY39fTA8QGGWWdOsBRy18bA9XkGAFzUv8wwP0/fOSo9eCaW/boFsnSnv3UMz958EljxowcUkgUEpVAwCI1BjpN0UybqNaqqNWqWPjiC1dutPEm/ncegDvv1nskhOm1V195cKupU3d3XC/xTmn287gLT2ICLuzl8v5E5BIIT72wLGGji89gtAaCntBY4AlrqQ456GjGCuKEzlTx/js4UcsOa3f/AkdwXUllXrwiHD/tMLd/LzrJ98PHwIcOa/zaIqwPuuNwRpvgNg0E3DhAz9eFQWe9QRH2yxzd5ERtcGjHXobgJA+GCdfy8OPH11wliRw2YtTH4BZBzNEbryxeHSSGH3b0Z08qlVzrZH4gdKbJ8m2gWqli6ZtvvL7o7y/dG//QA3DhS71mw8R0t86y72SpU951kkAnClmW+hsgfLtRSRfMdVPgXsdB9+GbiAA6VqCY/VjNfhO+PwQugSCBpUtjAiidRUJIx+m4XtYCQZYCACwtscBx21ifBNhQYdEZNgcw+G3MafzvWAqw3gf/8Lm8vCCGLQdnwZchrx9yBo2NtxFo4+wXv/hhLHoZnLHoNXEmjptTGzKShMaIMWM2Rg8AfGJ+91DxxptOxr4HfvJH66w7fmQhUdS3x9UNpVmKtNlEtVpDpVzGU4/OuxAtDQqiqrhF3SZfA91Xr1WbpVKpaLRGpjOoLIGQGYQQ0DpDUnB9kPkiu3JOHYHPRKLEVfg7NTiSyQYQ0sJG6VVg6SlCLbJrZabdNkHxXwBg4SoEDHf7EYH7uZ1n3ukcHHFB/EZMLoItHUcErugXxGXyhkrMMa0O9brB5xelZzMnpWiTs6Jl9NAC1keRwljP3QyvUxeBL1dOYb3rCdzn0UdlBMaOX2fSWmBhy88ed+yJbcUCrUYgoDPtuus2G6jTAjiVcmdz3pw5/9NWKuZ+/E7XC64uXrRw7lZbb7NbmjbJf5ZR3z5XR2k06SSkpzkLTIMX6PMWKYsmwZkwUTIeXPNFQVzSAt4QiPUlTmR14lxQ4yib6zLQalS4jxae71EkhB2LDDyARSoBzoeWAgADgIis0z3917H6wAZGDnzcRcaCK7g5c9p1NGA9z7TojsHKDdwOEfCCMRI3DQ9GCoGYDoufm6SYrNt6w6+48H96woE44Wsn/mL40EGqkCRQbvER17W/2USj3nDrjnR14sn5866BW+43Rx6Au/WSEd1Ki/6+8K4pU6bsprMUWZZCZcoXEXEnVZZQJrpI3pVB7SIARNyHk1F5o0AwFkTOaOECbAvhfU4AvDmhDSdDBDEZJDtxQgunIhCrC/slLmOiH3njJHan8MxBn/W/9eOC7zDmhuE9drtYz01Z7PI1jfMI2QpnEe/8scjt1xsX7G6Jok/1SgWFYgl+bWJrPQAhgCFDh41vvd9bbTEVhWIJCxe/gDRtotTehp122evL+x90wMy2YuKbHjWbrgF6o1FHrVZFuasLtWoFTz46/7xRo7tnVEc64Fo7v2c769dluHDDbOmbb4cMELYCNYtGFhPWxreWZTFtYN1RBPvUkn/OApDWd0qIl7vyuqPUMEb6+d3PBPmeLb0LCOJUUpA+yXfCc9pIZAt3HBzl8KJasLLqNscREafj8rRhjFf8iUQEKNjWhFMErmu5mAk5A8Tv2wSxHAIFEbczFsVSmxfNwZBx18dagbb2tjWtNcf0sVPOOP3n7aWEoh5AlrlYb7PZRL1WQ7lSRrlcxuIXn58N4OGeJgk64KK10gEB4IGOlStXjhk7dqTOMremiEqjVg/O8GBdzVtiiJ9SWmmIuIxfkdI6V0qoK+Xv+FYBQjtxJWg5A0kcEYAzQoyAFdoZH4xAWOoiAG8h80PgNWPmeN66oT+W488t4pfmtvwPAc3pZQwiniKwmRxnFvAgY92NEwncdwRoBmnECa2F53K+CCs2Orz7RfuEEWvZRaOD75Cc/QYWbe3tw+Ib/djds1vvfftPfvHrS8ePGzVEKddA1BqDNG2iTissVKpVt+pSV6d+YPY9p3C1ZCu9Ux0QABpPPf74tXvs/fEviSxFphREqny4y92XKK0e+QscxIQhoJKTWXP1vMt28dkwUVP0YHh4JwlygVq6mM74AFgw85FYC2olwlY1u14InN5AcqDlMsnuIpN/E+kGCGINlkUp/Fw++yfSJ/g8OLU+EgnQUc4fH0PQ7YL7xq/YDk78jDicCb18LHFJdgdxIrAxli6HRZIkOQC2kPqP7//40t322GWnYoGzXSw1RG+gGYneSqWMxx+ZezmA+aubzANw4joT17DPnmn+vLkX77rHHl+SMgtZMDKAjdvm8g0OKfEgELJI0T6vzyJkvTjnM4lZugVxoY5L1wd9z/uFj3zIHMjiImDAcVICZfSQsLrgJqORHtyOfcax22iYP28bAxDwD1RuhXRGC3NmIIhdBG7J3IrBGrtucj5AtnwBxC4XD0AKg1r/PQcFglOaC5+lDKssyUo1PtX2M84+99IDPjHzsGJRQVFgIEubqJTLqNfdKlsVWvCwc8WKyuy77vx+z+hx9G44IADc9+rLixdM2uhjk4VQ0EpBS9eew1iLRBFofL86GXGESFG3TgRKSm82BCD3OcRvRY5rgFqUOfBqwWE7972AJEZIwtFymws3l9WhcIkxyvoeonE5HdWL2CBa4+9JQ/RiLbhtQBwu6L0cVmNsB9UkiHBE2xBx3yD+I/BZ60V1MDoCl/S+P2socylYxN65bdzqo+1t7YOv+J9fYfy4dbHLx/fikx/85W998/o9P77rvqVSwbtrszRFo+6SDBr1OiqVMjo6OlAud+Ge2289E8DCNQHIA3CD9XtNNOyR5s99+KL1J006V5sMIpVIRRCVriZYwhi3RKmgInYvrEiRDl2ebMS9Qu1G3NAwELlQrCv3VNHKQ9ZaH4KLFX1E3QIcB+XP8awtDXTYCZgbg5xO5j0o0QgBePEY9GDtx/FV8FWAEbhjMRxbt/weO6jZ/5dmGRDN6X2CNiR+WGtgtaFk4Lz+6BRpCwWL9kHtwxFa2wDAJmee87Prps3YeqtikoDPQGtNMd4amg3S+zo70NXZgcUvPj/nicfm/6qHG5cjD8D58x/tbezq6KKZBx30/SFDhw/WIoPIgq4FhKbiFob7NSC+VWma0kqXksaTfqedDuasU3KbkPvF+wWF9TUkLpIhfQgwJDUwiTwntS0qoBeH4Wa7h6JHVujFq9MBbQvQEWX7hEgzGy/d3TBhn+5cgvilnSEGVvzS5GQG2NBjdw08t/Mi2DufKRQHFyCIrhCEEBgyZHBp4robbGxSXQfwL+ec/98njxrtCo34ImRZhnqtgkql4nS+ShkdK1di1apVWP722ytu+stfjkEPbZlb6d2KYABY/uSj86/eabc9jgeJQpBPzwKRWwawlKLNJZFCCLduLj2dztkKAMQVrYCRITnUkntHsh4oGJjOCvOdTlkf9Fkz0ZwiWKCx+AsJrw4AblVz3kUoYbI5FEaGFZhR2mgfkfFlQ/ZxLp0/9zn878ewWAa377AtQIybAiDSD4Po9d9Heh+Lb8D66wQ672JB4dSf/vTJSeuvWyqVlCj4fj+O4zabTVQrFVSrFdSqFVTKZXR2dGDVqlUod3bi9lk3ngxgUV/A4wE4euTwvozvkeY8+OBvt99pp+MtGRKB9dCC0ARCKw0s+UFc1Rn38AjrZbjrIH2HfOEWQ/NrwQnAr7cgSF9k0QthAiC1gVIqLwat9YBCJGXpUB342JL1yiJxwYhjsn+yJ8eyMW6/MTCZebIFm9cfI+dzDoAmd4DB2Mi7s3LFSVHs12rTAkCdj4YQYOMkCH6oC4lCoSDbSiWFISUFJVxTgWZmUG/UUa1WUC478HWVu9CxahU6OzrQ2bEKc2bf/VsAf+ordt4LDggAcxc8/fSdk7eeto8QWaRDWVhlII0EhAzGBYibqZB5DJDYlFFIjB3FwhWMS2o8461pkOFAcV7tF84JsVNeWZxXgQeCVZnPcAacmO7OnVgNjMf7/oPI62WhDJMPjjhbDDAPssBRvbEBtnxDBgwg4AvbvbUbsmFiY4OtY0OrreeTEFp1QsunHaQJ3HpyzUYN1VodSrQhUQLNNEOtVkW1WiWx6xIMVq1aic4Op/c99+Tjd/z1llu+vjbA8QAcMqhPLRdWSw/df9+PJ2+55T46i9piZGRoyNA/MF7XTVoVuJe1VEAuSL9z8pRrS13HIwlBVnHc88X5GyWEIbEpRQ6kvIJQnmsBrGOHJNQWoyWiYItEOmHkjmGRqY2mmo6Ig9Kx5DgmuTDimo88F4zdNgQ2vwoSvBXnwRfV57BuGGK/IIBqb7jwcZA55iUDL3JYq9VR7uoCjIaUAmnTJZTWajXUa1W3xnBHB7o6O9HV2YG3Xnt10d9mzToWwXDpE71XHBAAZj//7DN/23TKVvtpERaEhoBbVhR0I6QTve5/61cLB0AOXdLTaLsArQMSGQwsitnH6PBp/W/9IkpkTbux0lfks/Xr7qHNtf8FXBWfX/wmMl4gWFEnEERgDS3WuuuInL0Ny/ovPAjyXK0HUWsjZzPgrVc3Fl6f01zm2qL7sT4Y93WMQ4VCcNWWOyEW1Y16DZVKGdZkEIADYL2GWrWKSrWCSlcXuro60dXRgTdffeXxp+bO+RR6SDbojTwAV/Y9JX+1NGvWrB+evPnm+xkRugEoawGlfCNtaV3Uw3E+J2p9cgC9Syk9J5QEUudCCXXCEPB6pFP/OGJMAIsMjmBIULSF/xcEEItcjh7nCMbGEds2UewFzLGAWA8MDm9vzORUBkocsPFvIh0yAiADxjWCSniPzkPA4w23ugigZZAxKMM2zppBUAMMhTONS+wwwiBLm0jTFNVKGVZnsFaj2WigXqs58JXLKHd1otzVicXPP3/f0/MfOai9vb3PzQNjei85IAA88MSj867cevr2R0EVwWkETF4MRSLU5QwCrIAE0BBnlNbFdaXTA9lQ4dw/vzwY3WC/jCtiDimo4TlxIoE8jISAIO7IbhJBfh9jjK9oi5eD8DoU63i5fL5Q7WcouiOsCNyLWGg33x7yRgi3rHP7D0mmfiXKKMYbO7G56jA2UEKtcNBPnUYhIGibAQBtobVEvV5DtZpAZ6lbH7BeI8u37LhgZycWPPHoH+c99NDXR40a9Y6XeQ2tOZb22vOjT3T51dectPnkyfsXBw8fkUUXisN03H2A6ywC2LjfCwIwrYXWGZRKYK3TT5xIDWCVkpsLSVeXrFTO0lWcFMt5CoIzXByxCwb+MRDeSOGlIrzvTEqXJCtCQVRsyUYpCd7YEBQCtHAckTlpvJ6udwTTXN5Y0Bz1ECGzhcZqo2m7zkVAvPhlLspREs0ZL+737NbxznohAO3mSEUTWTNBrVpFow7P/eq1KmqVMirlruyxB+47adjIkb99t3h5rzkgALx9+223nXHIYYefnxqLFIBSltwpLmGVDQzrxSoZF06uUnY0peFbwBpaCdJKuonOOHFuEbdYoRXagYcTXcHGjfZgBdilQhYwi+JIb+PcQOZ+QLBUhQ7/e9eK/6E3WN2/LXUc8cNmTXcOGhsgrX5DC+RcKOB9M4frFlaLjQ4+lqgThTtAenDYDCFjxApoWNRqVRiTAda4zOZaDbVKGcvfevPlRx+499hhI0be/16AxQNQmj634O+V5syZ89ttp009et0NN94108QJpAKsgpHEWbhmxAJWOPEnpbNktXAFRrw6krFwzSKF8eAR3JLXWs9VY91PwDodz+tv9D097d6Ioe/o8tP/8DFrL7atfx4CWf4TZLqv2W0RsbmyUISKNZ7fj28BYVzvyxVtDMrY9xcD0Bs2La4Z2FjFCNZ2fELWuoe2CQ2dNmCMRqNeQ71SsQueeOzChc89c8qgIUP6vGJNb/SP4IAAYC6+9IoTzzjtO/MlEmUML9vpgGiVC5l50UsXBUkSdD/h+rOwIi+kC8GxceL8OJSyH8WQgaD7STYaIoXPj0HQQ5mjsb7IZNlX6DkUgzF2MjsDCS1czJ0uC1AGVQCApcyU4N5BC+ha9EPias7747ZpE/rPxHXXILCHWHGw0OPjd9LE5gDtOLSG1RqpNUgbDXSuXL7iyTn3Hz9i7ISb3kOMAPjHARAAnrj5ppvP+MSnDv6p4YaIQkEB0DBkacLrcMYCwhgS0ZZcK9KvfSFscNkIS/5BDc/xZBQd8a4cErO8VBUPYD3Mu2IIJjJyCQEgZBCAbQBkzMmEENTTJW/RAvBWNc8RCocIiJEeaCOAOL3TBrBaFqPxu4U1OiSyGhbpoSqOjY5ctCTienkr3AERtHRYqpvImg288fLCu5977NETBg8ZvPjdQ6I7eQCm2Vr5D3uljpUrMfve+8/ZasspB6230Sa7a0p41LCAka6BtJCwVvt4sdYakJZ0OgdI6wFmfB8YKwS5XeBTvXSUa8icLQaT4aB7pA+yrgdyx1jtuGrMBWlgcOt4UEW/5zG0OHTuezBzDCI57ojvndAMEP/Z/dIXD0VgZIODu7G6OSMrN8r743lDOSxYqQArrt4gEYDJXLZM1qzrZx55+IyFLzx/zrBhw3Kax3tJfV8q8Z2Rvf76609MkDUF6AIYA1jOytD+6UXOknN+LUsxTN9T2us0JnrKXect7kjqFXKuKOPP3JGB46KcHUKtQgx37sq0d22EHjZkALT+xrgUd52lfn+8j3B8xnEq7qejs1w8tlt8lkUpNRW3JnIgU3cJE51rXPFmtXbH77keW858DgRQurYwBlypaClzJstSZI1a+uh99xwL4GdoUXvfa/pHAxAAnrr+2uu/UZSAsBquDkHTTWkNjluftaszHbknoqTKWOlmUOro9xFowvIR2gNVt4CPL3wuZ84YWKvDHNrm5vFjWL8id0im0wjM4cGJF3bkJIFWELKjuGcQBhHb3acXrOCcmG3Jlg4c0OYeEF8jTOCrdXa8fvfNN+yJNXTIei/pH6kDxvR/Dz/0wPTtd9r135oUBnDuEqcEC2FduC4SZ063MrCs24FEBQRCSzY3FuAyELJc2Skt484JNItPaSNRST1ngMho8KI1ymq2oaqExWTQDSNjIQg3P4bFJotRCsF41hLCa8HYsCQTvdslEtFxtMSrD6xfEnfjY2JAI6oB9jpgVHlnjUG1Y+WS+2+/dW+ZJGvVJuPdkAfgiGFD1jTuHVOlUsUzzz6LZ5599puT1l9/2uh1NthRc+sJcG9nQzFSqoGl8JCznI1zwUhJdbwWUkhajYn0Lm8cuH06I1hCa+v/96awIZBFeiBXlPH/8ffB2uUouw26H6t6bEnG/9NcOtPeKgf7HGOgWoRYcIvOaGJQ2+DI9un21gKttSG5z1ECgzHeWnfWLjynhLWorlr2+H1/u+NgAfS5UeR7Qe+HCGZq/OHPl30Oaa1LCdb5TCQqEBRxfmK92IH3ZdmcqAqefv9bFtveGrUeM0DESeK5ybrsprSzmGJjgI8VyIthEycPRCEzw3FlDr1F7hB/DKHbVn7JrSiUFolfXiqNdemc75As6zgiEvrOsDoTOChnT3cuf/vp+fffuxfeZ/AB7y8AAeDvN1x73QlFaa0UVB/CT7J/euPoQ/7i528M6UnMNSJV2Ua/B0CWL8L/FkEcgl0VgWvkAR1lD9sAvPx4A0Z5/Fuem1WOnPsGCHMicGrbchzdwBhxLRuD2XK4jc6HnyzeT0RuRQuaI62vmnXDDYfjvV0ts8/0fgMQAP7yyEMP/KczSgycEy0vOnI6TcvN4O4Kcf1D7NsCEF14MBpz3NEigJi5noet4bYXgRvFWSZBz4uPC9F2PpSwnfvxhWMlrst6aHx8LQfux9P21vxBz7FtdNyRe8YTB3m45hmAMGntqssu+xTeeU/od02RH/C9C8WtlrIMTy94Hk8veP60MWPHTZu0yWYzm9qQqh/lEDJH8BcaXi9TSsGXsFpEsdcQzfD6mVO7nI7I3apEdFM5N0+IXH0ILHMo9lfH4OBjFNGAlm38mRNeW6IxHnjxDlvw0g14nqNZD174h4RFe5iG62T8uSAfdVECuOuOO74L4D2J6b5Ter+s4FbSl11+9We+/KXjbh81Yd0dU/IHQkgIxS02XOJBYNEWsKFfjAXXUVt/dR0eLIGOsgO5kCNae8RaWsFRhBvNEQ5vDLCDGghzRJjhWHNcsx64TgxCm7vx8enwh1YHtJ/Fhu/53Vu1Ihg0eQ4axG4oGwjGC6yFFBYv//2FWx599PFf81G8+fayHm/UpInjetz+XlF/iGCmzquu+stBlY4VixRYoY78WezAtZGiH/n74pvl70MkEsOdDOwsgI24YlAOw3doAUAEgsC5WnRJv5sWVcCDAX7uwO3y58Cbgw5K+zXRvqxLMhW8VBmpJ93UF75+njuySuPEdKPS+cbll17xeaxl+vw/gvoTgACw4ubrb/issllDwgDk3YdtsXQ9OHWIbtgWS7UVvH5bi27lARqFxGzMZYIu5UWc6YZ0f2O9YRLpfLF1HrhS0PdYjDKI4EGT12vjY+Jz4gxr0/rAtjqlvfslr78WJHDNX675CoAV/XC/u1F/AxAA5t4+6+ZPS9OsSxgYWnkpREbiJb3cTcoyCjkZXn8kpfTzfJSBf5eLlMRgbbl5htLVY9D7MFXMZXIuFzKiDFetRRzJu2m6H5O3sNE6F/zx8VrMNgJcft44QuOune/XbS2BkHMI3Srtzz7x+CUAbuzne+6pv3TAVrrl9lk3f+Wggw/9o82McyALRUvXu5ImLrMUcE5qDbeANWfIaK1DFwZOOKCaYggBTYse+l7RANzNF8FFw5p60CCR06kQFSgRMwzZNNF2/0u2hODlcFD98i6fvNuFjw0efP4YyJEel2m2huGC/zKIfSWARrnrjZtvnvVNAEgSFR/NaunlN94C3gi1RptNemctXFZHHxQAAsDFD98/e8gOu+x2Xl1b5dbZpfXghPTd14V0PWZch1RAWOlBZTmCIqhfoAyhNOGNChEZyaTxdbNkCTwhDue2cySBh8Y6oB/nv+oOOgRdEwhF4bk1Pfg3EaC4mN37PIkD+/hyCwBzXRUAJBKQOqv8+c+XHIoPiOhl+iABEAB+89jchzqm7bDTH+uZUZl1WdNGBG6iCGBCUI2JdW4cISXlDVJTImlcyla3RFUwU8y5R7oXqQdyFXRuLbW4EWSeyDZmIADEIkUeiPRdrhQzBhCNZEMql2oPeJWAHc8hLsx6KIPYLfWtpEApEbjtpr9+DcDcd3l/3nP6oAEQAC554eknR22+9dTzKk0N7avJnHjNjCbwGSc+DdXvGu1ixAxOcp1wl1VOOGjNjg4ll5wFyEIrAEyEH7TEhMP2YDDEXC6Akik4xK0HTGzRRgPBS2y16p6Gkw0ifZO5JFvjQgBKWJQSiUceeOBcrEW7jPeTPogABIBf3XvXndVd9tjzNw0tihnpQpZS+K1w4DPGFTP5ppjcJJ1W6RQQURVbCwAtckXxAAMykritiamxj8b7ofOuFh8R4UmAyPoNn0P0ApEVzoZ10AV9PqIN4M31AYwAzSSF67VYSoR96pG5Z999z73fi0/h3dCLL7+S+3/86NHvar4PKgAB4MLb/3rL0v0PPPDqppGFpjYwxA0BFq1UVE3cztXwSnAtb0/1H4wwC0ByJg0iIHpxDWZg/KdHgyO80WDL+lq0LTZkbPhRLDKtDTOxNQ1ESQ6I3DURx2TLmbUJSbUwbQWJxx5++IdSyh++N7fjH0MfZAACwA233HTTXnvts8/lpbYhGzS0haH6CytcDYfV1td7eENERK09KA0q1IqEyW0L93Pv3cchSmJ3/3l3Xu6f2Bjx+l5kCHu/H4+OuZgJhe3e9xgbHjkrOa9nhqJ8QEmLgkQ69/57v10olM5b6yv+PtMHHYAA8OAtN944Y/8DDpg1aPioHeqpa21hyEp2+YORTcteDxNKP2MwySjBlXU3pSSsv//Cc5PuAisGYR6UNv+HXCV2NeAMRkaOA3LMmbkccz3+qc/+cVvC4k+ue0IiBQrCNmffcccx7YPar1nrK90P9GEAIAAsu+euu/ebscP2l49fd4ODGpmhREwLWAYacwQHuDgdKU5IjduqhY4IoSZYSHbDOMpbu4FLsoEbU4/GRut2tyHHwWIAcv9mJWV+LjYwWvRQ1luLSgJpfeldd9x5hCoUcgsCfpDpwwJAAOi85557PzVlyuTvbrPt9B80tUgyHaIPoPpi4VzVABBS6y3A6fzBcA0iWlsTrGTjf5LjPkDgiuH7Fp2QqBWI/nNsjMQAZcOEIhtSAPGChZ6LizAfe5SUBEqJwtI3ltxx3z2zvzB82PA33uH17Rf6IITi1oYMgLPvvPXWPZvVzsWlgoKSBCujvXiDjUJfhnP+0GJtWlekxEVEvmgpWlibe+/lwl6hwEhH1XNGG78gox+nKV7rC5FCN6tcDNfHjqMV3SmT2T0kwa3jnOzuVVACgwpSPz3/kR/cf/e9BwD4UIEP+PABkOnB66+9futFLz73P+0FaQpSeCAKEr3O8cLiNeI4bDmyEcBgy7QvrdRaI8tcCaWOSzmjlmk9VbRZAnCosour0YzfV76ckkHIiRh0/H7Bqci3B3fDlBRoLyik5Y5n/nbLX/cC8EP0oSH4B5E+rAAE3IreJ86+8849s3r5pWIikUgBKSxkBD5O8wIH/sn1wb3z2OHryyC5TJMsUU6/952m4lfsII6SEbhcwHqAWZ8k4Gt6uR6GgMXtifmY3Tb3orp9x/USiZIwtWcfm/+d22+5dRr6OaH03dKHGYBM98++487pLzzz1C9LyqYOhOT7Y0OEAWgDhwGs51LMFUMgP4wLVmpcZ9xaIB9SoAxnzpgwXuvMZ6i4njjuwIUALfFgwD1aYG1o0M7iFkAiBdoKCpUVb9938/U3bAfgXLglUj7U9FEAIAB0ATj55uuun/z6opcuKkqbFZSAIjCGzGnWD7UDgueS1tUgswhE5HczUeWe1w2zHBBZ73N6m4n2EzilsyFssFzB+qjxoTMpAKUENdlkv55AqaBQXbl8/tx77z3sgXvu2xPAs/11od9r+qgAkGkhgC9dffmVkxe9sOCytoIwxcQlLcRglD7eRjojA5EAKKzJbbc2fJeL83rRHnkMIz8dwFwsdHX1sWcEm1z47ymSIQUS5fS82qrlj9x4zbUzAWwH4Prc5B8B+jC5YdaG/g7gc3+98cbvr7/BBsdtuPHGx7cPHrKeNrTOLqKu9SIEM5zDg1wlvHqnhbdOPXRs6zpwkVMwTBSlggGxU7tbJg7CilJKCAiTNZa8/Mp1SxYvumDZshWzIdVHCnQxfVQByPQSgDP/dsutPxw/fuzBm26+2VfHTlxnH22U0Map/z7NyQa+5KMZ5F60vFQYjYt9eyFB1fqf+yiKYAc3oTLifk4US0gJKOHSzFYuW/rMq4sX/d/ihYsvnbbdjOX/wOvygaGPOgCZMgDXArj2xmuv22iDDdY/atKGGx4zauzYrVPNGSbByeu7wJDDWbQ6gPOZCtHvnIj3ZaMtKV7M+YQUzrBQEvVKedlrry25+oXnnv9TZ1f54c0nb/qR5XY90T8LAGNaBNd27Gc3XXPdxhPXnbjvmLFjPz5qzJidBg8dtoE2VhhjXM6fbU1ScMQhPybBPQU5KQA24nR5izZt1Ds7Vq6cs3zp0nuWvLrkb8uXLX9sx112/FD68N4L+mcEYEx/p9cFAHDztdetP3rM6F1Hjxmzw/CRI6e2tbdvNmjwkHVUksiQLOq4n6H4bR6gnNrlRGvWbNZrlfJLHatWPtGxcuXDK5evmPP2shWP77HXHmk/nOsHkkT31PIBGqD3jz5qbpgB+pDRAAAHqF9pAIAD1K80AMAB6lcaAOAA9SsNAHCA+pUGADhA/UoDABygfqUBAA5Qv9IAAAeoX2kAgAPUrzQAwAHqVxoA4AD1Kw0AcID6lQYAOED9Sv8fsZcQrdT5JeUAAAAASUVORK5CYII=\" />\n                </defs>\n              </svg>\n              <p>Tea</p>\n            </div>\n            <div class=\"filter__desert-btn filter__btn\">\n              <svg width=\"31\" height=\"30\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <rect x=\"0.5\" width=\"30\" height=\"30\" rx=\"15\" fill=\"#C1B6AD\" />\n                <path d=\"M7.5 23.12H23.5V7.12H7.5V23.12Z\" fill=\"url(#pattern2)\" />\n                <defs>\n                  <pattern id=\"pattern2\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n                    <use xlink:href=\"#image0_27919_2379\" transform=\"scale(0.00625)\" />\n                  </pattern>\n                  <image id=\"image0_27919_2379\" width=\"160\" height=\"160\"\n                    xlink:href=\"data:image/png;base64,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\" />\n                </defs>\n              </svg>\n              <p>Dessert</p>\n            </div>\n          </div>\n          <div class=\"menu__content-menu\">\n          </div>\n          <div class=\"menu__content-refresh\">\n            <button class=\"menu__refresh-btn\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"refresh\">\n            </button>\n          </div>\n        </div>\n      </section>\n    </main>\n    <footer class=\"footer\">\n      <div class=\"footer__content\">\n        <div class=\"footer__content-left\">\n          <div class=\"footer__content-title\">\n            <h2>Sip, Savor, Smile. <span>It’s coffee time!</span></h2>\n          </div>\n          <div class=\"footer__content-web\">\n            <div class=\"footer__web-twitter\">\n              <a target=\"_blank\" href=\"https://twitter.com/?lang=ru\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#665F55\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\" />\n                  <path\n                    d=\"M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z\"\n                    stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n              </a>\n            </div>\n            <div class=\"footer__web-instagram\">\n              <a target=\"_blank\" href=\"https://www.instagram.com/\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#665F55\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\" />\n                  <path\n                    d=\"M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z\"\n                    stroke=\"#E1D4C9\" />\n                  <path d=\"M35.5 24.51L35.51 24.4989\" stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                  <path\n                    d=\"M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z\"\n                    stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n              </a>\n            </div>\n            <div class=\"footer__web-facebook\">\n              <a target=\"_blank\" href=\"https://www.facebook.com/Meta/\">\n                <svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"#665F55\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <rect x=\"0.5\" y=\"0.5\" width=\"59\" height=\"59\" rx=\"29.5\" stroke=\"#C1B6AD\" />\n                  <path\n                    d=\"M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z\"\n                    stroke=\"#E1D4C9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"footer__content-right\">\n          <div class=\"footer__contacts-title\">\n            <h3>Contact us</h3>\n          </div>\n          <div class=\"footer__contacts-content\">\n            <div class=\"footer__contacts-geo footer-link\">\n              <a target=\"_blank\"\n                href=\"https://yandex.by/maps/123323/santiago-metropolitan-region/house/eU4GaAJlT0YGWEJ3YH9vcnRjZg9f/?ll=-70.555715%2C-33.380578&z=19.28\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z\"\n                    stroke=\"#E1D4C9\" stroke-width=\"1.5\" />\n                  <path\n                    d=\"M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z\"\n                    fill=\"#E1D4C9\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n                8558 Green Rd., LA\n              </a>\n            </div>\n            <div class=\"footer__contacts-phone footer-link\">\n              <a href=\"tel:+16035550123\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z\"\n                    stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </svg>\n                +1 (603) 555-0123\n              </a>\n            </div>\n            <div class=\"footer__contacts-time footer-link\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g clip-path=\"url(#clip0_217_1736)\">\n                  <path d=\"M10 5L10 10L15 10\" stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\" />\n                  <path\n                    d=\"M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z\"\n                    stroke=\"#E1D4C9\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                </g>\n                <defs>\n                  <clipPath id=\"clip0_217_1736\">\n                    <rect width=\"20\" height=\"20\" fill=\"white\" />\n                  </clipPath>\n                </defs>\n              </svg>\n              <p>Mon-Sat: 9:00 AM – 23:00 PM</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Inter-Medium.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Inter-Medium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/Inter-Medium.ttf";

/***/ }),

/***/ "./src/assets/icon/coffee-cup.svg":
/*!****************************************!*\
  !*** ./src/assets/icon/coffee-cup.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon/coffee-cup.svg";

/***/ }),

/***/ "./src/assets/icon/logo.svg":
/*!**********************************!*\
  !*** ./src/assets/icon/logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon/logo.svg";

/***/ }),

/***/ "./src/assets/icon/refresh.svg":
/*!*************************************!*\
  !*** ./src/assets/icon/refresh.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon/refresh.svg";

/***/ }),

/***/ "./src/assets/img/coffee-1.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-1.png";

/***/ }),

/***/ "./src/assets/img/coffee-2.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-2.png";

/***/ }),

/***/ "./src/assets/img/coffee-3.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-3.png";

/***/ }),

/***/ "./src/assets/img/coffee-4.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-4.png";

/***/ }),

/***/ "./src/assets/img/coffee-5.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-5.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-5.png";

/***/ }),

/***/ "./src/assets/img/coffee-6.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-6.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-6.png";

/***/ }),

/***/ "./src/assets/img/coffee-7.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-7.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-7.png";

/***/ }),

/***/ "./src/assets/img/coffee-8.png":
/*!*************************************!*\
  !*** ./src/assets/img/coffee-8.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/coffee-8.png";

/***/ }),

/***/ "./src/assets/img/img-hero.png":
/*!*************************************!*\
  !*** ./src/assets/img/img-hero.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/img-hero.png";

/***/ }),

/***/ "./src/scripts/database/products.json":
/*!********************************************!*\
  !*** ./src/scripts/database/products.json ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "scripts/products.json";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"menu": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.html */ "./src/menu.html");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _scripts_menuGetData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/menuGetData */ "./src/scripts/menuGetData.js");



(0,_scripts_menuGetData__WEBPACK_IMPORTED_MODULE_2__.fetchData)();
window.addEventListener('resize', () => {
  (0,_scripts_menuGetData__WEBPACK_IMPORTED_MODULE_2__.fetchData)();
});
})();

/******/ })()
;
//# sourceMappingURL=menu.8c01155b8b7847784092.js.map