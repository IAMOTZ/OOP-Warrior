/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create an OOP implementation by modelling a real-world scenario/problem, 
// while taking advantage of inheritance, 
// encapsulation, polymorphism and the other OOP concepts. Push this solution to GitHub. 

var Human = function () {
    function Human() {
        _classCallCheck(this, Human);

        this._status = 'alive';
        this._strength = 2;
        this._task = 'seeking for survival';
    }

    _createClass(Human, [{
        key: 'eat',
        value: function eat(food) {
            console.log('i just eat ' + food);
            this._strength += 2;
        }
    }, {
        key: 'sleep',
        value: function sleep(time) {
            console.log('i slept for ' + time);
        }
    }, {
        key: 'strength',
        get: function get() {
            return this._strength;
        },
        set: function set(value) {
            this._strength += value;
        }
    }, {
        key: 'task',
        get: function get() {
            return this._task;
        },
        set: function set(message) {
            this._task = message;
        }
    }], [{
        key: 'noOfHuman',
        value: function noOfHuman() {
            // if i can create a private property, then this should help me monotor the no of himan
        }
    }]);

    return Human;
}();

var Male = function (_Human) {
    _inherits(Male, _Human);

    // a man basically just have a name, age and tribe
    // all his action is still the same as that of the human
    function Male(name, age, tribe) {
        _classCallCheck(this, Male);

        var _this = _possibleConstructorReturn(this, (Male.__proto__ || Object.getPrototypeOf(Male)).call(this));

        _this._name = name;
        _this._age = age;
        _this._tribe = tribe;
        _this._strength = 5;
        return _this;
    }

    _createClass(Male, [{
        key: 'name',
        get: function get() {
            return this_.name;
        }
    }, {
        key: 'age',
        get: function get() {
            return this._age;
        }
    }, {
        key: 'tribe',
        get: function get() {
            return this._tribe;
        }
    }]);

    return Male;
}(Human);

module.exports.Warrior = function (_Male) {
    _inherits(_class, _Male);

    function _class(name, age, tribe, post) {
        _classCallCheck(this, _class);

        var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, name, age, tribe));

        _this2._post = post;
        _this2._strength = 10;
        _this2._noOfKilled = 0;
        return _this2;
    }

    _createClass(_class, [{
        key: 'kill',


        // Behaviours:
        value: function kill(enemy) {
            enemy.strength = -enemy.strength;
            enemy.task = 'To be with my ancestors';
            this.noOfKilled++;
        }
    }, {
        key: 'fight',
        value: function fight(enemy) {
            this._strength -= 1;
            enemy.strength -= 1;
        }
    }, {
        key: 'giveOrder',
        value: function giveOrder(message, surbodinate) {
            surbodinate.task = message;
        }
    }, {
        key: 'train',
        value: function train() {
            this._strength -= 1;
        }
    }, {
        key: 'report',
        value: function report() {
            return 'I am ' + this._post + ' ' + this._name + ' and i am from tribe ' + this._tribe + '. \n I have a task: ' + this._task + '.';
        }
    }, {
        key: 'dismiss',
        value: function dismiss(surbodinate) {
            surbodinate.post = 'dismissed';
        }
    }, {
        key: 'post',
        get: function get() {
            return this._post;
        },
        set: function set(post) {
            this._post = post;
        }
    }, {
        key: 'noOfKilled',
        get: function get() {
            return this._noOfKilled;
        },
        set: function set(value) {
            this._noOfKilled += value;
        }
    }, {
        key: 'status',
        get: function get() {
            if (this._strength >= 10) {
                return 'Healthy and strong';
            } else if (this._strength >= 1) {
                return 'Weak and injured';
            } else if (this._strength <= 0) {
                return 'dead';
            }
        }
    }]);

    return _class;
}(Male);

// let warriorA = new Warrior('Ogunniyi', 20, 'gaya', 'general');
// let warriorB = new Warrior('Tunmise', 17, 'zuli', 'commander');
// warriorA.kill(warriorB);
// console.log(warriorB.status);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map