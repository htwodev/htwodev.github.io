function calculateService(opi, td){
  var service = (opi / td);

  return parseFloat(service.toFixed(2));
}
function postServiceanswer(amount) {
  var htmlEl = document.getElementById("outDebtServiceCoverage");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnDebtServiceCoverage");
btn.onclick = function() {

  var opi = document.getElementById("inOpIn").value;

  var td = document.getElementById("inTotalDebt").value;


  var service = calculateService(opi, td);

    postServiceanswer(service);
  };
