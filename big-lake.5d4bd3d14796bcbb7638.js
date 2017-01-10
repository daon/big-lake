/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/big-lake";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = exports.Vector = function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _bigLake = __webpack_require__(3);

var canvas = document.getElementById('canvas');
var bigLake = new _bigLake.BigLake(canvas);
bigLake.start();

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BigLake = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BigLake = exports.BigLake = function () {
    function BigLake(canvas) {
        var _this = this;

        _classCallCheck(this, BigLake);

        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this._particles = [];

        for (var i = 0; i <= 500; i++) {
            var particle = new _particle.Particle();
            particle.position.y = -particle.size.y * Math.random() | 0;
            particle.position.x += particle.size.x * (i % 60);
            particle.velocity.y = -2 * Math.random() | 0;
            particle.color.red = 255 * Math.random() | 0;
            particle.color.green = 255 * Math.random() | 0;
            particle.color.red = 255 * Math.random() | 0;
            this._particles.push(particle);
        }

        var lastTime = void 0;
        this._frameCallback = function (millis) {
            if (lastTime !== null) {
                var diff = millis - lastTime;
                _this.update(diff / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(_this._frameCallback);
        };
    }

    _createClass(BigLake, [{
        key: 'clear',
        value: function clear() {
            this._context.fillStyle = '#000';
            this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
        }
    }, {
        key: 'draw',
        value: function draw() {
            var _this2 = this;

            this.clear();

            this._particles.forEach(function (particle) {
                return _this2.drawRectangle(particle);
            });
        }
    }, {
        key: 'drawRectangle',
        value: function drawRectangle(rectangle) {
            this._context.fillStyle = rectangle.color.rgb;
            this._context.fillRect(rectangle.left, rectangle.top, rectangle.size.x, rectangle.size.y);
        }
    }, {
        key: 'start',
        value: function start() {
            requestAnimationFrame(this._frameCallback);
        }
    }, {
        key: 'update',
        value: function update(dt) {
            var canvas = this._canvas;

            this._particles.forEach(function (particle) {
                particle.position.y += particle.velocity.y;

                if (particle.position.y > canvas.height - particle.size.y) {
                    particle.position.y = -particle.size.y;
                    particle.velocity.y = -2 * Math.random() | 0;
                }

                particle.velocity.y += 2;
            });
            this.draw();
        }
    }]);

    return BigLake;
}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = exports.Color = function () {
    function Color() {
        var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, Color);

        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    _createClass(Color, [{
        key: "rgb",
        get: function get() {
            return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
        }
    }, {
        key: "hex",
        get: function get() {
            return "#" + this.red.toString(16) + this.green.toString(16) + this.blue.toString(16);
        }
    }]);

    return Color;
}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Particle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _rectangle = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Particle = exports.Particle = function (_Rectangle) {
    _inherits(Particle, _Rectangle);

    function Particle() {
        _classCallCheck(this, Particle);

        var _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, 10, 10));

        _this.velocity = new _vector.Vector();
        return _this;
    }

    _createClass(Particle, [{
        key: 'left',
        get: function get() {
            return this.position.x - this.size.x / 2;
        }
    }, {
        key: 'right',
        get: function get() {
            return this.position.x + this.size.x / 2;
        }
    }, {
        key: 'top',
        get: function get() {
            return this.position.y - this.size.y / 2;
        }
    }, {
        key: 'bottom',
        get: function get() {
            return this.position.y + this.size.y / 2;
        }
    }]);

    return Particle;
}(_rectangle.Rectangle);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rectangle = undefined;

var _vector = __webpack_require__(0);

var _color = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = exports.Rectangle = function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Rectangle);

    this.position = new _vector.Vector(0, 0);
    this.size = new _vector.Vector(x, y);
    this.color = new _color.Color();
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);
__webpack_require__(1);

/***/ }
/******/ ]);