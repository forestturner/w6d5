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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded",function(){
	  let content = document.querySelector(".content");
	  let router = new Router(content);
	  router.start();

	  let sidebar = document.getElementsByClassName("sidebar-nav");
	  let sideLinks = sidebar[0].getElementsByTagName("li");
	  // debugger
	  for (var i = 0; i < sideLinks.length; i++) {
	    sideLinks[i].addEventListener("click",(eve)=>{

	      let string = (eve["srcElement"]["innerHTML"]);
	      window.location.hash = string.toLowerCase();
	      console.log(window.location.hash);
	    });
	  }
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node) {
	    this.node = node;
	  }

	  start(){
	    console.log("router starting");
	    let that = this;
	    window.addEventListener("hashchange",function(eve){
	        that.render();
	    });
	  }

	  activeRoute(){
	    let currentLocation = window.location.hash;
	    return currentLocation.slice(1);
	  }

	  render(){
	    this.node.innerHTML= "";
	    let activeRoute = this.activeRoute();
	    let newElement = document.createElement("p");
	    newElement.innerHTML = activeRoute;
	    this.node.appendChild(newElement);
	  }
	}
	module.exports = Router;


/***/ }
/******/ ]);