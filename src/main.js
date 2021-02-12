import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeRateService from './services/exchange-rate-service.js';
import ExchangeRate from './js/exchange-rate.js';
// import './css/styles.css';


// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvin is ${response.main.temp} degrees.`);
//   } else {
//     $('.showErrors').text(`There was an error processing your request: ${response}`);
//   }
// }

$(document).ready(function() {
  $('#exchange-rate').submit(function(event) {
    event.preventDefault();
    const exchange = new ExchangeRate();
    const usd = $('#usd-value').val();
    const currency = $('#currency').val();
    const capitalCurrency = currency.toUpperCase();
    $('#usd-value').val("");
    (async function() {
      const response = await ExchangeRateService.exchangeRateService();
      const returnString = exchange.calculateCurrency(usd, currency, response.conversion_rates[capitalCurrency])
      console.log(returnString);
    })();
  });
});
