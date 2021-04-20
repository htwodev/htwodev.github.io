//M = P[r(1+r)^n/(((1+r)^n)-1))] + t
//P = Oustanding loan amount
//r= monthly interest Rate
//m= total number of periods/months
//t = monthly taxes
function calculateMortgage(p, r, m, t){

  var pmt = (p * ((r * Math.pow((1 + r), m) / (Math.pow((1 + r), m) - 1)))) + t;

  return parseFloat(pmt.toFixed(2));

}

function postPayments(payment) {
  var htmlEl = document.getElementById("outMonthly");

  htmlEl.innerText = "$" + payment;
}

var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
  var cost = document.getElementById("inCost").value;

  if (cost == "") {
    alert ("Please enter a cost amount");
    return false;
  }

  if (cost < 0) {
    alert ("Invalid cost");
    return false;
  }


  var down = document.getElementById("inDown").value;

  if (down < 0) {
    alert ("Invalid down payment");
    return false;
  }

  var interest = document.getElementById("inAPR").value;
  var term = document.getElementById("inPeriod").value;

  if (term < 0) {
    alert ("Invalid term");
    return false;
  }

  var cost = document.getElementById("inCost").value;
  var tax = document.getElementById('inTax').value;

  if (tax < 0) {
    alert ("Invalid property tax");
    return false;
  }

  var outstanding = (cost - down);
  var rate = ((interest * .01) / 12);
  var month = (term * 12);
  var monthlyt = (tax / 12)

  var pmt = calculateMortgage(outstanding, rate, month, monthlyt);

  postPayments(pmt);
};
