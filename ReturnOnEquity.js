function calculateROE(neti, she){
  var equity = (neti / she);

  return parseFloat(equity.toFixed(2));
}
function postROEanswer(amount) {
  var htmlEl = document.getElementById("outReturnOnEquity");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnReturnOnEquity");
btn.onclick = function() {

  var neti = document.getElementById("inNetIn").value;

  var she = document.getElementById("inShareholderE").value;


  var equity = calculateROE(neti, she);

    postROEanswer(equity);
  };
