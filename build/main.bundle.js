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


var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// i might have to change the entry point of the app to point to the es5 version of the app
// i would alos need to tell moca to take its file as the es5 version 

// Create an OOP implementation by modelling a real-world scenario/problem, 
// while taking advantage of inheritance, 
// encapsulation, polymorphism and the other OOP concepts. Push this solution to GitHub. 

var Human = function () {
    // constructor(){
    //     this.status = 'alive';
    //     this.strength = 2;
    //     this.task = 'seeking for survival';
    // }
    function Human(name, age, tribe) {
        _classCallCheck(this, Human);

        // super();
        this.name = name;
        this.age = age;
        this.tribe = tribe;
        this.strength = 5;
        this.status = 'alive';
        this.strength = 2;
        this.task = 'seeking for survival';
    }

    _createClass(Human, [{
        key: 'eat',
        value: function eat(food) {
            console.log('i just eat ' + food);
            this.strength += 2;
        }
    }, {
        key: 'sleep',
        value: function sleep(time) {
            console.log('i slept for ' + time);
        }
    }, {
        key: 'name',
        get: function get() {
            return this.name;
        }
    }, {
        key: 'age',
        get: function get() {
            return this.age;
        }
    }, {
        key: 'tribe',
        get: function get() {
            return this.tribe;
        }
    }, {
        key: 'status',
        get: function get() {
            return this.status;
        },
        set: function set(value) {
            value = value;
        }
    }, {
        key: 'strength',
        get: function get() {
            return this.strength;
        },
        set: function set(value) {
            this.strength += value;
        }
    }, {
        key: 'task',
        get: function get() {
            return this.task;
        },
        set: function set(message) {
            this.task = message;
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

        _this.name = name;
        _this.age = age;
        _this.tribe = tribe;
        _this.strength = 5;
        return _this;
    }

    _createClass(Male, [{
        key: 'name',
        get: function get() {
            return this.name;
        },
        set: function set(value) {
            var a = true;
        }
    }, {
        key: 'age',
        get: function get() {
            return this.age;
        }
    }, {
        key: 'tribe',
        get: function get() {
            return this.tribe;
        }
    }]);

    return Male;
}(Human);

var Warrior = function (_Human2) {
    _inherits(Warrior, _Human2);

    function Warrior(name, age, tribe, post) {
        _classCallCheck(this, Warrior);

        var _this2 = _possibleConstructorReturn(this, (Warrior.__proto__ || Object.getPrototypeOf(Warrior)).call(this, name, age, tribe));

        _this2.post = post;
        _set(Warrior.prototype.__proto__ || Object.getPrototypeOf(Warrior.prototype), 'strength', 10, _this2);
        _this2.noOfKilled = 0;
        return _this2;
    }

    _createClass(Warrior, [{
        key: 'kill',

        // get status(){
        //     if(this.strength >= 10){
        //         return 'Healthy and strong';
        //     } else if(this.strength != 0){
        //         return 'Weak and injured';
        //     } else if(strength <= 0) { 
        //         return 'dead';
        //     }
        // }
        // Behaviours:
        value: function kill(enemy) {
            enemy.status = 'dead';
            enemy.strength = 0;
            enemy.task = 'This warrior is dead';
            this.noOfKilled++;
        }
    }, {
        key: 'fight',
        value: function fight(enemy) {
            this.strength -= 1;
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
            this.strength -= 1;
        }
    }, {
        key: 'report',
        value: function report() {
            return 'I am ' + this.post + ' ' + this.name + ' and i am from tribe ' + this.tribe + '. \n I have a task: ' + this.task;
        }
    }, {
        key: 'dismiss',
        value: function dismiss(surbodinate) {
            surbodinate.post = 'dismissed';
        }
    }, {
        key: 'post',
        get: function get() {
            return this.post;
        },
        set: function set(post) {
            this.post = post;
        }
    }, {
        key: 'noOfKilled',
        get: function get() {
            return this.noOfKilled;
        },
        set: function set(value) {
            this.noOfKilled += value;
        }
    }]);

    return Warrior;
}(Human);

var warriorA = new Warrior('Ogunniyi', 20, 'gaya', 'general');
// let warriorB = new Warrior('Tunmise', 17, 'zuli', 'commander');
// warriorA.kill(warriorB);
// console.log(warriorB.status);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map