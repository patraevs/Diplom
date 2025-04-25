/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_orderCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/orderCall */ \"./modules/orderCall.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./modules/sliderCarousel.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_measurerCall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/measurerCall */ \"./modules/measurerCall.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_orderCall__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_measurerCall__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"27 april 2025\");\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  const calcBlock = document.getElementById(\"calc\");\r\n  const calcType = document.getElementById(\"calc-type\");\r\n  const calcTypeMaterial = document.getElementById(\"calc-type-material\");\r\n  const calcInput = document.getElementById(\"calc-input\");\r\n  const calcTotal = document.getElementById(\"calc-total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.value;\r\n    const calcTypeMaterialValue = +calcTypeMaterial.value;\r\n    const calcInputValue = +calcInput.value;\r\n\r\n    let totalValue = 0;\r\n\r\n    if (calcType.value && calcTypeMaterial.value && calcInput.value) {\r\n      totalValue = calcTypeValue * calcTypeMaterialValue * calcInputValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n    calcTotal.placeholder = totalValue + \" руб\";\r\n  };\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcTypeMaterial ||\r\n      e.target === calcInput\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress);\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/measurerCall.js":
/*!*********************************!*\
  !*** ./modules/measurerCall.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst measurerCall = () => {\r\n  const modal = document.querySelector(\".services-modal\");\r\n  const substrate = document.querySelector(\".overlay\");\r\n  const callBtns = document.querySelectorAll(\r\n    \".btn-success.btn-sm.fancyboxModal\"\r\n  );\r\n  const closeBtn = document.querySelector(\".services-modal__close\");\r\n\r\n  callBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 1000,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          // prettier-ignore\r\n          modal.style.top = (50 * progress) + \"%\";\r\n        },\r\n      });\r\n      modal.style.display = \"block\";\r\n      substrate.style.display = \"block\";\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n    substrate.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (measurerCall);\r\n\n\n//# sourceURL=webpack:///./modules/measurerCall.js?");

/***/ }),

/***/ "./modules/orderCall.js":
/*!******************************!*\
  !*** ./modules/orderCall.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst orderCall = () => {\r\n  const modal = document.querySelector(\".header-modal\");\r\n  const substrate = document.querySelector(\".overlay\");\r\n  const callBtn = document.querySelector(\r\n    \".btn.btn-warning.btn-block.fancyboxModal\"\r\n  );\r\n  const closeBtn = document.querySelector(\".header-modal__close\");\r\n  const scrollBtn = document.querySelector(\".smooth-scroll\");\r\n\r\n  callBtn.addEventListener(\"click\", () => {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 1000,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        // prettier-ignore\r\n        modal.style.top = (50 * progress) + \"%\";\r\n      },\r\n    });\r\n    modal.style.display = \"block\";\r\n    substrate.style.display = \"block\";\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n    substrate.style.display = \"none\";\r\n  });\r\n\r\n  scrollBtn.addEventListener(\"click\", () => {\r\n    document.documentElement.scrollTop = 100;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderCall);\r\n\n\n//# sourceURL=webpack:///./modules/orderCall.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  console.log(\"slider\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/sliderCarousel.js":
/*!***********************************!*\
  !*** ./modules/sliderCarousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderCarousel = () => {\r\n  console.log(\"sliderCarousel\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderCarousel);\r\n\n\n//# sourceURL=webpack:///./modules/sliderCarousel.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerDays = document.querySelectorAll(\".count.count_1 span\");\r\n  const timerHours = document.querySelectorAll(\".count.count_2 span\");\r\n  const timerMinutes = document.querySelectorAll(\".count.count_3 span\");\r\n  const timerSeconds = document.querySelectorAll(\".count.count_4 span\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    timerDays.forEach((span) => {\r\n      span.textContent = getTime.days < 10 ? \"0\" + getTime.days : getTime.days;\r\n    });\r\n\r\n    timerHours.forEach((span) => {\r\n      span.textContent =\r\n        getTime.hours < 10 ? \"0\" + getTime.hours : getTime.hours;\r\n    });\r\n\r\n    timerMinutes.forEach((span) => {\r\n      span.textContent =\r\n        getTime.minutes < 10 ? \"0\" + getTime.minutes : getTime.minutes;\r\n    });\r\n\r\n    timerSeconds.forEach((span) => {\r\n      span.textContent =\r\n        getTime.seconds < 10 ? \"0\" + getTime.seconds : getTime.seconds;\r\n    });\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      setTimeout(updateClock, 1000);\r\n    } else {\r\n      timerDays.forEach((span) => (span.textContent = \"00\"));\r\n      timerHours.forEach((span) => (span.textContent = \"00\"));\r\n      timerMinutes.forEach((span) => (span.textContent = \"00\"));\r\n      timerSeconds.forEach((span) => (span.textContent = \"00\"));\r\n    }\r\n  };\r\n  updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  console.log(\"validation\");\r\n  const calcInput = document.getElementById(\"calc-input\");\r\n  calcInput.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;