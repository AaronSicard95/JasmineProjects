
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 20000, years: 12, rate: 6})).toEqual('195.17');
  expect(calculateMonthlyPayment({amount: 1000000, years: 24, rate: 6})).toEqual('6559.78');
  expect(calculateMonthlyPayment({amount: 45000, years: 2, rate: 48})).toEqual('2951.41');
});

//test returns string so must be 2 decimals
it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
