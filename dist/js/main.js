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

eval("\n\nexports.__esModule = true;\nexports.Game = void 0;\n\nvar Snake_1 = __webpack_require__(/*! ../Models/Snake */ \"./src/js/Models/Snake.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Game = function () {\n  function Game() {\n    this.formPlay = document.querySelector('.game__play');\n    this.snakeCanvas = document.querySelector('.game__canvas-container__snake');\n    this.snakeCtx = this.snakeCanvas.getContext('2d');\n    this.snake = new Snake_1.Snake(this.snakeCanvas, this.snakeCtx, this.current, this.apples, this.score, this.replay, this);\n    this.addEventListeners();\n  }\n\n  Game.prototype.addEventListeners = function () {\n    this.reset(new SubmitEvent('reset', {\n      submitter: this.formPlay\n    }));\n  };\n\n  Game.prototype.reset = function (event) {\n    var _this = this;\n\n    event.preventDefault();\n    event.submitter.addEventListener('submit', function () {\n      _this.formPlay.classList.add('hide');\n    });\n  };\n\n  Game.prototype.replay = function (message) {\n    document.querySelector(settings_1.settings.forms.domSelector).classList.remove('hide');\n  };\n\n  return Game;\n}();\n\nexports.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQ29udHJvbGxlci9HYW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBS0E7O0FBR0E7RUFnQkk7SUFFSSxLQUFLQSxRQUFMLEdBQWdCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7SUFFQSxLQUFLQyxXQUFMLEdBQW1CRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQW5CO0lBQ0EsS0FBS0UsUUFBTCxHQUFnQixLQUFLRCxXQUFMLENBQWlCRSxVQUFqQixDQUE0QixJQUE1QixDQUFoQjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxJQUFJQyxhQUFKLENBQVUsS0FBS0osV0FBZixFQUE0QixLQUFLQyxRQUFqQyxFQUEyQyxLQUFLSSxPQUFoRCxFQUF5RCxLQUFLQyxNQUE5RCxFQUFzRSxLQUFLQyxLQUEzRSxFQUFrRixLQUFLQyxNQUF2RixFQUErRixJQUEvRixDQUFiO0lBQ0EsS0FBS0MsaUJBQUw7RUFLSDs7RUFFREM7SUFDSSxLQUFLQyxLQUFMLENBQVcsSUFBSUMsV0FBSixDQUFnQixPQUFoQixFQUF5QjtNQUFDQyxTQUFTLEVBQUUsS0FBS2hCO0lBQWpCLENBQXpCLENBQVg7RUFFSCxDQUhEOztFQUtRYSx1QkFBUixVQUFjSSxLQUFkLEVBQWdDO0lBQWhDOztJQUNJQSxLQUFLLENBQUNDLGNBQU47SUFDQUQsS0FBSyxDQUFDRCxTQUFOLENBQWdCRyxnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkM7TUFFdkNDLEtBQUksQ0FBQ3BCLFFBQUwsQ0FBY3FCLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCO0lBY0gsQ0FoQkQ7RUFpQkgsQ0FuQk87O0VBcUJSVCxrQ0FBT1UsT0FBUCxFQUFzQjtJQUNsQnRCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QnNCLG9CQUFTQyxLQUFULENBQWVDLFdBQXRDLEVBQW1ETCxTQUFuRCxDQUE2RE0sTUFBN0QsQ0FBb0UsTUFBcEU7RUFDSCxDQUZEOztFQUlKO0FBQUMsQ0E1REQ7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9Db250cm9sbGVyL0dhbWUudHM/OGExYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NuYWtlfSBmcm9tIFwiLi4vTW9kZWxzL1NuYWtlXCI7XG5pbXBvcnQge0FuaW1hdGlvbn0gZnJvbSBcIi4uL01vZGVscy9BbmltYXRpb25cIjtcbmltcG9ydCB7ZGlyZWN0aW9ufSBmcm9tIFwiLi4vVHlwZXMvZGlyZWN0aW9uXCI7XG5pbXBvcnQge0FwcGxlfSBmcm9tIFwiLi4vTW9kZWxzL0FwcGxlXCI7XG5pbXBvcnQge1Njb3JlfSBmcm9tIFwiLi4vTW9kZWxzL1Njb3JlXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcbi8vIGltcG9ydCB7Qm9keX0gZnJvbSBcIi4uL01vZGVscy9Cb2R5XCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb29kQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlOiBTbmFrZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGlvbjogQW5pbWF0aW9uO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhdHVzOiB7IHN0YXJ0OiBib29sZWFuIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50OiB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBsZXM6IEFwcGxlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb29kQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZTogU2NvcmU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtUGxheTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIC8vIHByaXZhdGUgcHJldmlvdXM6IHsgZGlyZWN0aW9uOiBudW1iZXIgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLnByZXZpb3VzID0ge2RpcmVjdGlvbjogMH07XG4gICAgICAgIHRoaXMuZm9ybVBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fcGxheScpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgICAgICB0aGlzLnNuYWtlQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NhbnZhcy1jb250YWluZXJfX3NuYWtlJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuc25ha2VDdHggPSB0aGlzLnNuYWtlQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKHRoaXMuc25ha2VDYW52YXMsIHRoaXMuc25ha2VDdHgsIHRoaXMuY3VycmVudCwgdGhpcy5hcHBsZXMsIHRoaXMuc2NvcmUsIHRoaXMucmVwbGF5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIC8vIHRoaXMuc3RhdHVzID0ge3N0YXJ0OiBmYWxzZX1cblxuICAgICAgICAvLyB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5zdGF0dXMsIHRoaXMuc25ha2UpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucmVzZXQobmV3IFN1Ym1pdEV2ZW50KCdyZXNldCcsIHtzdWJtaXR0ZXI6IHRoaXMuZm9ybVBsYXl9KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0KGV2ZW50OiBTdWJtaXRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdWJtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5wcmV2aW91cyA9IHtkaXJlY3Rpb246IDB9O1xuICAgICAgICAgICAgdGhpcy5mb3JtUGxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMuYW5pbWF0aW9uLnN0YXR1cyA9IHtzdGFydDogdHJ1ZX1cblxuICAgICAgICAgICAgLy8gdGhpcy5zbmFrZS50YWlsLmZvckVhY2goKGJvZHk6IEJvZHkpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBib2R5LmNsZWFyKCk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgLy8gdGhpcy5zbmFrZS50YWlsID0gW107XG4gICAgICAgICAgICAvLyAvLyB0aGlzLnNuYWtlLmNyZWF0ZVNuYWtlKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNuYWtlLmluaXRpYWxEcmF3KCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNuYWtlLmFuaW1hdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyB0aGlzLmFuaW1hdGlvbi5hbmltYXRlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXBsYXkobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MuZm9ybXMuZG9tU2VsZWN0b3IpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiZm9ybVBsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbmFrZUNhbnZhcyIsInNuYWtlQ3R4IiwiZ2V0Q29udGV4dCIsInNuYWtlIiwiU25ha2VfMSIsImN1cnJlbnQiLCJhcHBsZXMiLCJzY29yZSIsInJlcGxheSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiR2FtZSIsInJlc2V0IiwiU3VibWl0RXZlbnQiLCJzdWJtaXR0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZSIsInNldHRpbmdzXzEiLCJmb3JtcyIsImRvbVNlbGVjdG9yIiwicmVtb3ZlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Controller/Game.ts\n");

