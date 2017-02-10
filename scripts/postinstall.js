const fs = require('fs');
const hoganPath = require.resolve('hogan.js/dist/hogan-3.0.2.amd.js');

fs.createReadStream(hoganPath).pipe(fs.createWriteStream('hogan-browser.js'));