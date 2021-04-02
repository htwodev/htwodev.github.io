//theformula for FV is P (1 + r/n)^ (nt) where P=principal, r=annual interest Rate n = number of times compounded t= time money is invested
//(p * math.pow((1 + r/12). 12*t)) if p=0 then
//@param p float amount of Principal
//@param r interest as a percentage
//@param n term in years
function calculateFinancial(p, r, n, t){

  var fv = (p * (Math.pow(1 + ((r * .01) / n), (n * t))));

  return parseFloat(fv.toFixed(2));

}

function postFuture(amount) {
  var htmlEl = document.getElementById("outFutureValue");

  htmlEl.innerText = "$" + amount;
}

var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
  var investment = document.getElementById("inInvestment").value;

  if (investment == "") {
    alert ("Please enter an investment amount.");
    return false;
  }

  if (investment < 0) {
    alert ("Invalid investment amount.");
    return false;
  }

  var interest = document.getElementById("inInterest").value;
  var periods = document.getElementById("inPeriods").value;
  var term = document.getElementById("inTime").value;


  var fv = calculateFinancial(investment, interest, periods, term);

  postFuture(fv);
};
