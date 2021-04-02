function calculateCR(a, l){
  var cr = (a / l);

  return parseFloat(cr.toFixed(2));
}
function postCranswer(amount) {
  var htmlEl = document.getElementById("outCurrent");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnCurrent");
btn.onclick = function() {

  var crassets = document.getElementById("inAssetsCurrent").value;

  var crliabilities = document.getElementById("inLiabilitiesCurrent").value;

  var cr = calculateCR(crassets, crliabilities);

    postCranswer(cr);
  };
