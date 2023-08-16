

var slider = document.getElementById("yearSlider");
var sliderValue = document.getElementById("yearSliderValue");
sliderValue.innerHTML = 20;

slider.oninput = function () {
  console.log(this.value);
  sliderValue.innerHTML = this.value;
};

// Function to update the calculations
function updateCalculations() {
  const purchasePrice = parseFloat(
    document.getElementById("inputPurchasePrice").value
  );
  const deposit = parseFloat(document.getElementById("inputDeposit").value);
  const interestRate = parseFloat(
    document.getElementById("inputInterestRate").value
  );
  const loanTerm = parseFloat(document.getElementById("yearSlider").value);

  const loanAmount = purchasePrice - deposit;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyRepayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  const totalOnceOffCost = purchasePrice * 0.07776; // Assuming a once-off cost of 7.776% of the purchase price

  const minGrossIncome = monthlyRepayment * 3.5; // Assuming a minimum gross income requirement of 3.5 times the monthly repayment

  // Update the UI elements
  document.getElementById(
    "mortgage_monthlypayment"
  ).textContent = `R ${monthlyRepayment.toFixed(0)}`;
  document.getElementById(
    "mortgage_totalpayment"
  ).textContent = `R ${totalOnceOffCost.toFixed(0)}`;
  document.getElementById(
    "minimum_income"
  ).textContent = `R ${minGrossIncome.toFixed(0)}`;
}

// Attach event listener to the year slider
const yearSlider = document.getElementById("yearSlider");
yearSlider.addEventListener("input", () => {
  updateCalculations();
});

// Initial calculation
updateCalculations();
