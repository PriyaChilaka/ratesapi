//getting elements from index.html whatever I declared
let from_currencyEl = document.getElementById("from_currency");
let from_ammountEl = document.getElementById("from_ammount");
let to_currencyEl = document.getElementById("to_currency");
let to_ammountEl = document.getElementById("to_ammount");
let rateEl = document.getElementById("rate");
let tb = document.getElementById("textBox");

//creating eventListners currency from and currency to
from_currencyEl.addEventListener("change", calculate);
from_ammountEl.addEventListener("input", calculate);
to_currencyEl.addEventListener("change", calculate);
to_ammountEl.addEventListener("input", calculate);

//calling exchange function with  "click"
exchange.addEventListener("click", () => {
    let temp = from_currencyEl.value;
    from_currencyEl.value = to_currencyEl.value;
    to_currencyEl.value = temp;
    calculate();
});
// calling button with "click"
btnSeven.addEventListener("click", () => {
    calbut();
});
//calling calbut function
function calbut() {
    let me = to_ammount.value;
    tb.value = me;
}
// calling calculate function
function calculate() {
    let from_currency = from_currencyEl.value;
    let to_currency = to_currencyEl.value;
    //fetching with rates api and getting json data
    fetch(
        `https://api.ratesapi.io/api/latest?base=${from_currency}&symbols=${to_currency}`
    )
        .then((res) => res.json())
        .then((res) => {
            let rate = res.rates[to_currency];
            rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
            to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
        });
}

calculate();