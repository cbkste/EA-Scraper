/* jshint expr: true */
module.exports = {
  'Etihad Search for Flight' : function (client) {
    var ethihadPage = client.page.ethihad()
    var ethihadSearchResultsPage = client.page.ethihadSearchResults()

    ethihadPage.navigate();

    ethihadPage.VerifyonHomePage(client);
    ethihadPage.FillOutFlightInfo(client);
    ethihadPage.SubmitForm(client);

    ethihadSearchResultsPage.VerifySearchPage(client);
    ethihadSearchResultsPage.GetData(client);

    client.pause(1000);
    client.end();
  }

};
