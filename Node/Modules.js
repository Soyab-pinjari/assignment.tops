
const os = require("os");
const path = require("path");


function addNumbers() {
    console.log("5 + 7 =", 5 + 7);
}
addNumbers();
console.log("Operating System Platform:", os.platform());
console.log("Current Directory:", path.dirname(__filename));
console.log("Platform:", os.platform());
console.log("Operating System:", os.type());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
