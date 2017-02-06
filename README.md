# Etihad Airways Scraper
Scrapes Etihad Airways website and to find the current lowest price for the user defined flight. 
***

### Run Ethihad Scraper using Nightwatch
The tests for Nightwatch are written using [Mocha](http://mochajs.org/) exports interface so they can also be run with Nightwatch itself.

To run scraper

```sh
$ bin/nightwatch -t test/ethihad/ethihad.tests.js
```

To run Seleninum Server using Chrome, Requires chromedriver.exe

```sh
$ java -jar selenium/selenium-server-standalone-2.53.1.jar -Dwebdriver.chrome.driver=./chromedriver.exe
```