/***/ }),

/***/ "./src/js/Models/Body.ts":
/*!*******************************!*\
  !*** ./src/js/Models/Body.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Body = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/js/Models/Canvas.ts\");\n\nvar Body = function (_super) {\n  __extends(Body, _super);\n\n  function Body(canvas, ctx, position) {\n    return _super.call(this, canvas, ctx, position) || this;\n  }\n\n  Body.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.strokeStyle = 'white';\n    this.ctx.fillStyle = settings_1.settings.snake.color;\n    this.ctx.lineWidth = settings_1.settings.snake.borderWidth;\n    this.ctx.rect(this.position.x, this.position.y, settings_1.settings.snake.unit, settings_1.settings.snake.unit);\n    this.ctx.stroke();\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  Body.prototype.clear = function () {\n    this.ctx.clearRect(this.position.x - settings_1.settings.snake.borderWidth, this.position.y - settings_1.settings.snake.borderWidth, settings_1.settings.snake.unit + settings_1.settings.snake.borderWidth * 2, settings_1.settings.snake.unit + settings_1.settings.snake.borderWidth * 2);\n  };\n\n  return Body;\n}(Canvas_1.Canvas);\n\nexports.Body = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0JvZHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7RUFBMEJBOztFQUd0QixjQUFZQyxNQUFaLEVBQXVDQyxHQUF2QyxFQUFzRUMsUUFBdEUsRUFBd0Y7V0FDcEZDLGtCQUFNSCxNQUFOLEVBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEtBQTRCO0VBQy9COztFQUVERTtJQUNJLEtBQUtILEdBQUwsQ0FBU0ksU0FBVDtJQUNBLEtBQUtKLEdBQUwsQ0FBU0ssV0FBVCxHQUF1QixPQUF2QjtJQUNBLEtBQUtMLEdBQUwsQ0FBU00sU0FBVCxHQUFxQkMsb0JBQVNDLEtBQVQsQ0FBZUMsS0FBcEM7SUFDQSxLQUFLVCxHQUFMLENBQVNVLFNBQVQsR0FBcUJILG9CQUFTQyxLQUFULENBQWVHLFdBQXBDO0lBQ0EsS0FBS1gsR0FBTCxDQUFTWSxJQUFULENBQWMsS0FBS1gsUUFBTCxDQUFjWSxDQUE1QixFQUErQixLQUFLWixRQUFMLENBQWNhLENBQTdDLEVBQWdEUCxvQkFBU0MsS0FBVCxDQUFlTyxJQUEvRCxFQUFxRVIsb0JBQVNDLEtBQVQsQ0FBZU8sSUFBcEY7SUFDQSxLQUFLZixHQUFMLENBQVNnQixNQUFUO0lBQ0EsS0FBS2hCLEdBQUwsQ0FBU2lCLElBQVQ7SUFDQSxLQUFLakIsR0FBTCxDQUFTa0IsU0FBVDtFQUNILENBVEQ7O0VBV0FmO0lBQ0ksS0FBS0gsR0FBTCxDQUFTbUIsU0FBVCxDQUFtQixLQUFLbEIsUUFBTCxDQUFjWSxDQUFkLEdBQWtCTixvQkFBU0MsS0FBVCxDQUFlRyxXQUFwRCxFQUFpRSxLQUFLVixRQUFMLENBQWNhLENBQWQsR0FBa0JQLG9CQUFTQyxLQUFULENBQWVHLFdBQWxHLEVBQStHSixvQkFBU0MsS0FBVCxDQUFlTyxJQUFmLEdBQXNCUixvQkFBU0MsS0FBVCxDQUFlRyxXQUFmLEdBQTZCLENBQWxLLEVBQXFLSixvQkFBU0MsS0FBVCxDQUFlTyxJQUFmLEdBQXNCUixvQkFBU0MsS0FBVCxDQUFlRyxXQUFmLEdBQTZCLENBQXhOO0VBQ0gsQ0FGRDs7RUFHSjtBQUFDLENBckJELENBQTBCUyxlQUExQjs7QUFBYUMsWUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtZW4tanVpbi0yMDIyLy4vc3JjL2pzL01vZGVscy9Cb2R5LnRzP2QyYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5pbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEJvZHkgZXh0ZW5kcyBDYW52YXMge1xuICAgIHByb3RlY3RlZCBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvc2l0aW9uOiBwb3NpdGlvbikge1xuICAgICAgICBzdXBlcihjYW52YXMsIGN0eCwgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHNldHRpbmdzLnNuYWtlLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSBzZXR0aW5ncy5zbmFrZS5ib3JkZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgc2V0dGluZ3Muc25ha2UudW5pdCwgc2V0dGluZ3Muc25ha2UudW5pdCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54IC0gc2V0dGluZ3Muc25ha2UuYm9yZGVyV2lkdGgsIHRoaXMucG9zaXRpb24ueSAtIHNldHRpbmdzLnNuYWtlLmJvcmRlcldpZHRoLCBzZXR0aW5ncy5zbmFrZS51bml0ICsgc2V0dGluZ3Muc25ha2UuYm9yZGVyV2lkdGggKiAyLCBzZXR0aW5ncy5zbmFrZS51bml0ICsgc2V0dGluZ3Muc25ha2UuYm9yZGVyV2lkdGggKiAyKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImNhbnZhcyIsImN0eCIsInBvc2l0aW9uIiwiX3N1cGVyIiwiQm9keSIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwic2V0dGluZ3NfMSIsInNuYWtlIiwiY29sb3IiLCJsaW5lV2lkdGgiLCJib3JkZXJXaWR0aCIsInJlY3QiLCJ4IiwieSIsInVuaXQiLCJzdHJva2UiLCJmaWxsIiwiY2xvc2VQYXRoIiwiY2xlYXJSZWN0IiwiQ2FudmFzXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Models/Body.ts\n");

/***/ }),

