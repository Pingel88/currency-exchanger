import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './services/exchange-rate-service.js';
import ExchangeRate from './js/exchange-rate.js';


function getElements(response, usd, currency) {
  const exchange = new ExchangeRate();
  const capitalCurrency = currency.toUpperCase();
  if (response.result === "success") {
    if (capitalCurrency in response.conversion_rates) {
      const returnString = exchange.calculateCurrency(usd, currency, response.conversion_rates[capitalCurrency]);
      $('.showExchangeValue').show();
      $('.showExchangeValue').text(returnString);
      $('.showErrors').hide();
    } else {
      $('.showErrors').show();
      $('.showErrors').text(`${capitalCurrency} is not a valid currency. Please enter a valid currency.`);
      $('.showExchangeValue').hide();
    }
  } else if (response.result === "error") {
    $('.showErrors').show();
    $('.showErrors').text(`Error: ${response["error-type"]}`);
    $('.showExchangeValue').hide();
  } else {
    $('.showErrors').show();
    $('.showErrors').text(response);
    $('.showExchangeValue').hide();
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
