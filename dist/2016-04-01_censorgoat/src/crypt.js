"use strict";

let key = 0x42;
let words = [
  '<span class="text-censored">',
  "</span>",

  "aaa",
  "april",
  "baum",
  "bbb",
  "bnd",
  "bug",
  "büpf",
  "ccc",
  "ccc",
  "censorship",
  "censor",
  "chemtrails",
  "cloud",
  "cookies",
  "ddd",
  "dennis",
  "diaspora",
  "download",
  "drachen",
  "eee",
  "erdogan",
  "feature",
  "fff",
  "fool",
  "freedom",
  "gchq",
  "geraspora",
  "ggg",
  "gnu",
  "hhh",
  "iii",
  "internet",
  "jjj",
  "katze",
  "katzen",
  "keks",
  "kgb",
  "kkk",
  "linux",
  "lll",
  "meinungsfreiheit",
  "mmm",
  "nerdpol",
  "netzneutralität",
  "netz",
  "nnn",
  "nsa",
  "nutella",
  "ooo",
  "politik",
  "ppp",
  "pressefreiheit",
  "qqq",
  "rrr",
  "scherz",
  "schnubbi",
  "schoko",
  "schubert",
  "sss",
  "ttt",
  "tuxxi",
  "uuu",
  "vvv",
  "www",
  "xxx",
  "yyy",
  "zensur",
  "zzz",
  "überwachung"
];

let cryptowords = words.map((word) => {
  return word.split("").map((char) => {
    return "0x" + (char.charCodeAt(0) ^ key).toString(16);
  }).join(",");
});

let arrayString = "  var stuff = [\n    0x" + key.toString(16) + ",\n"
  + "    ["
  + cryptowords.join("],\n    [")
  + "]\n  ];";

console.log(arrayString);
