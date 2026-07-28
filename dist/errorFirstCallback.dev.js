"use strict";

var fs = require('fs');

function readConfigFile(filename, callback) {
  fs.readFile(filename, 'utf-8', function (err, data) {
    if (err) {
      // Handled Specific error type
      if (err.code === 'ENOENT') {
        return callback(new Error("Config file ".concat(filename, " not found")));
      } else if (err.code === 'EACCES') {
        return callback(new Error("No Permission to read ".concat(filename)));
      } // For all other errors


      return callback(err);
    } // Process data if no errors


    try {
      var config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(new Error("Invalid JSON in ".concat(filename)));
    }
  });
} // Usage


readConfigFile('config.json ', function (err, config) {
  if (err) {
    console.error('Failed to read config: ', err.message); // Handle the error (e.g use default config)

    return;
  }

  console.log('Config loaded successfully: ', config);
});