console.log('installing plugins')
const execSync = require('child_process').execSync;
// execSync("cordova plugin add cordova-plugin-add-swift-support")
// console.log('installing plugins: make sure swift support is good')
execSync("cordova plugin add berbix-cordova-plugin@1.0.1")
console.log('installing plugins: berbix-cordova-plugin')