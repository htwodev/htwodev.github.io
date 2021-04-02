function calculateDays(d){
  var days = (365 / d)

  return parseFloat(days.toFixed(2));
}
function postDaysanswer(amount) {
  var htmlEl = document.getElementById("outDaysSales");

  htmlEl.innerText = amount + " Days";
}

var btn = document.getElementById("btnDaysSales");
btn.onclick = function() {

  var daysinv = document.getElementById("inDaysInventory").value;

  var days = calculateDays(daysinv);

    postDaysanswer(days);
  };
