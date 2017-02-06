var title = 'Etihad Airways - Book flights and holidays';
var departureDate = '01/07/2017';
var returnDate = '22/07/2017';
var depAirport = '';
var destAirport = '';

var searchCommands = {

  VerifyonHomePage: function(client) {

    this.waitForElementVisible('@body',6000)
      .verify.title(title)
      return this; // Return page object for chaining
  },

  FillOutFlightInfo: function(client) {
    depAirport = departAirport;
    destAirport = destinationAirport;

    this.waitForElementVisible('@outboundFlightDate', 3000)
        .clearValue('@outboundFlightDateText')
        .setValue('@outboundFlightDateText', departureDate)

        .waitForElementVisible('@returnFlightDate', 3000)
        .clearValue('@returnFlightDateText')
        .setValue('@returnFlightDateText',returnDate)

        .click('input[name=na1]')
        .clearValue('input[name=na1]')
        .setValue('input[name=na1]', depAirport)
    client.keys(client.Keys.ENTER)

    this.click('@toLocationText')
        .clearValue('@toLocationText')
        .setValue('@toLocationText', destinationAirport)
    client.keys(client.Keys.ENTER)
    return this;

  },

SubmitForm: function(client) {
      this.click('@submitButton')
      return this;
  }
};

module.exports = {
  url: 'http://www.etihad.com/en-us/',
  commands: [searchCommands],
  elements: {
    searchBar: { selector: 'input[name=q]' },
    submitButton: { selector: '.btn-bookFlightLarge' },
    body: { selector: '.ltrheroPage' },
    outboundFlightDate : { selector: '.datePickerOutBound'},
    outboundFlightDateText : { selector: 'input[name=FlightBookingForm_OutwardDate]'},
    returnFlightDate: { selector: '.datePickerReturn'},
    returnFlightDateText : { selector: 'input[name=FlightBookingForm_ReturnDate]'},
    fromLocationText: { selector: 'input[name=na1]' },
    toLocationText: { selector: 'input[name=na2]' }
  }
};
