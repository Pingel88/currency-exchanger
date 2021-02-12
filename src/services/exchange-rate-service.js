export default class ExchangeRateService {
  static async exchangeRateService() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
