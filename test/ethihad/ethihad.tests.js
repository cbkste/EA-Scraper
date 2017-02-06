/* jshint expr: true */
module.exports = {
  'Ethihad Page' : function (client) {
    var ethihadPage = client.page.ethihad()
    var ethihadSearchResultsPage = client.page.ethihadSearchResults()
    ethihadPage.navigate();

    ethihadPage.VerifyonHomePage(client);
    ethihadPage.FillOutFlightInfo(client);
    ethihadPage.SubmitForm(client);

    ethihadSearchResultsPage.VerifySearchPage();
    ethihadSearchResultsPage.GetData(client);

    client.pause(3000);
    client.end();
  }


};
