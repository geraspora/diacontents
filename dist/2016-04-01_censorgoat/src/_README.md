1. `npm install -g uglify-js`
2. wenn array geändert:
   1. `node crypt.js`
   2. output kopieren und in `overwrites.src.jsoverwrites.src.js` einfügen/das vorhandene ersetzen.
2. `uglifyjs overwrites.src.js -mc > overwrites.js`