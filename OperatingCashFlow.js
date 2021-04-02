function calculateOperating(c, l){
  var operating = (c / l);

  return parseFloat(operating.toFixed(2));
}
function postOperatinganswer(amount) {
  var htmlEl = document.getElementById("outOperating");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnOperating");
btn.onclick = function() {

  var ocash = document.getElementById("inOperatingCash").value;

  var oliabilities = document.getElementById("inLiabilitiesOperating").value;



  var operating = calculateOperating(ocash, oliabilities);

    postOperatinganswer(operating);
  };
