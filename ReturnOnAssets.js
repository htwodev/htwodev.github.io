function calculateAssets(ni, ta){
  var assets = (ni / ta);

  return parseFloat(assets.toFixed(2));
}
function postAssetsanswer(amount) {
  var htmlEl = document.getElementById("outReturnOnAssets");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnReturnOnAssets");
btn.onclick = function() {

  var ni = document.getElementById("inNetIncome").value;

  var ta = document.getElementById("inTotalAssets").value;


  var assets = calculateAssets(ni, ta);

    postAssetsanswer(assets);
  };
