function calculateGross(gp, ns){
  var gross = (gp / ns);

  return parseFloat(gross.toFixed(2));
}
function postGrossanswer(amount) {
  var htmlEl = document.getElementById("outGrossMargin");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnGrossMargin");
btn.onclick = function() {

  var gp = document.getElementById("inGrossProf").value;

  var ns = document.getElementById("inNetSales").value;


  var gross = calculateGross(gp, ns);

    postGrossanswer(gross);
  };
