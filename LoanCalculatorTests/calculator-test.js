
it('should calculate the monthly rate correctly', function () {
  // ...
  const loanDetails = {amount:10000, years: 10, rate: 10};
  expect(calculateMonthlyPayment(loanDetails)).toEqual('132.15');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const loanDetails = {amount: 7777, years: 17, rate: 13.3};
  expect(calculateMonthlyPayment(loanDetails)).toEqual('96.37');
});

/// etc
