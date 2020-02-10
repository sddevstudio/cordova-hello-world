console.log('installing plugins')
const execSync = require('child_process').execSync;
execSync("cordova plugin add cordova-plugin-add-swift-support")
execSync("cordova plugin add berbix-cordova-plugin@1.0.1")