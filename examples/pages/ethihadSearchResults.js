var outboundAirportName = 'Manchester, United Kingdom (MAN) To Brisbane, Australia (BNE)';
var inboundAirportName = 'Brisbane, Australia (BNE) To Manchester, United Kingdom (MAN)';

var searchCommands = {

  VerifySearchPage: function() {
    this.waitForElementVisible('@outboundFlightContainerDiv', 3000)
      .waitForElementVisible('@inboundsFlightContainerDiv', 3000)
      .assert.containsText('@outboundFlightAirportLocation', outboundAirportName)
      .assert.containsText('@inboundFlightAirportLocation', inboundAirportName)
  },

  GetData: function(client) {
    var elementValue = this.getText('@outboundMenu');
    this.waitForElementVisible('@outboundMenu', 2000)

    var cost;

    this.getText("@outboundMenuDaySelectorFirst", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@outboundMenuDaySelectorSecond", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@outboundMenuDaySelectorThird", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@outboundMenuDaySelectorFourth", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@outboundMenuDaySelectorFive", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@outboundMenuDaySelectorSix", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@outboundMenuDaySelectorSeventh", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorFirst", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorSecond", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorThird", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorFourth", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorFive", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorSix", function(result) {
      cost = result.value;
      console.log(cost);
    });

    this.getText("@inboundMenuDaySelectorSeventh", function(result) {
      cost = result.value;
      console.log(cost);
    });


    client.pause(1000);
  }
};

module.exports = {
  url: function() {
    return this.launchUrl;
  },
  commands: [searchCommands],
  elements: {
    outboundFlightContainerDiv: { selector: 'div[id=outbounds]'},
    inboundsFlightContainerDiv: { selector: 'div[id=inbounds]'},
    outboundFlightAirportLocation: { selector: '#outbounds .flight-info .xchnge-section-dl'},
    inboundFlightAirportLocation: { selector: '#inbounds .flight-info .xchnge-section-dl'},
    outboundMenu: { selector: '#outbounds-3-menu'},

    outboundMenuDaySelectorFirst: { selector: '#outbounds-3-menu .yuimenubaritem'},
    outboundMenuDaySelectorSecond: { selector: '#outbounds-3-menu .yuimenubaritem:nth-child(2)'},
    outboundMenuDaySelectorThird: { selector: '#outbounds-3-menu .yuimenubaritem:nth-child(3)'},
    outboundMenuDaySelectorFourth: { selector: '#outbounds-3-menu .yuimenubaritem:nth-child(4)'},
    outboundMenuDaySelectorFive: { selector: '#outbounds-3-menu .yuimenubaritem:nth-child(5)'},
    outboundMenuDaySelectorSix: { selector: '#outbounds-3-menu .yuimenubaritem:nth-child(6)'},
    outboundMenuDaySelectorSeventh: { selector: '#outbounds-3-menu .yuimenubaritem:last-of-type'},

    inboundMenuDaySelectorFirst: { selector: '#inbounds-3-menu .yuimenubaritem'},
    inboundMenuDaySelectorSecond: { selector: '#inbounds-3-menu .yuimenubaritem:nth-child(2)'},
    inboundMenuDaySelectorThird: { selector: '#inbounds-3-menu .yuimenubaritem:nth-child(3)'},
    inboundMenuDaySelectorFourth: { selector: '#inbounds-3-menu .yuimenubaritem:nth-child(4)'},
    inboundMenuDaySelectorFive: { selector: '#inbounds-3-menu .yuimenubaritem:nth-child(5)'},
    inboundMenuDaySelectorSix: { selector: '#inbounds-3-menu .yuimenubaritem:nth-child(6)'},
    inboundMenuDaySelectorSeventh: { selector: '#inbounds-3-menu .yuimenubaritem:last-of-type'}
  }
};
