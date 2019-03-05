
let input = document.getElementById("amount");
let button = document.getElementById("convert");
button.addEventListener("click", convertVnd);

function usdToVnd(usd) {
   let usdToVndCalculator= usd * 23200;
   return Math.round(usdToVndCalculator * 100) / 100;
}

function vndToUsd(vnd) {
   let vndToUsdCalculator= vnd / 23200;
   return Math.round(vndToUsdCalculator * 100) / 100;
}

function convertVnd() {
   let conversion = 23262;
   let vndAmount = 100000;
   let usdAmount = 10;
   let inputValue = input.value; // get value from input
   let currenctSelect = document.getElementById("currencySelect"); // get select html element
   let selectedIdx = currenctSelect.selectedIndex; // get index of the selected option in the select html element
   let selectedOption = currenctSelect.options[selectedIdx]; //taking element from array given the index

   if (selectedOption.value == "USD") {
      var convertUsdToVnd = usdToVnd(inputValue);
      document.getElementById("result").innerHTML = `${inputValue} USD is ${convertUsdToVnd} VND`;
   }
   else if (selectedOption.value == "VND") {
      var convertVndToUsd = vndToUsd(inputValue);
      document.getElementById("result").innerHTML = `${inputValue} VND is ${convertVndToUsd} USD`;
   }
   else {
      document.getElementById("result").innerHTML = "Sorry, please choose a currency";
   }
}


//ATTEMPT AT COIN CHALLENGE
// var bills = {
//    fiveHundred:0,
//    200:0,
//    100:0,
//    50:0,
//    10:0,
//    5:0,
//    1:0,
// };

// change(500);

// function change(amount)  {
//    var remaindingAmount = amount;
//    var output=0;

//    while (remaindingAmount > 0) {
//       if (amount > 500){
//          output = (remaindingAmount - (remaindingAmount % 500)) / 500;
//          bills.fiveHundred+=output;
//          remaindingAmount = remaindingAmount % 500;
//          output= remaindingAmount - amount;
         
//          }
//       else if (amount > 200) {
//          output = (remaindingAmount - (remaindingAmount % 200)) / 200;
//          remaindingAmount = remaindingAmount % 200;
//          }
//       else if (amount > 100){ 
//          output = (remaindingAmount - (remaindingAmount % 100)) / 100;
//          remaindingAmount = remaindingAmount % 100;
//          }
//       else if (amount > 50) {
//          output = (remaindingAmount - (remaindingAmount % 50)) / 50;
//          remaindingAmount = remaindingAmount % 50;
//          }
//       else if (amount > 10) {
//          output = (remaindingAmount - (remaindingAmount % 10)) / 10;
//          remaindingAmount = remaindingAmount % 10;
//          }
//       else if (amount > 5){
//       output = (remaindingAmount - (remaindingAmount % 5)) / 5;
//          remaindingAmount = remaindingAmount % 5;
//          }
//       else if (amount > 1){
//          output = (remaindingAmount - (remaindingAmount % 1)) / 1;
//             remaindingAmount = remaindingAmount % 1;
//          }
//    }
 
// }

