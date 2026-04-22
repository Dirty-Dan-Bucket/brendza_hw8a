// Load the npm semver package as a module
const moment = require("moment");

console.log(moment().format("dddd, MMMM Do YYYY"));
console.log(moment([1976, 11, 26]).from(moment()));