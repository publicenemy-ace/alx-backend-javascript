const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('stub is used to make calcuateNumber always return 10', () => {

    const check = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(check.calledOnceWithExactly('The total is: 10')).to.be.true;

    check.restore();
    stub.restore();
  });
});
