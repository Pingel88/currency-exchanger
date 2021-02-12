import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeRateService from './services/exchange-rate-service.js';
import ExchangeRate from './js/exchange-rate.js';
// import './css/styles.css';


function getElements(response, usd, currency) {
  if (response.result === "success") {
    const exchange = new ExchangeRate();
    const capitalCurrency = currency.toUpperCase();
    const returnString = exchange.calculateCurrency(usd, currency, response.conversion_rates[capitalCurrency]);
    $('.showExchangeValue').text(returnString);
  } else if (response.result === "error") {
    $('.showErrors').text(`${response["error-type"]}`);
  } else {
    $('.showErrors').text("borked");
  }
}

$('#exchange-rate').submit(function(event) {
  event.preventDefault();
  const currency = $('#currency').val();
  const usd = $('#usd-value').val();
  (async function() {
    const response = await ExchangeRateService.exchangeRateService();
    getElements(response, usd, currency);
  })();
});
