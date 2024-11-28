const getPaymentTokenFromAPI = (sucess) => {
  if (sucess) {
    return new Promise((resolve, reject) => {
      resolve({ data: 'Successful response from the API' });
    })
  }
  else {
    // skip and move on
  }
}

module.exports = getPaymentTokenFromAPI;
