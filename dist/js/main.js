/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Controller/Game.ts":
/*!***********************************!*\
  !*** ./src/js/Controller/Game.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Game = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Game = function () {\n  function Game() {\n    this.formPlay = document.querySelector('.game__play');\n    this.addEventListeners();\n  }\n\n  Game.prototype.addEventListeners = function () {\n    this.reset(new SubmitEvent('reset', {\n      submitter: this.formPlay\n    }));\n  };\n\n  Game.prototype.reset = function (event) {\n    var _this = this;\n\n    event.preventDefault();\n    event.submitter.addEventListener('submit', function () {\n      _this.formPlay.classList.add('hide');\n    });\n  };\n\n  Game.prototype.replay = function (message) {\n    document.querySelector(settings_1.settings.forms.domSelector).classList.remove('hide');\n  };\n\n  return Game;\n}();\n\nexports.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQ29udHJvbGxlci9HYW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7O0FBR0E7RUFlSTtJQUNJLEtBQUtBLFFBQUwsR0FBZ0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFoQjtJQUVBLEtBQUtDLGlCQUFMO0VBQ0g7O0VBRURDO0lBQ0ksS0FBS0MsS0FBTCxDQUFXLElBQUlDLFdBQUosQ0FBZ0IsT0FBaEIsRUFBeUI7TUFBQ0MsU0FBUyxFQUFFLEtBQUtQO0lBQWpCLENBQXpCLENBQVg7RUFDSCxDQUZEOztFQUlRSSx1QkFBUixVQUFjSSxLQUFkLEVBQWdDO0lBQWhDOztJQUNJQSxLQUFLLENBQUNDLGNBQU47SUFDQUQsS0FBSyxDQUFDRCxTQUFOLENBQWdCRyxnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkM7TUFDdkNDLEtBQUksQ0FBQ1gsUUFBTCxDQUFjWSxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1QjtJQUNILENBRkQ7RUFHSCxDQUxPOztFQU9SVCxrQ0FBT1UsT0FBUCxFQUFzQjtJQUNsQmIsUUFBUSxDQUFDQyxhQUFULENBQXVCYSxvQkFBU0MsS0FBVCxDQUFlQyxXQUF0QyxFQUFtREwsU0FBbkQsQ0FBNkRNLE1BQTdELENBQW9FLE1BQXBFO0VBQ0gsQ0FGRDs7RUFJSjtBQUFDLENBcENEOztBQUFhQyxZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvanMvQ29udHJvbGxlci9HYW1lLnRzPzhhMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTbmFrZX0gZnJvbSBcIi4uL01vZGVscy9TbmFrZVwiO1xuaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuLi9Nb2RlbHMvQW5pbWF0aW9uXCI7XG5pbXBvcnQge2RpcmVjdGlvbn0gZnJvbSBcIi4uL1R5cGVzL2RpcmVjdGlvblwiO1xuaW1wb3J0IHtBcHBsZX0gZnJvbSBcIi4uL01vZGVscy9BcHBsZVwiO1xuaW1wb3J0IHtTY29yZX0gZnJvbSBcIi4uL01vZGVscy9TY29yZVwiO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc25ha2VDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc25ha2VDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvb2RDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc25ha2U6IFNuYWtlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0aW9uOiBBbmltYXRpb247XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGF0dXM6IHsgc3RhcnQ6IGJvb2xlYW4gfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnQ6IHsgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwcGxlczogQXBwbGVbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvb2RDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNjb3JlOiBTY29yZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1QbGF5OiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNjb3JlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5mb3JtUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19wbGF5JykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5yZXNldChuZXcgU3VibWl0RXZlbnQoJ3Jlc2V0Jywge3N1Ym1pdHRlcjogdGhpcy5mb3JtUGxheX0pKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoZXZlbnQ6IFN1Ym1pdEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN1Ym1pdHRlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1QbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXBsYXkobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MuZm9ybXMuZG9tU2VsZWN0b3IpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiZm9ybVBsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVycyIsIkdhbWUiLCJyZXNldCIsIlN1Ym1pdEV2ZW50Iiwic3VibWl0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2UiLCJzZXR0aW5nc18xIiwiZm9ybXMiLCJkb21TZWxlY3RvciIsInJlbW92ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Controller/Game.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Game_1 = __webpack_require__(/*! ./Controller/Game */ \"./src/js/Controller/Game.ts\");\n\nnew Game_1.Game();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBSUEsV0FBSiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZX0gZnJvbSBcIi4vQ29udHJvbGxlci9HYW1lXCI7XG5cbm5ldyBHYW1lKCk7Il0sIm5hbWVzIjpbIkdhbWVfMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    snake: {\n      domSelector: \"#snake\",\n      ctx: \"2d\"\n    },\n    food: {\n      domSelector: \"#food\",\n      ctx: \"2d\"\n    },\n    fps: 4\n  },\n  snake: {\n    unit: 20,\n    color: \"#252422\",\n    initialCount: 6\n  },\n  food: {\n    radius: 10,\n    color: \"#EB5E28\"\n  },\n  score: {\n    domSelector: \".game__score span\"\n  },\n  forms: {\n    domSelector: \".game__play\",\n    messageSelector: \".game__play__message\",\n    inputSelector: \".game__play__score\",\n    hideClass: \"hide\",\n    messages: {\n      selfEating: \"Oh non ! Le serpent s'est mordu la queue...\",\n      goOut: \"Oh non ! Le serpent s’est pris la tête dans le mur...\"\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztFQUNwQkMsTUFBTSxFQUFFO0lBQ0pDLEtBQUssRUFBRTtNQUFDQyxXQUFXLEVBQUUsUUFBZDtNQUF3QkMsR0FBRyxFQUFFO0lBQTdCLENBREg7SUFFSkMsSUFBSSxFQUFFO01BQUNGLFdBQVcsRUFBRSxPQUFkO01BQXVCQyxHQUFHLEVBQUU7SUFBNUIsQ0FGRjtJQUdKRSxHQUFHLEVBQUU7RUFIRCxDQURZO0VBTXBCSixLQUFLLEVBQUU7SUFDSEssSUFBSSxFQUFFLEVBREg7SUFFSEMsS0FBSyxFQUFFLFNBRko7SUFHSEMsWUFBWSxFQUFFO0VBSFgsQ0FOYTtFQVdwQkosSUFBSSxFQUFFO0lBQUNLLE1BQU0sRUFBRSxFQUFUO0lBQWFGLEtBQUssRUFBRTtFQUFwQixDQVhjO0VBWXBCRyxLQUFLLEVBQUU7SUFDSFIsV0FBVyxFQUFFO0VBRFYsQ0FaYTtFQWVwQlMsS0FBSyxFQUFFO0lBQ0hULFdBQVcsRUFBRSxhQURWO0lBRUhVLGVBQWUsRUFBRSxzQkFGZDtJQUdIQyxhQUFhLEVBQUUsb0JBSFo7SUFJSEMsU0FBUyxFQUFFLE1BSlI7SUFLSEMsUUFBUSxFQUFFO01BQ05DLFVBQVUsRUFBRSw2Q0FETjtNQUVOQyxLQUFLLEVBQUU7SUFGRDtFQUxQO0FBZmEsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgY2FudmFzOiB7XG4gICAgICAgIHNuYWtlOiB7ZG9tU2VsZWN0b3I6IFwiI3NuYWtlXCIsIGN0eDogXCIyZFwifSxcbiAgICAgICAgZm9vZDoge2RvbVNlbGVjdG9yOiBcIiNmb29kXCIsIGN0eDogXCIyZFwifSxcbiAgICAgICAgZnBzOiA0XG4gICAgfSxcbiAgICBzbmFrZToge1xuICAgICAgICB1bml0OiAyMCxcbiAgICAgICAgY29sb3I6IFwiIzI1MjQyMlwiLFxuICAgICAgICBpbml0aWFsQ291bnQ6IDZcbiAgICB9LFxuICAgIGZvb2Q6IHtyYWRpdXM6IDEwLCBjb2xvcjogXCIjRUI1RTI4XCJ9LFxuICAgIHNjb3JlOiB7XG4gICAgICAgIGRvbVNlbGVjdG9yOiBcIi5nYW1lX19zY29yZSBzcGFuXCJcbiAgICB9LFxuICAgIGZvcm1zOiB7XG4gICAgICAgIGRvbVNlbGVjdG9yOiBcIi5nYW1lX19wbGF5XCIsXG4gICAgICAgIG1lc3NhZ2VTZWxlY3RvcjogXCIuZ2FtZV9fcGxheV9fbWVzc2FnZVwiLFxuICAgICAgICBpbnB1dFNlbGVjdG9yOiBcIi5nYW1lX19wbGF5X19zY29yZVwiLFxuICAgICAgICBoaWRlQ2xhc3M6IFwiaGlkZVwiLFxuICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgc2VsZkVhdGluZzogXCJPaCBub24gISBMZSBzZXJwZW50IHMnZXN0IG1vcmR1IGxhIHF1ZXVlLi4uXCIsXG4gICAgICAgICAgICBnb091dDogXCJPaCBub24gISBMZSBzZXJwZW50IHPigJllc3QgcHJpcyBsYSB0w6p0ZSBkYW5zIGxlIG11ci4uLlwiLFxuICAgICAgICB9LFxuICAgIH1cbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImNhbnZhcyIsInNuYWtlIiwiZG9tU2VsZWN0b3IiLCJjdHgiLCJmb29kIiwiZnBzIiwidW5pdCIsImNvbG9yIiwiaW5pdGlhbENvdW50IiwicmFkaXVzIiwic2NvcmUiLCJmb3JtcyIsIm1lc3NhZ2VTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJoaWRlQ2xhc3MiLCJtZXNzYWdlcyIsInNlbGZFYXRpbmciLCJnb091dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexamen_juin_2022"] = self["webpackChunkexamen_juin_2022"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;