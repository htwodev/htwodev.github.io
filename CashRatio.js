function calculateCash(c, l){
  var cash = (c / l);

  return parseFloat(cash.toFixed(2));
}
function postCashanswer(amount) {
  var htmlEl = document.getElementById("outCash");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnCash");
btn.onclick = function() {

  var ccash = document.getElementById("inCashCash").value;

  var cliabilities = document.getElementById("inLiabilitiesCash").value;



  var cash = calculateCash(ccash, cliabilities);

    postCashanswer(cash);
  };
