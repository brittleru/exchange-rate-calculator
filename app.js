const currencyOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates
const calculate = () => {
  const currencyOneVal = currencyOne.value;
  const currencyTwoVal = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneVal}`)
    .then(res => res.json())
    .then(data => {
      const rates = data.rates[currencyTwoVal];

      rate.innerHTML = `1 ${currencyOneVal} = ${rates} ${currencyTwoVal}`;
      amountTwo.value = (amountOne.value * rates).toFixed(2);
    });
}

// Event listeners
currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
})

calculate();