/***/ "./src/js/Models/Canvas.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Canvas.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Canvas = function () {\n  function Canvas(canvas, ctx, position) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = position;\n  }\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0NhbnZhcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUdBO0VBTUksZ0JBQXNCQSxNQUF0QixFQUFpREMsR0FBakQsRUFBZ0ZDLFFBQWhGLEVBQWtHO0lBQzlGLEtBQUtGLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0g7O0VBS0w7QUFBQyxDQWZEOztBQUFzQkMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtZW4tanVpbi0yMDIyLy4vc3JjL2pzL01vZGVscy9DYW52YXMudHM/ZDY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvcG9zaXRpb25cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbnZhcyBpbXBsZW1lbnRzIElEcmF3YWJsZSB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHB1YmxpYyBwb3NpdGlvbjogcG9zaXRpb247XG5cblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9zaXRpb246IHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGRyYXcoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBjbGVhcigpOiB2b2lkO1xuXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsInBvc2l0aW9uIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Canvas.ts\n");

/***/ }),

/***/ "./src/js/Models/Snake.ts":
/*!********************************!*\
  !*** ./src/js/Models/Snake.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Snake = void 0;\n\nvar Body_1 = __webpack_require__(/*! ./Body */ \"./src/js/Models/Body.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/js/Models/Canvas.ts\");\n\nvar Snake = function (_super) {\n  __extends(Snake, _super);\n\n  function Snake(canvas, ctx, current, apples, score, replay, game) {\n    var _this = _super.call(this, canvas, ctx, {\n      x: 0,\n      y: 0\n    }) || this;\n\n    _this.tail = [];\n\n    _this.createSnake();\n\n    _this.initialDraw();\n\n    _this.draw();\n\n    return _this;\n  }\n\n  Snake.prototype.initialDraw = function () {\n    var _this = this;\n\n    this.tail.forEach(function (body) {\n      body.position.x += _this.canvas.width / 2 + settings_1.settings.snake.initialCount / 2 * settings_1.settings.snake.unit - settings_1.settings.snake.unit;\n      body.position.y += _this.canvas.height / 2;\n    });\n    this.draw();\n  };\n\n  Snake.prototype.draw = function () {\n    this.tail.forEach(function (body) {\n      body.draw();\n    });\n  };\n\n  Snake.prototype.update = function () {};\n\n  Snake.prototype.getPreviousPosition = function () {};\n\n  Snake.prototype.isGoingOutside = function () {};\n\n  Snake.prototype.isEating = function () {};\n\n  Snake.prototype.isBitingItsTail = function () {};\n\n  Snake.prototype.createSnake = function () {\n    this.tail.push(new Body_1.Body(this.canvas, this.ctx, {\n      x: this.position.x,\n      y: this.position.y\n    }));\n\n    for (var i = 1; i < settings_1.settings.snake.initialCount; i++) {\n      this.tail.push(new Body_1.Body(this.canvas, this.ctx, {\n        x: this.tail[i - 1].position.x - settings_1.settings.snake.unit,\n        y: this.tail[i - 1].position.y\n      }));\n    }\n  };\n\n  return Snake;\n}(Canvas_1.Canvas);\n\nexports.Snake = Snake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL1NuYWtlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQU9BO0VBQTJCQTs7RUFTdkIsZUFBWUMsTUFBWixFQUF1Q0MsR0FBdkMsRUFBc0VDLE9BQXRFLEVBQXlHQyxNQUF6RyxFQUEwSEMsS0FBMUgsRUFBd0lDLE1BQXhJLEVBQTJLQyxJQUEzSyxFQUFvTDtJQUFwTCxZQUNJQyxrQkFBTVAsTUFBTixFQUFjQyxHQUFkLEVBQW1CO01BQ2ZPLENBQUMsRUFBRSxDQURZO01BRWZDLENBQUMsRUFBQztJQUZhLENBQW5CLEtBR0UsSUFKTjs7SUFRSUMsS0FBSSxDQUFDQyxJQUFMLEdBQVcsRUFBWDs7SUFFQUQsS0FBSSxDQUFDRSxXQUFMOztJQUVBRixLQUFJLENBQUNHLFdBQUw7O0lBRUFILEtBQUksQ0FBQ0ksSUFBTDs7O0VBQ0g7O0VBRURDO0lBQUE7O0lBRUksS0FBS0osSUFBTCxDQUFVSyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBSztNQUNuQkEsSUFBSSxDQUFDQyxRQUFMLENBQWNWLENBQWQsSUFBbUJFLEtBQUksQ0FBQ1YsTUFBTCxDQUFZbUIsS0FBWixHQUFvQixDQUFwQixHQUF3QkMsb0JBQVNDLEtBQVQsQ0FBZUMsWUFBZixHQUE4QixDQUE5QixHQUFrQ0Ysb0JBQVNDLEtBQVQsQ0FBZUUsSUFBekUsR0FBZ0ZILG9CQUFTQyxLQUFULENBQWVFLElBQWxIO01BQ0FOLElBQUksQ0FBQ0MsUUFBTCxDQUFjVCxDQUFkLElBQW1CQyxLQUFJLENBQUNWLE1BQUwsQ0FBWXdCLE1BQVosR0FBcUIsQ0FBeEM7SUFDSCxDQUhEO0lBS0EsS0FBS1YsSUFBTDtFQUNILENBUkQ7O0VBVUFDO0lBQ0ksS0FBS0osSUFBTCxDQUFVSyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBSztNQUNuQkEsSUFBSSxDQUFDSCxJQUFMO0lBQ0gsQ0FGRDtFQUdILENBSkQ7O0VBTUFDLHNDQVVDLENBVkQ7O0VBWVFBLHNDQUFSLGFBS0MsQ0FMTzs7RUFPQUEsaUNBQVIsYUFFQyxDQUZPOztFQUlBQSwyQkFBUixhQUVDLENBRk87O0VBSUFBLGtDQUFSLGFBRUMsQ0FGTzs7RUFXUkE7SUFDSSxLQUFLSixJQUFMLENBQVVjLElBQVYsQ0FBZSxJQUFJQyxXQUFKLENBQVMsS0FBSzFCLE1BQWQsRUFBc0IsS0FBS0MsR0FBM0IsRUFBZ0M7TUFBQ08sQ0FBQyxFQUFFLEtBQUtVLFFBQUwsQ0FBY1YsQ0FBbEI7TUFBcUJDLENBQUMsRUFBRSxLQUFLUyxRQUFMLENBQWNUO0lBQXRDLENBQWhDLENBQWY7O0lBRUEsS0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1Asb0JBQVNDLEtBQVQsQ0FBZUMsWUFBbkMsRUFBaURLLENBQUMsRUFBbEQsRUFBc0Q7TUFDbEQsS0FBS2hCLElBQUwsQ0FBVWMsSUFBVixDQUFlLElBQUlDLFdBQUosQ0FBUyxLQUFLMUIsTUFBZCxFQUFzQixLQUFLQyxHQUEzQixFQUFnQztRQUMzQ08sQ0FBQyxFQUFFLEtBQUtHLElBQUwsQ0FBVWdCLENBQUMsR0FBRyxDQUFkLEVBQWlCVCxRQUFqQixDQUEwQlYsQ0FBMUIsR0FBOEJZLG9CQUFTQyxLQUFULENBQWVFLElBREw7UUFFM0NkLENBQUMsRUFBRSxLQUFLRSxJQUFMLENBQVVnQixDQUFDLEdBQUcsQ0FBZCxFQUFpQlQsUUFBakIsQ0FBMEJUO01BRmMsQ0FBaEMsQ0FBZjtJQUlIO0VBQ0osQ0FURDs7RUFVSjtBQUFDLENBMUZELENBQTJCbUIsZUFBM0I7O0FBQWFDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9Nb2RlbHMvU25ha2UudHM/YjQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JvZHl9IGZyb20gXCIuL0JvZHlcIjtcbmltcG9ydCB7ZGlyZWN0aW9ufSBmcm9tIFwiLi4vVHlwZXMvZGlyZWN0aW9uXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7cG9zaXRpb259IGZyb20gXCIuLi9UeXBlcy9wb3NpdGlvblwiO1xuaW1wb3J0IHtBcHBsZX0gZnJvbSBcIi4vQXBwbGVcIjtcbmltcG9ydCB7U2NvcmV9IGZyb20gXCIuL1Njb3JlXCI7XG5pbXBvcnQge2NvbXBhcmV9IGZyb20gXCIuLi9IZWxwZXJzL2NvbXBhcmVcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgU25ha2UgZXh0ZW5kcyBDYW52YXMge1xuICAgIGN1cnJlbnQ6IHsgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfTtcbiAgICB0YWlsOiBCb2R5W107XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBsZXM6IEFwcGxlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZTogU2NvcmU7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXBsYXk6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgLy8gYW5pbWF0ZTogYm9vbGVhbjtcbiAgICAvLyBwcml2YXRlIGdhbWU6IEdhbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY3VycmVudDogeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9LCBhcHBsZXM6IEFwcGxlW10sIHNjb3JlOiBTY29yZSwgcmVwbGF5OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkLCBnYW1lOkdhbWUpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuYW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMudGFpbD0gW107XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTbmFrZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbERyYXcoKTtcblxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICAgIGluaXRpYWxEcmF3KCkge1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnQgPSB7ZGlyZWN0aW9uOiAwfVxuICAgICAgICB0aGlzLnRhaWwuZm9yRWFjaCgoYm9keSkgPT4ge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IHRoaXMuY2FudmFzLndpZHRoIC8gMiArIHNldHRpbmdzLnNuYWtlLmluaXRpYWxDb3VudCAvIDIgKiBzZXR0aW5ncy5zbmFrZS51bml0IC0gc2V0dGluZ3Muc25ha2UudW5pdDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy50YWlsLmZvckVhY2goKGJvZHkpID0+IHtcbiAgICAgICAgICAgIGJvZHkuZHJhdygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gdGhpcy50YWlsLmZvckVhY2goKGJvZHkpID0+IHtcbiAgICAgICAgLy8gICAgIGJvZHkuY2xlYXIoKVxuICAgICAgICAvLyB9KVxuICAgICAgICAvL1xuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50LmRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAvLyAgICAgdGhpcy5nZXRQcmV2aW91c1Bvc2l0aW9uKClcbiAgICAgICAgLy8gICAgIHRoaXMudGFpbFswXS5wb3NpdGlvbi54ICs9IHNldHRpbmdzLnNuYWtlLnVuaXRcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmRyYXcoKVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHJldmlvdXNQb3NpdGlvbigpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IHRoaXMudGFpbC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnRhaWxbaV0ucG9zaXRpb24ueCA9IHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24ueDtcbiAgICAgICAgLy8gICAgIHRoaXMudGFpbFtpXS5wb3NpdGlvbi55ID0gdGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbi55O1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0dvaW5nT3V0c2lkZSgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaXNFYXRpbmcoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQml0aW5nSXRzVGFpbCgpIHtcblxuICAgIH1cblxuXG4gICAgLy8gY2xlYXIoKSB7XG4gICAgLy8gICAgIHRoaXMudGFpbC5mb3JFYWNoKChib2R5KSA9PiB7XG4gICAgLy8gICAgICAgICBib2R5LmNsZWFyKClcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBjcmVhdGVTbmFrZSgpIHtcbiAgICAgICAgdGhpcy50YWlsLnB1c2gobmV3IEJvZHkodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB7eDogdGhpcy5wb3NpdGlvbi54LCB5OiB0aGlzLnBvc2l0aW9uLnl9KSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNldHRpbmdzLnNuYWtlLmluaXRpYWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhaWwucHVzaChuZXcgQm9keSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uLnggLSBzZXR0aW5ncy5zbmFrZS51bml0LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24ueVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY2FudmFzIiwiY3R4IiwiY3VycmVudCIsImFwcGxlcyIsInNjb3JlIiwicmVwbGF5IiwiZ2FtZSIsIl9zdXBlciIsIngiLCJ5IiwiX3RoaXMiLCJ0YWlsIiwiY3JlYXRlU25ha2UiLCJpbml0aWFsRHJhdyIsImRyYXciLCJTbmFrZSIsImZvckVhY2giLCJib2R5IiwicG9zaXRpb24iLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJzbmFrZSIsImluaXRpYWxDb3VudCIsInVuaXQiLCJoZWlnaHQiLCJwdXNoIiwiQm9keV8xIiwiaSIsIkNhbnZhc18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Snake.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    snake: {\n      domSelector: \"#snake\",\n      ctx: \"2d\"\n    },\n    food: {\n      domSelector: \"#food\",\n      ctx: \"2d\"\n    },\n    fps: 4\n  },\n  snake: {\n    unit: 20,\n    color: \"#252422\",\n    initialCount: 6,\n    borderWidth: 3\n  },\n  food: {\n    radius: 10,\n    color: \"#EB5E28\"\n  },\n  score: {\n    domSelector: \".game__score span\"\n  },\n  forms: {\n    domSelector: \".game__play\",\n    messageSelector: \".game__play__message\",\n    inputSelector: \".game__play__score\",\n    hideClass: \"hide\",\n    messages: {\n      selfEating: \"Oh non ! Le serpent s'est mordu la queue...\",\n      goOut: \"Oh non ! Le serpent s’est pris la tête dans le mur...\"\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztFQUNwQkMsTUFBTSxFQUFFO0lBQ0pDLEtBQUssRUFBRTtNQUFDQyxXQUFXLEVBQUUsUUFBZDtNQUF3QkMsR0FBRyxFQUFFO0lBQTdCLENBREg7SUFFSkMsSUFBSSxFQUFFO01BQUNGLFdBQVcsRUFBRSxPQUFkO01BQXVCQyxHQUFHLEVBQUU7SUFBNUIsQ0FGRjtJQUdKRSxHQUFHLEVBQUU7RUFIRCxDQURZO0VBTXBCSixLQUFLLEVBQUU7SUFDSEssSUFBSSxFQUFFLEVBREg7SUFFSEMsS0FBSyxFQUFFLFNBRko7SUFHSEMsWUFBWSxFQUFFLENBSFg7SUFJSEMsV0FBVyxFQUFFO0VBSlYsQ0FOYTtFQVlwQkwsSUFBSSxFQUFFO0lBQUNNLE1BQU0sRUFBRSxFQUFUO0lBQWFILEtBQUssRUFBRTtFQUFwQixDQVpjO0VBYXBCSSxLQUFLLEVBQUU7SUFDSFQsV0FBVyxFQUFFO0VBRFYsQ0FiYTtFQWdCcEJVLEtBQUssRUFBRTtJQUNIVixXQUFXLEVBQUUsYUFEVjtJQUVIVyxlQUFlLEVBQUUsc0JBRmQ7SUFHSEMsYUFBYSxFQUFFLG9CQUhaO0lBSUhDLFNBQVMsRUFBRSxNQUpSO0lBS0hDLFFBQVEsRUFBRTtNQUNOQyxVQUFVLEVBQUUsNkNBRE47TUFFTkMsS0FBSyxFQUFFO0lBRkQ7RUFMUDtBQWhCYSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBjYW52YXM6IHtcbiAgICAgICAgc25ha2U6IHtkb21TZWxlY3RvcjogXCIjc25ha2VcIiwgY3R4OiBcIjJkXCJ9LFxuICAgICAgICBmb29kOiB7ZG9tU2VsZWN0b3I6IFwiI2Zvb2RcIiwgY3R4OiBcIjJkXCJ9LFxuICAgICAgICBmcHM6IDRcbiAgICB9LFxuICAgIHNuYWtlOiB7XG4gICAgICAgIHVuaXQ6IDIwLFxuICAgICAgICBjb2xvcjogXCIjMjUyNDIyXCIsXG4gICAgICAgIGluaXRpYWxDb3VudDogNixcbiAgICAgICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgfSxcbiAgICBmb29kOiB7cmFkaXVzOiAxMCwgY29sb3I6IFwiI0VCNUUyOFwifSxcbiAgICBzY29yZToge1xuICAgICAgICBkb21TZWxlY3RvcjogXCIuZ2FtZV9fc2NvcmUgc3BhblwiXG4gICAgfSxcbiAgICBmb3Jtczoge1xuICAgICAgICBkb21TZWxlY3RvcjogXCIuZ2FtZV9fcGxheVwiLFxuICAgICAgICBtZXNzYWdlU2VsZWN0b3I6IFwiLmdhbWVfX3BsYXlfX21lc3NhZ2VcIixcbiAgICAgICAgaW5wdXRTZWxlY3RvcjogXCIuZ2FtZV9fcGxheV9fc2NvcmVcIixcbiAgICAgICAgaGlkZUNsYXNzOiBcImhpZGVcIixcbiAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgIHNlbGZFYXRpbmc6IFwiT2ggbm9uICEgTGUgc2VycGVudCBzJ2VzdCBtb3JkdSBsYSBxdWV1ZS4uLlwiLFxuICAgICAgICAgICAgZ29PdXQ6IFwiT2ggbm9uICEgTGUgc2VycGVudCBz4oCZZXN0IHByaXMgbGEgdMOqdGUgZGFucyBsZSBtdXIuLi5cIixcbiAgICAgICAgfSxcbiAgICB9XG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJzbmFrZSIsImRvbVNlbGVjdG9yIiwiY3R4IiwiZm9vZCIsImZwcyIsInVuaXQiLCJjb2xvciIsImluaXRpYWxDb3VudCIsImJvcmRlcldpZHRoIiwicmFkaXVzIiwic2NvcmUiLCJmb3JtcyIsIm1lc3NhZ2VTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJoaWRlQ2xhc3MiLCJtZXNzYWdlcyIsInNlbGZFYXRpbmciLCJnb091dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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