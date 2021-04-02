function calculateInterest(oi, ie){
  var interest = (oi / ie);

  return parseFloat(interest.toFixed(2));
}
function postInterestanswer(amount) {
  var htmlEl = document.getElementById("outInterestCoverage");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnInterestCoverage");
btn.onclick = function() {

  var oi = document.getElementById("inOperatingIncome").value;

  var ie = document.getElementById("inInterestExpenses").value;


  var interest = calculateEquity(oi, ie);

    postInterestanswer(interest);
  };
