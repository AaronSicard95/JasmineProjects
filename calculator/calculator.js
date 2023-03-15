let monthSpan = document.querySelector("#monthly-payment");
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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = "20000";
  document.getElementById("loan-years").value = "20";
  document.getElementById("loan-rate").value = "5.5";
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  //console.log(calculateMonthlyPayment(getCurrentUIValues()));
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate*.01)/12;
  let n = values.years*12;
  //let calc = (p*i)/(1-((1+i)**-n)); Your formula doesn't work, had to google a different one
  let calc = p*((i*(1+i)**n)/(((1+i)**n)-1));
  //calc = Math.round(calc * 100)/100;
  calc =  calc.toFixed(2);
  console.log(calc);
  let newValue = `${calc}`;
  console.log(newValue*n);
  return newValue;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthSpan.innerHTML = monthly;
}
