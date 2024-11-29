const chai = require('chai');
const request = require('request');

const url = 'http://localhost:7865';
describe('Testing index page', () => {
  it('should return status 200 and correct message', (done) => {
    request(url, (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    })
})
});
