var args = require('minimist')(process.argv);
var my_env = {};
var departureAirport;
var destinationAirport;


for (e in process.env) my_env[e] = process.env[e];

if(my_env["departureAirport"]){
  departureAirport=my_env["departureAirport"]
  console.log("Env Variable set using : " + departureAirport);
}

if(my_env["destinationAirport"]){
  destinationAirport=my_env["destinationAirport"]
  console.log("Env Variable set using : " + destinationAirport);
}

module.exports = {
    environment: undefined,
    departAirport: undefined,
    "departureAirport": departureAirport,
    "destinationAirport": destinationAirport
  };
