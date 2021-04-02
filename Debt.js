function calculateDebt(totl, tota){
  var debt = (totl / tota);

  return parseFloat(debt.toFixed(2));
}
function postDebtanswer(amount) {
  var htmlEl = document.getElementById("outDebtRatio");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnDebtRatio");
btn.onclick = function() {

  var totl = document.getElementById("inTotalLiabilities").value;

  var tota = document.getElementById("inTotalAssets").value;


  var debt = calculateDebt(totl, tota);

    postDebtanswer(debt);
  };
