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

eval("\n\nexports.__esModule = true;\nexports.Game = void 0;\n\nvar Snake_1 = __webpack_require__(/*! ../Models/Snake */ \"./src/js/Models/Snake.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ../Models/Animation */ \"./src/js/Models/Animation.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Game = function () {\n  function Game() {\n    this.previous = {\n      direction: 0\n    };\n    this.formPlay = document.querySelector('.game__play');\n    this.snakeCanvas = document.querySelector('.game__canvas-container__snake');\n    this.snakeCtx = this.snakeCanvas.getContext('2d');\n    this.snake = new Snake_1.Snake(this.snakeCanvas, this.snakeCtx, this.current, this.apples, this.score, this.replay, this);\n    this.addEventListeners();\n    this.status = {\n      start: false\n    };\n    this.animation = new Animation_1.Animation(this.status, this.snake);\n  }\n\n  Game.prototype.addEventListeners = function () {\n    this.reset(new SubmitEvent('reset', {\n      submitter: this.formPlay\n    }));\n  };\n\n  Game.prototype.reset = function (event) {\n    var _this = this;\n\n    event.preventDefault();\n    event.submitter.addEventListener('submit', function () {\n      _this.previous = {\n        direction: 0\n      };\n\n      _this.formPlay.classList.add('hide');\n\n      _this.animation.status = {\n        start: true\n      };\n\n      _this.snake.tail.forEach(function (body) {\n        body.clear();\n      });\n\n      _this.snake.tail = [];\n\n      _this.snake.createSnake();\n\n      _this.snake.initialDraw();\n\n      _this.snake.animate = true;\n\n      _this.animation.animate();\n    });\n  };\n\n  Game.prototype.replay = function (message) {\n    document.querySelector(settings_1.settings.forms.domSelector).classList.remove('hide');\n  };\n\n  return Game;\n}();\n\nexports.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQ29udHJvbGxlci9HYW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBSUE7O0FBR0E7RUFnQkk7SUFDSSxLQUFLQSxRQUFMLEdBQWdCO01BQUNDLFNBQVMsRUFBRTtJQUFaLENBQWhCO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWhCO0lBRUEsS0FBS0MsV0FBTCxHQUFtQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdDQUF2QixDQUFuQjtJQUNBLEtBQUtFLFFBQUwsR0FBZ0IsS0FBS0QsV0FBTCxDQUFpQkUsVUFBakIsQ0FBNEIsSUFBNUIsQ0FBaEI7SUFDQSxLQUFLQyxLQUFMLEdBQWEsSUFBSUMsYUFBSixDQUFVLEtBQUtKLFdBQWYsRUFBNEIsS0FBS0MsUUFBakMsRUFBMkMsS0FBS0ksT0FBaEQsRUFBeUQsS0FBS0MsTUFBOUQsRUFBc0UsS0FBS0MsS0FBM0UsRUFBa0YsS0FBS0MsTUFBdkYsRUFBK0YsSUFBL0YsQ0FBYjtJQUNBLEtBQUtDLGlCQUFMO0lBRUEsS0FBS0MsTUFBTCxHQUFjO01BQUNDLEtBQUssRUFBRTtJQUFSLENBQWQ7SUFFQSxLQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWMsS0FBS0gsTUFBbkIsRUFBMkIsS0FBS1AsS0FBaEMsQ0FBakI7RUFDSDs7RUFFRFc7SUFDSSxLQUFLQyxLQUFMLENBQVcsSUFBSUMsV0FBSixDQUFnQixPQUFoQixFQUF5QjtNQUFDQyxTQUFTLEVBQUUsS0FBS3BCO0lBQWpCLENBQXpCLENBQVg7RUFFSCxDQUhEOztFQUtRaUIsdUJBQVIsVUFBY0ksS0FBZCxFQUFnQztJQUFoQzs7SUFDSUEsS0FBSyxDQUFDQyxjQUFOO0lBQ0FELEtBQUssQ0FBQ0QsU0FBTixDQUFnQkcsZ0JBQWhCLENBQWlDLFFBQWpDLEVBQTJDO01BQ3ZDQyxLQUFJLENBQUMxQixRQUFMLEdBQWdCO1FBQUNDLFNBQVMsRUFBRTtNQUFaLENBQWhCOztNQUNBeUIsS0FBSSxDQUFDeEIsUUFBTCxDQUFjeUIsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7O01BRUFGLEtBQUksQ0FBQ1QsU0FBTCxDQUFlRixNQUFmLEdBQXdCO1FBQUNDLEtBQUssRUFBRTtNQUFSLENBQXhCOztNQUVBVSxLQUFJLENBQUNsQixLQUFMLENBQVdxQixJQUFYLENBQWdCQyxPQUFoQixDQUF3QixVQUFDQyxJQUFELEVBQVc7UUFDL0JBLElBQUksQ0FBQ0MsS0FBTDtNQUNILENBRkQ7O01BSUFOLEtBQUksQ0FBQ2xCLEtBQUwsQ0FBV3FCLElBQVgsR0FBa0IsRUFBbEI7O01BQ0FILEtBQUksQ0FBQ2xCLEtBQUwsQ0FBV3lCLFdBQVg7O01BQ0FQLEtBQUksQ0FBQ2xCLEtBQUwsQ0FBVzBCLFdBQVg7O01BQ0FSLEtBQUksQ0FBQ2xCLEtBQUwsQ0FBVzJCLE9BQVgsR0FBcUIsSUFBckI7O01BRUFULEtBQUksQ0FBQ1QsU0FBTCxDQUFla0IsT0FBZjtJQUNILENBaEJEO0VBaUJILENBbkJPOztFQXFCUmhCLGtDQUFPaUIsT0FBUCxFQUFzQjtJQUNsQmpDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QmlDLG9CQUFTQyxLQUFULENBQWVDLFdBQXRDLEVBQW1EWixTQUFuRCxDQUE2RGEsTUFBN0QsQ0FBb0UsTUFBcEU7RUFDSCxDQUZEOztFQUlKO0FBQUMsQ0E1REQ7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9Db250cm9sbGVyL0dhbWUudHM/OGExYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NuYWtlfSBmcm9tIFwiLi4vTW9kZWxzL1NuYWtlXCI7XG5pbXBvcnQge0FuaW1hdGlvbn0gZnJvbSBcIi4uL01vZGVscy9BbmltYXRpb25cIjtcbmltcG9ydCB7ZGlyZWN0aW9ufSBmcm9tIFwiLi4vVHlwZXMvZGlyZWN0aW9uXCI7XG5pbXBvcnQge0FwcGxlfSBmcm9tIFwiLi4vTW9kZWxzL0FwcGxlXCI7XG5pbXBvcnQge1Njb3JlfSBmcm9tIFwiLi4vTW9kZWxzL1Njb3JlXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7Qm9keX0gZnJvbSBcIi4uL01vZGVscy9Cb2R5XCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb29kQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlOiBTbmFrZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGlvbjogQW5pbWF0aW9uO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhdHVzOiB7IHN0YXJ0OiBib29sZWFuIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50OiB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBsZXM6IEFwcGxlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb29kQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZTogU2NvcmU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtUGxheTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgcHJldmlvdXM6IHsgZGlyZWN0aW9uOiBudW1iZXIgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzID0ge2RpcmVjdGlvbjogMH07XG4gICAgICAgIHRoaXMuZm9ybVBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fcGxheScpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgICAgICB0aGlzLnNuYWtlQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2NhbnZhcy1jb250YWluZXJfX3NuYWtlJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuc25ha2VDdHggPSB0aGlzLnNuYWtlQ2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKHRoaXMuc25ha2VDYW52YXMsIHRoaXMuc25ha2VDdHgsIHRoaXMuY3VycmVudCwgdGhpcy5hcHBsZXMsIHRoaXMuc2NvcmUsIHRoaXMucmVwbGF5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuc3RhdHVzID0ge3N0YXJ0OiBmYWxzZX1cblxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5zdGF0dXMsIHRoaXMuc25ha2UpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucmVzZXQobmV3IFN1Ym1pdEV2ZW50KCdyZXNldCcsIHtzdWJtaXR0ZXI6IHRoaXMuZm9ybVBsYXl9KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0KGV2ZW50OiBTdWJtaXRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdWJtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91cyA9IHtkaXJlY3Rpb246IDB9O1xuICAgICAgICAgICAgdGhpcy5mb3JtUGxheS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0YXR1cyA9IHtzdGFydDogdHJ1ZX1cblxuICAgICAgICAgICAgdGhpcy5zbmFrZS50YWlsLmZvckVhY2goKGJvZHk6IEJvZHkpID0+IHtcbiAgICAgICAgICAgICAgICBib2R5LmNsZWFyKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zbmFrZS50YWlsID0gW107XG4gICAgICAgICAgICB0aGlzLnNuYWtlLmNyZWF0ZVNuYWtlKCk7XG4gICAgICAgICAgICB0aGlzLnNuYWtlLmluaXRpYWxEcmF3KCk7XG4gICAgICAgICAgICB0aGlzLnNuYWtlLmFuaW1hdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5hbmltYXRlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXBsYXkobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MuZm9ybXMuZG9tU2VsZWN0b3IpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsicHJldmlvdXMiLCJkaXJlY3Rpb24iLCJmb3JtUGxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNuYWtlQ2FudmFzIiwic25ha2VDdHgiLCJnZXRDb250ZXh0Iiwic25ha2UiLCJTbmFrZV8xIiwiY3VycmVudCIsImFwcGxlcyIsInNjb3JlIiwicmVwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzdGF0dXMiLCJzdGFydCIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbl8xIiwiR2FtZSIsInJlc2V0IiwiU3VibWl0RXZlbnQiLCJzdWJtaXR0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiY2xhc3NMaXN0IiwiYWRkIiwidGFpbCIsImZvckVhY2giLCJib2R5IiwiY2xlYXIiLCJjcmVhdGVTbmFrZSIsImluaXRpYWxEcmF3IiwiYW5pbWF0ZSIsIm1lc3NhZ2UiLCJzZXR0aW5nc18xIiwiZm9ybXMiLCJkb21TZWxlY3RvciIsInJlbW92ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Controller/Game.ts\n");

