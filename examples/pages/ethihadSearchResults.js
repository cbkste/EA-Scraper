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
  getTextData: function(client, div) {
    this.getText(div, function(result) {
      cost = result.value;
      var dateAndPrice = cost.split("\n");
      var PriceWithCurrency = dateAndPrice[1].split(" ");
      var price = PriceWithCurrency[1];
      logger.info(price);
    });
     },

  GetData: function(client) {

    var elementValue = this.getText('@outboundMenu');
    this.waitForElementVisible('@outboundMenu', 2000)

    this.getTextData(client, "@outboundMenuDaySelectorFirst");
    this.getTextData(client, "@outboundMenuDaySelectorSecond");
    this.getTextData(client, "@outboundMenuDaySelectorThird");
    this.getTextData(client, "@outboundMenuDaySelectorFourth");
    this.getTextData(client, "@outboundMenuDaySelectorFive");
    this.getTextData(client, "@outboundMenuDaySelectorSix");
    this.getTextData(client, "@outboundMenuDaySelectorSeventh");

    this.getTextData(client, "@inboundMenuDaySelectorFirst");
    this.getTextData(client, "@inboundMenuDaySelectorSecond");
    this.getTextData(client, "@inboundMenuDaySelectorThird");
    this.getTextData(client, "@inboundMenuDaySelectorFourth");
    this.getTextData(client, "@inboundMenuDaySelectorFive");
    this.getTextData(client, "@inboundMenuDaySelectorSix");
    this.getTextData(client, "@inboundMenuDaySelectorSeventh");

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
