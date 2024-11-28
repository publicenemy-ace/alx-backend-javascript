const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('Checks if sendPayment uses the calculateNumber in the Utils function', () => {

    const check = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(check.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    check.restore();
  });
});