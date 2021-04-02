function calculateBudgetCalc(s, h, t, d, l, m, c, r, e){

var bd = ((s / 12) - h - t - d - l - m - c - r - e);

return parseFloat(bd.toFixed(2));

}

function postBudget(amount) {
  var htmlEl = document.getElementById("outBud");

  htmlEl.innerText = "$" + amount;
}

var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
  var salary = document.getElementById("inSalary").value;

  if (salary <0) {
    alert ("Salary cannot be a negative number.");
    return false;
  }
  if (salary == "") {
    alert ("Please enter an investment amount.");
    return false;
  }

  var housing = document.getElementById("outHousing").value;
  var transportation = document.getElementById("outTransportation").value;
  var debt = document.getElementById("outDebt").value;
  var living = document.getElementById("outLiving").value;
  var medical = document.getElementById("outMedical").value;
  var children = document.getElementById("outChildren").value;
  var retirement = document.getElementById("outRetirement").value;
  var entertainment = document.getElementById("outEntertainment").value;


var bd = calculateBudgetCalc(salary, housing, transportation, debt, living, medical, children, retirement, entertainment);

postBudget(bd);
};
