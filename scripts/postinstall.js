const fs = require('fs');
const hoganPath = require.resolve('hogan.js/dist/hogan-3.0.2.amd.js');
const hoganAmd = fs.readFileSync(hoganPath);
fs.writeFileSync('hogan-browser.js', hoganAmd);
