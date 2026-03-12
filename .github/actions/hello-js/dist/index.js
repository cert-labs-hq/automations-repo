/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require('@actions/core');

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
