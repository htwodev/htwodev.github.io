function calculateOperating(oi, net){
  var operating = (oi / net);

  return parseFloat(operating.toFixed(2));
}
function postOperatinganswer(amount) {
  var htmlEl = document.getElementById("outOperatingMargin");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnOperatingMargin");
btn.onclick = function() {

  var oi = document.getElementById("inOperatingIncome").value;

  var net = document.getElementById("inNetS").value;


  var operating = calculateGross(oi, net);

    postOperatinganswer(operating);
  };
