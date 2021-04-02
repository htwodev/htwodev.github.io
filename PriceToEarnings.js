function calculatePriceTo(s, e){
  var pte = (s / e);

  return parseFloat(pte.toFixed(2));
}
function postPriceToanswer(amount) {
  var htmlEl = document.getElementById("outPriceToEarnings");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnPriceToEarnings");
btn.onclick = function() {

  var shp = document.getElementById("inSharePrice").value;

  var earn = document.getElementById("inEarningsPer").value;


  var pte = calculatePriceTo(shp, earn);

    postPriceToanswer(pte);
  };
