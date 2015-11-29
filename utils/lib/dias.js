"use strict";

const Fs = require("fs");
const Path = require("path");

const basePath = Path.join(__dirname, "..", "..");
const diaRoot = Path.join(basePath, "dist");
const currentDia = Path.join(diaRoot, "current");

module.exports = {
  apply: function(dia) {
    let diaFolder = Path.join(diaRoot, dia);

    try {
      if (Fs.statSync(diaFolder).isDirectory()) {
        try { Fs.unlinkSync(currentDia); } catch (e) {}
        Fs.symlinkSync(diaFolder, currentDia);
      } else {
        throw new Error("Dia is not a directory");
      }
    } catch (exception) {
      return exception;
    }
  },

  getDias: function() {
    return Fs.readdirSync(diaRoot).filter((dir) => {
      return ["current", "default"].indexOf(dir) == -1;
    });
  }
};
