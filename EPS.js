function calculateEPS(n, t){
  var eps = (n / t);

  return parseFloat(eps.toFixed(2));
}
function postEPSanswer(amount) {
  var htmlEl = document.getElementById("outEPS");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnEPS");
btn.onclick = function() {

  var nete = document.getElementById("inNetEarnings").value;

  var totshs = document.getElementById("inTotalShares").value;


  var eps = calculateEPS(nete, totshs);

    postEPSanswer(eps);
  };
