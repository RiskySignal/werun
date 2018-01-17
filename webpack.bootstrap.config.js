const fs = require("fs");

//Using process.env to define custom bootstrap configuration location
function getBootstraprcCustomLocation() {
  return process.env.BOOTSTRAPRC_LOCATION;
}
const bootstraprcCustomLocation = getBootstraprcCustomLocation();
//process.env.BOOTSTRAPRC_LOCATION
let defaultBootstraprcFileExists;

try {
  fs.statSync("./.bootstraprc");
  defaultBootstraprcFileExists = true;
} catch (e) {
  defaultBootstraprcFileExists = false;
}
//Default .bootstraprc exists or not

if (!bootstraprcCustomLocation && !defaultBootstraprcFileExists) {
  console.log(
    "You did not specify a 'bootstraprc-location' " +
      "arg or a ./.boostraprc file in the root."
  );
  console.log("Using the bootstrap-loader default configuration.");
}

// DEV and PROD have slightly different configurations
let bootstrapDevEntryPoint;
//If custom bootstrap location exist
//webpack.bootstrap.config.js and bootstraprcCustomLocation coexist in
//same dir in dev mode
if (bootstraprcCustomLocation) {
  bootstrapDevEntryPoint =
    "bootstrap-loader/lib/bootstrap.loader?" +
    `configFilePath=${__dirname}/${bootstraprcCustomLocation}` +
    "!bootstrap-loader/no-op.js";
} else {
  bootstrapDevEntryPoint = "bootstrap-loader";
}

let bootstrapProdEntryPoint;
//In pro mode, we will add extractStyles such as webpack-extract-text-plugin
// You can see it in .bootstraprc-4-example`s configuration
if (bootstraprcCustomLocation) {
  bootstrapProdEntryPoint =
    "bootstrap-loader/lib/bootstrap.loader?extractStyles" +
    `&configFilePath=${__dirname}/${bootstraprcCustomLocation}` +
    "!bootstrap-loader/no-op.js";
} else {
  bootstrapProdEntryPoint = "bootstrap-loader/extractStyles";
}

module.exports = {
  dev: bootstrapDevEntryPoint,
  prod: bootstrapProdEntryPoint
};
