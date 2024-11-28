const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Testing when type === SUM with two positive integer', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('Testing when type === SUM with two negative integer', () => {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('Testing when type === SUBTRACT with two positive integer', () => {
    expect(calculateNumber('SUBTRACT', 50, 20)).to.equal(30);
  });
  it('Testing when type === SUBTRACT with two negative integer', () => {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
  });
  it('Testing when type === DIVIDE with two positive integer', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });
  it('Testing when type === DIVIDE with two negative integer', () => {
    expect(calculateNumber('DIVIDE', -1, -3)).to.equal(0.3333333333333333);
  });
  it('Testing when type === DIVIDE and b is 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
