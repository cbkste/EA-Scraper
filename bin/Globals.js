var args = require('minimist')(process.argv);

function getDeparture() {
    return args["dep"] || "default";
}

function getDestination() {
    return args["des"] || "default";
}

module.exports = {
    environment: undefined,
    departAirport: undefined,
    destinationAirport: undefined,
    before: function (done) {
       // parseArgumentsAndGetEnv is function you need to implement on your own to find your env param
        environment = getDeparture(process.argv);
        departAirport = environment;
        environment = getDestination(process.argv);
        destinationAirport = environment;
        console.log("ENVS:");
        console.log("Depart Airport: " + departAirport);
        console.log("Destination Airport: " + destinationAirport);
        done();
    }
};
