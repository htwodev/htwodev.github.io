function calculateDividend(d, s){
  var dividend = (d / s);

  return parseFloat(dividend.toFixed(2));
}
function postDividendanswer(amount) {
  var htmlEl = document.getElementById("outDividendYield");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnDividendYield");
btn.onclick = function() {

  var divd = document.getElementById("inDivPer").value;

  var shared = document.getElementById("inShareP").value;


  var dividend = calculateDividend(divd, shared);

    postDividendanswer(dividend);
  };
