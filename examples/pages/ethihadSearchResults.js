var winston = require('winston');

// Logger for data output
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      filename: 'Data.log'
    })
  ]
});

var outboundAirportName = 'Manchester, United Kingdom (MAN) To Brisbane, Australia (BNE)';
var inboundAirportName = 'Brisbane, Australia (BNE) To Manchester, United Kingdom (MAN)';
var cost = '';
var searchCommands = {

  VerifySearchPage: function(client) {
    this.waitForElementVisible('@outboundFlightContainerDiv', 3000)
      .waitForElementVisible('@inboundsFlightContainerDiv', 3000)
      .assert.containsText('@outboundFlightAirportLocation', outboundAirportName)
      .assert.containsText('@inboundFlightAirportLocation', inboundAirportName)

    logger.info('START');
    logger.warn(client.globals.departureAirport);
    logger.warn(client.globals.destinationAirport);

    return this;
  },
  getTextData: function(div) {
    this.getText(div, function(result) {
      cost = result.value;
      var dateAndPrice = cost.split("\n");
      var date = dateAndPrice[0];
      var PriceWithCurrency = dateAndPrice[1].split(" ");
      var price = PriceWithCurrency[1];
      logger.info(date +' '+ price);
    });
  },

  GetData: function(client) {

    var elementValue = this.getText('@outboundMenu');
    this.waitForElementVisible('@outboundMenu', 2000)

    this.getTextData("@outboundMenuDaySelectorFirst");
    this.getTextData("@outboundMenuDaySelectorSecond");
    this.getTextData("@outboundMenuDaySelectorThird");
    this.getTextData("@outboundMenuDaySelectorFourth");
    this.getTextData("@outboundMenuDaySelectorFive");
    this.getTextData("@outboundMenuDaySelectorSix");
    this.getTextData("@outboundMenuDaySelectorSeventh");

    this.getTextData("@inboundMenuDaySelectorFirst");
    this.getTextData("@inboundMenuDaySelectorSecond");
    this.getTextData("@inboundMenuDaySelectorThird");
    this.getTextData("@inboundMenuDaySelectorFourth");
    this.getTextData("@inboundMenuDaySelectorFive");
    this.getTextData("@inboundMenuDaySelectorSix");
    this.getTextData("@inboundMenuDaySelectorSeventh");

    return this;
  }
};

module.exports = {
  url: function() {
    return this.launchUrl;
  },
  commands: [searchCommands],
  elements: {
    outboundFlightContainerDiv: {selector: 'div[id=outbounds]'},
    inboundsFlightContainerDiv: {selector: 'div[id=inbounds]'},
    outboundFlightAirportLocation: {selector: '#outbounds .flight-info .xchnge-section-dl'},
    inboundFlightAirportLocation: {selector: '#inbounds .flight-info .xchnge-section-dl'},
    outboundMenu: {selector: '#outbounds-3-menu'},
    outboundMenuDaySelectorFirst: {selector: '#outbounds-3-menu .yuimenubaritem'},
    outboundMenuDaySelectorSecond: {selector: '#outbounds-3-menu .yuimenubaritem:nth-child(2)'},
    outboundMenuDaySelectorThird: {selector: '#outbounds-3-menu .yuimenubaritem:nth-child(3)'},
    outboundMenuDaySelectorFourth: {selector: '#outbounds-3-menu .yuimenubaritem:nth-child(4)'},
    outboundMenuDaySelectorFive: {selector: '#outbounds-3-menu .yuimenubaritem:nth-child(5)'},
    outboundMenuDaySelectorSix: {selector: '#outbounds-3-menu .yuimenubaritem:nth-child(6)'},
    outboundMenuDaySelectorSeventh: {selector: '#outbounds-3-menu .yuimenubaritem:last-of-type'},
    inboundMenuDaySelectorFirst: {selector: '#inbounds-3-menu .yuimenubaritem'},
    inboundMenuDaySelectorSecond: {selector: '#inbounds-3-menu .yuimenubaritem:nth-child(2)'},
    inboundMenuDaySelectorThird: {selector: '#inbounds-3-menu .yuimenubaritem:nth-child(3)'},
    inboundMenuDaySelectorFourth: {selector: '#inbounds-3-menu .yuimenubaritem:nth-child(4)'},
    inboundMenuDaySelectorFive: {selector: '#inbounds-3-menu .yuimenubaritem:nth-child(5)'},
    inboundMenuDaySelectorSix: {selector: '#inbounds-3-menu .yuimenubaritem:nth-child(6)'},
    inboundMenuDaySelectorSeventh: {selector: '#inbounds-3-menu .yuimenubaritem:last-of-type'}
  }
};
