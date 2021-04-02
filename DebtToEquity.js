function calculateEquity(lia, sh){
  var equity = (lia / sh);

  return parseFloat(equity.toFixed(2));
}
function postEquityanswer(amount) {
  var htmlEl = document.getElementById("outDebtToEquity");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnDebtToEquity");
btn.onclick = function() {

  var lia = document.getElementById("inTotL").value;

  var sh = document.getElementById("inShareholderE").value;


  var equity = calculateEquity(lia, sh);

    postEquityanswer(equity);
  };
