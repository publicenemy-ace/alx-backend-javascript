import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    /* eslint-disable no-underscore-dangle */
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  // private validation methods
  /* eslint-disable class-methods-use-this */
  // eslint-disable-next-line no-underscore-dangle
  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    return amount;
  }

  /* eslint-disable class-methods-use-this */
  // eslint-disable-next-line no-underscore-dangle
  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    return currency;
  }

  // Getter and Setter for name
  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  set amount(amount) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = this._validateName(amount);
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  set currency(currency) {
    // eslint-disable-next-line no-underscore-dangle
    this._currency = this._validateCode(currency);
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both Amount and Conversion Rate must be a Number');
    }

    return amount * conversionRate;
  }
}
