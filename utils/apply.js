const Dias = require("./lib/dias");

const args = process.argv.slice(2);
if (!args[0]) {
  console.error("No dia folder speficied!");
  process.exit();
}

var result = Dias.apply(args[0]);
if (result instanceof Error) {
  console.error(result);
} else {
  console.log("Done!");
}
