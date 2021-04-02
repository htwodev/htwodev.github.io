function calculateBook(s, p, c){
  var book = (s - p) / c;

  return parseFloat(book.toFixed(2));
}
function postBookanswer(amount) {
  var htmlEl = document.getElementById("outBookValue");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnBookValue");
btn.onclick = function() {

  var shareb = document.getElementById("inShareholder").value;

  var preferredb = document.getElementById("inPreferred").value;

  var commonb = document.getElementById("inTotalCommon").value;

  var book = calculateBook(shareb, preferredb, commonb);

    postBookanswer(book);
  };
