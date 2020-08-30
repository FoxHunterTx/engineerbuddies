const path = require('path');

//path of module that started application ->app.js
///Users/michael/Development/Docker/firstContainer
module.exports = path.dirname(process.mainModule.filename);