function calculateReceivables(n, a){
  var receivables = (n / a);

  return parseFloat(receivables.toFixed(2));
}
function postReceivableanswer(amount) {
  var htmlEl = document.getElementById("outReceivablesTurnover");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnReceivablesTurnover");
btn.onclick = function() {

  var netcred = document.getElementById("inNetCredit").value;

  var avgassetsr = document.getElementById("inAvgAccounts").value;



  var receivables = calculateReceivables(netcred, avgassetsr);

    postReceivableanswer(receivables);
  };
