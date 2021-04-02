function calculateAsset(n, a){
  var asset = (n / a);

  return parseFloat(asset.toFixed(2));
}
function postAssetanswer(amount) {
  var htmlEl = document.getElementById("outAssetTurnover");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnAssetTurnover");
btn.onclick = function() {

  var assett = document.getElementById("inNetAsset").value;

  var avgassett = document.getElementById("inAvgAsset").value;



  var asset = calculateAsset(assett, avgassett);

    postAssetanswer(asset);
  };
