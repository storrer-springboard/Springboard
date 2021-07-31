window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  const amount = document.getElementById('loan-amount');
  const years = document.getElementById('loan-years');
  const rate = document.getElementById('loan-rate');
  // Put some default values in the inputs
  const defaultInputs = {amount: 8888, years: 8, rate: 8};
  amount.value = defaultInputs.amount;
  years.value = defaultInputs.years;
  rate.value = defaultInputs.rate;
  // Call a function to calculate the current monthly payment
  update();
}

// Update the monthly payment
function update() {
  // Get the current values from the UI
  const presentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(presentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const rate = values.rate / 100 / 12;
  const months = Math.floor(values.years * 12);
  const payment = ((rate * values.amount) / (1 - Math.pow(1 + rate, -months)));
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.getElementById('monthly-payment');
  monthlyPaymentUI.innerText = ('$' + monthly);
}