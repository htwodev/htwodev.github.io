function calculateATR(a, i, l){
  var atr = (a - (i /l));

  return parseFloat(atr.toFixed(2));
}
function postAtranswer(amount) {
  var htmlEl = document.getElementById("outAcid");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnAcid");
btn.onclick = function() {

  var atrassets = document.getElementById("inAssetsAcid").value;


  var atrinventories = document.getElementById("inInventoriesAcid").value;

  var atrliabilities = document.getElementById("inLiabilitiesAcid").value;

  var atr = calculateATR(atrassets, atrinventories, atrliabilities);

    postAtranswer(atr);
  };