/***/ }),

/***/ "./src/js/Models/Animation.ts":
/*!************************************!*\
  !*** ./src/js/Models/Animation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Animation = function () {\n  function Animation(status, snake) {\n    var _this = this;\n\n    this.iDrawables = [];\n    this.last = performance.now();\n    this.now = performance.now();\n    this.status = status;\n    this.snake = snake;\n    this.canPush = false;\n    this.snake.tail.forEach(function (body) {\n      _this.addIDrawable(body);\n    });\n  }\n\n  Animation.prototype.addIDrawable = function (iDrawable) {\n    this.iDrawables.push(iDrawable);\n  };\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    if (this.status.start) {\n      if (this.now - this.last > 1000 / settings_1.settings.canvas.fps) {\n        this.canPush = true;\n        this.snake.update();\n        this.last = this.now;\n      }\n\n      this.now = performance.now();\n      window.requestAnimationFrame(function () {\n        _this.animate();\n      });\n    }\n  };\n\n  Animation.prototype.clear = function () {\n    this.iDrawables.forEach(function (iDrawable) {\n      return iDrawable.clear();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0FuaW1hdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUdBO0VBUUksbUJBQVlBLE1BQVosRUFBd0NDLEtBQXhDLEVBQW9EO0lBQXBEOztJQUNJLEtBQUtDLFVBQUwsR0FBa0IsRUFBbEI7SUFDQSxLQUFLQyxJQUFMLEdBQVlDLFdBQVcsQ0FBQ0MsR0FBWixFQUFaO0lBQ0EsS0FBS0EsR0FBTCxHQUFXRCxXQUFXLENBQUNDLEdBQVosRUFBWDtJQUNBLEtBQUtMLE1BQUwsR0FBY0EsTUFBZDtJQUVBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUVBLEtBQUtLLE9BQUwsR0FBZSxLQUFmO0lBRUEsS0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCQyxPQUFoQixDQUF3QixVQUFDQyxJQUFELEVBQUs7TUFDekJDLEtBQUksQ0FBQ0MsWUFBTCxDQUFrQkYsSUFBbEI7SUFDSCxDQUZEO0VBR0g7O0VBRURHLDZDQUFhQyxTQUFiLEVBQWlDO0lBQzdCLEtBQUtYLFVBQUwsQ0FBZ0JZLElBQWhCLENBQXFCRCxTQUFyQjtFQUNILENBRkQ7O0VBSUFEO0lBQUE7O0lBQ0ksSUFBSSxLQUFLWixNQUFMLENBQVllLEtBQWhCLEVBQXVCO01BQ25CLElBQUksS0FBS1YsR0FBTCxHQUFXLEtBQUtGLElBQWhCLEdBQXVCLE9BQU9hLG9CQUFTQyxNQUFULENBQWdCQyxHQUFsRCxFQUF1RDtRQUNuRCxLQUFLWixPQUFMLEdBQWUsSUFBZjtRQUVBLEtBQUtMLEtBQUwsQ0FBV2tCLE1BQVg7UUFFQSxLQUFLaEIsSUFBTCxHQUFZLEtBQUtFLEdBQWpCO01BQ0g7O01BQ0QsS0FBS0EsR0FBTCxHQUFXRCxXQUFXLENBQUNDLEdBQVosRUFBWDtNQUNBZSxNQUFNLENBQUNDLHFCQUFQLENBQTZCO1FBQ3pCWCxLQUFJLENBQUNZLE9BQUw7TUFDSCxDQUZEO0lBR0g7RUFDSixDQWREOztFQWdCQVY7SUFDSSxLQUFLVixVQUFMLENBQWdCTSxPQUFoQixDQUF3QixVQUFDSyxTQUFELEVBQXFCO01BQUssZ0JBQVMsQ0FBQ1UsS0FBVjtJQUFpQixDQUFuRTtFQUNILENBRkQ7O0VBR0o7QUFBQyxDQTlDRDs7QUFBYUMsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9Nb2RlbHMvQW5pbWF0aW9uLnRzPzhkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRHJhd2FibGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lEcmF3YWJsZVwiO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5pbXBvcnQge1NuYWtlfSBmcm9tIFwiLi9TbmFrZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlEcmF3YWJsZXM6IElEcmF3YWJsZVtdO1xuICAgIHN0YXR1czogeyBzdGFydDogYm9vbGVhbiB9O1xuICAgIHByaXZhdGUgbGFzdDogRE9NSGlnaFJlc1RpbWVTdGFtcDtcbiAgICBwcml2YXRlIG5vdzogRE9NSGlnaFJlc1RpbWVTdGFtcDtcbiAgICBzbmFrZTogU25ha2U7XG4gICAgY2FuUHVzaDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXR1czogeyBzdGFydDogYm9vbGVhbiB9LCBzbmFrZTogU25ha2UpIHtcbiAgICAgICAgdGhpcy5pRHJhd2FibGVzID0gW107XG4gICAgICAgIHRoaXMubGFzdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcblxuICAgICAgICB0aGlzLnNuYWtlID0gc25ha2U7XG5cbiAgICAgICAgdGhpcy5jYW5QdXNoID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zbmFrZS50YWlsLmZvckVhY2goKGJvZHkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkSURyYXdhYmxlKGJvZHkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZElEcmF3YWJsZShpRHJhd2FibGU6IElEcmF3YWJsZSkge1xuICAgICAgICB0aGlzLmlEcmF3YWJsZXMucHVzaChpRHJhd2FibGUpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5zdGFydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm93IC0gdGhpcy5sYXN0ID4gMTAwMCAvIHNldHRpbmdzLmNhbnZhcy5mcHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhblB1c2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaURyYXdhYmxlcy5mb3JFYWNoKChpRHJhd2FibGU6IElEcmF3YWJsZSkgPT4gaURyYXdhYmxlLmRyYXcoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5ub3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmlEcmF3YWJsZXMuZm9yRWFjaCgoaURyYXdhYmxlOiBJRHJhd2FibGUpID0+IGlEcmF3YWJsZS5jbGVhcigpKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbInN0YXR1cyIsInNuYWtlIiwiaURyYXdhYmxlcyIsImxhc3QiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhblB1c2giLCJ0YWlsIiwiZm9yRWFjaCIsImJvZHkiLCJfdGhpcyIsImFkZElEcmF3YWJsZSIsIkFuaW1hdGlvbiIsImlEcmF3YWJsZSIsInB1c2giLCJzdGFydCIsInNldHRpbmdzXzEiLCJjYW52YXMiLCJmcHMiLCJ1cGRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwiY2xlYXIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Models/Animation.ts\n");

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

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Snake = void 0;\n\nvar Body_1 = __webpack_require__(/*! ./Body */ \"./src/js/Models/Body.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/js/Models/Canvas.ts\");\n\nvar Snake = function (_super) {\n  __extends(Snake, _super);\n\n  function Snake(canvas, ctx, current, apples, score, replay, game) {\n    var _this = _super.call(this, canvas, ctx, {\n      x: 0,\n      y: 0\n    }) || this;\n\n    _this.animate = false;\n    _this.game = game;\n    _this.tail = [];\n\n    _this.createSnake();\n\n    _this.initialDraw();\n\n    _this.draw();\n\n    return _this;\n  }\n\n  Snake.prototype.initialDraw = function () {\n    var _this = this;\n\n    this.current = {\n      direction: 0\n    };\n    this.tail.forEach(function (body) {\n      body.position.x += _this.canvas.width / 2 + settings_1.settings.snake.initialCount / 2 * settings_1.settings.snake.unit - settings_1.settings.snake.unit;\n      body.position.y += _this.canvas.height / 2;\n    });\n    this.draw();\n  };\n\n  Snake.prototype.draw = function () {\n    this.tail.forEach(function (body) {\n      body.draw();\n    });\n  };\n\n  Snake.prototype.update = function () {\n    this.tail.forEach(function (body) {\n      body.clear();\n    });\n\n    if (this.current.direction === 0) {\n      this.getPreviousPosition();\n      this.tail[0].position.x += settings_1.settings.snake.unit;\n    }\n\n    this.draw();\n  };\n\n  Snake.prototype.getPreviousPosition = function () {\n    for (var i = this.tail.length - 1; i > 0; i--) {\n      this.tail[i].position.x = this.tail[i - 1].position.x;\n      this.tail[i].position.y = this.tail[i - 1].position.y;\n    }\n  };\n\n  Snake.prototype.isGoingOutside = function () {};\n\n  Snake.prototype.isEating = function () {};\n\n  Snake.prototype.isBitingItsTail = function () {};\n\n  Snake.prototype.clear = function () {\n    this.tail.forEach(function (body) {\n      body.clear();\n    });\n  };\n\n  Snake.prototype.createSnake = function () {\n    this.tail.push(new Body_1.Body(this.canvas, this.ctx, {\n      x: this.position.x,\n      y: this.position.y\n    }));\n\n    for (var i = 1; i < settings_1.settings.snake.initialCount; i++) {\n      this.tail.push(new Body_1.Body(this.canvas, this.ctx, {\n        x: this.tail[i - 1].position.x - settings_1.settings.snake.unit,\n        y: this.tail[i - 1].position.y\n      }));\n    }\n  };\n\n  return Snake;\n}(Canvas_1.Canvas);\n\nexports.Snake = Snake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUw7SUFDSCxDQUZEO0VBR0gsQ0FKRDs7RUFNQVg7SUFDSSxLQUFLSixJQUFMLENBQVVtQixJQUFWLENBQWUsSUFBSUMsV0FBSixDQUFTLEtBQUtoQyxNQUFkLEVBQXNCLEtBQUtDLEdBQTNCLEVBQWdDO01BQUNPLENBQUMsRUFBRSxLQUFLWSxRQUFMLENBQWNaLENBQWxCO01BQXFCQyxDQUFDLEVBQUUsS0FBS1csUUFBTCxDQUFjWDtJQUF0QyxDQUFoQyxDQUFmOztJQUVBLEtBQUssSUFBSW9CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLG9CQUFTQyxLQUFULENBQWVDLFlBQW5DLEVBQWlESyxDQUFDLEVBQWxELEVBQXNEO01BQ2xELEtBQUtqQixJQUFMLENBQVVtQixJQUFWLENBQWUsSUFBSUMsV0FBSixDQUFTLEtBQUtoQyxNQUFkLEVBQXNCLEtBQUtDLEdBQTNCLEVBQWdDO1FBQzNDTyxDQUFDLEVBQUUsS0FBS0ksSUFBTCxDQUFVaUIsQ0FBQyxHQUFHLENBQWQsRUFBaUJULFFBQWpCLENBQTBCWixDQUExQixHQUE4QmMsb0JBQVNDLEtBQVQsQ0FBZUUsSUFETDtRQUUzQ2hCLENBQUMsRUFBRSxLQUFLRyxJQUFMLENBQVVpQixDQUFDLEdBQUcsQ0FBZCxFQUFpQlQsUUFBakIsQ0FBMEJYO01BRmMsQ0FBaEMsQ0FBZjtJQUlIO0VBQ0osQ0FURDs7RUFVSjtBQUFDLENBMUZELENBQTJCd0IsZUFBM0I7O0FBQWFDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9Nb2RlbHMvU25ha2UudHM/YjQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JvZHl9IGZyb20gXCIuL0JvZHlcIjtcbmltcG9ydCB7ZGlyZWN0aW9ufSBmcm9tIFwiLi4vVHlwZXMvZGlyZWN0aW9uXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7cG9zaXRpb259IGZyb20gXCIuLi9UeXBlcy9wb3NpdGlvblwiO1xuaW1wb3J0IHtBcHBsZX0gZnJvbSBcIi4vQXBwbGVcIjtcbmltcG9ydCB7U2NvcmV9IGZyb20gXCIuL1Njb3JlXCI7XG5pbXBvcnQge2NvbXBhcmV9IGZyb20gXCIuLi9IZWxwZXJzL2NvbXBhcmVcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgU25ha2UgZXh0ZW5kcyBDYW52YXMge1xuICAgIGN1cnJlbnQ6IHsgZGlyZWN0aW9uOiBkaXJlY3Rpb24gfTtcbiAgICB0YWlsOiBCb2R5W107XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBsZXM6IEFwcGxlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZTogU2NvcmU7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXBsYXk6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGdhbWU6IEdhbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY3VycmVudDogeyBkaXJlY3Rpb246IGRpcmVjdGlvbiB9LCBhcHBsZXM6IEFwcGxlW10sIHNjb3JlOiBTY29yZSwgcmVwbGF5OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkLCBnYW1lOkdhbWUpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMudGFpbD0gW107XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTbmFrZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbERyYXcoKTtcblxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuICAgIGluaXRpYWxEcmF3KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB7ZGlyZWN0aW9uOiAwfVxuICAgICAgICB0aGlzLnRhaWwuZm9yRWFjaCgoYm9keSkgPT4ge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IHRoaXMuY2FudmFzLndpZHRoIC8gMiArIHNldHRpbmdzLnNuYWtlLmluaXRpYWxDb3VudCAvIDIgKiBzZXR0aW5ncy5zbmFrZS51bml0IC0gc2V0dGluZ3Muc25ha2UudW5pdDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy50YWlsLmZvckVhY2goKGJvZHkpID0+IHtcbiAgICAgICAgICAgIGJvZHkuZHJhdygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50YWlsLmZvckVhY2goKGJvZHkpID0+IHtcbiAgICAgICAgICAgIGJvZHkuY2xlYXIoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQuZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdldFByZXZpb3VzUG9zaXRpb24oKVxuICAgICAgICAgICAgdGhpcy50YWlsWzBdLnBvc2l0aW9uLnggKz0gc2V0dGluZ3Muc25ha2UudW5pdFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcmV2aW91c1Bvc2l0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy50YWlsLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMudGFpbFtpXS5wb3NpdGlvbi54ID0gdGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgdGhpcy50YWlsW2ldLnBvc2l0aW9uLnkgPSB0aGlzLnRhaWxbaSAtIDFdLnBvc2l0aW9uLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzR29pbmdPdXRzaWRlKCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0VhdGluZygpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaXNCaXRpbmdJdHNUYWlsKCkge1xuXG4gICAgfVxuXG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy50YWlsLmZvckVhY2goKGJvZHkpID0+IHtcbiAgICAgICAgICAgIGJvZHkuY2xlYXIoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVNuYWtlKCkge1xuICAgICAgICB0aGlzLnRhaWwucHVzaChuZXcgQm9keSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHt4OiB0aGlzLnBvc2l0aW9uLngsIHk6IHRoaXMucG9zaXRpb24ueX0pKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2V0dGluZ3Muc25ha2UuaW5pdGlhbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFpbC5wdXNoKG5ldyBCb2R5KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMudGFpbFtpIC0gMV0ucG9zaXRpb24ueCAtIHNldHRpbmdzLnNuYWtlLnVuaXQsXG4gICAgICAgICAgICAgICAgeTogdGhpcy50YWlsW2kgLSAxXS5wb3NpdGlvbi55XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJjYW52YXMiLCJjdHgiLCJjdXJyZW50IiwiYXBwbGVzIiwic2NvcmUiLCJyZXBsYXkiLCJnYW1lIiwiX3N1cGVyIiwieCIsInkiLCJfdGhpcyIsImFuaW1hdGUiLCJ0YWlsIiwiY3JlYXRlU25ha2UiLCJpbml0aWFsRHJhdyIsImRyYXciLCJTbmFrZSIsImRpcmVjdGlvbiIsImZvckVhY2giLCJib2R5IiwicG9zaXRpb24iLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJzbmFrZSIsImluaXRpYWxDb3VudCIsInVuaXQiLCJoZWlnaHQiLCJjbGVhciIsImdldFByZXZpb3VzUG9zaXRpb24iLCJpIiwibGVuZ3RoIiwicHVzaCIsIkJvZHlfMSIsIkNhbnZhc18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Snake.ts\n");

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