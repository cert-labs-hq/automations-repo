/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 761:
/***/ ((module) => {

module.exports = eval("require")("./@actions/core");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core = __nccwpck_require__(761);

async function run() {
  try {
    // 1. Get Input defined in action.yml
    const nameToGreet = core.getInput('who-to-greet');
    
    console.log(`Hello, ${nameToGreet}!`);

    // 2. Do some "work"
    const timestamp = new Date().toTimeString();
    
    // 3. Set Output defined in action.yml
    core.setOutput("time", timestamp);

  } catch (error) {
    // 4. Properly fail the action if something goes wrong
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
module.exports = __webpack_exports__;
/******/ })()
;