function calculateInventory(c, a){
  var inventory = (c / a);

  return parseFloat(inventory.toFixed(2));
}
function postInventoryanswer(amount) {
  var htmlEl = document.getElementById("outInventoryTurnover");

  htmlEl.innerText = amount;
}

var btn = document.getElementById("btnInventoryTurnover");
btn.onclick = function() {

  var costi = document.getElementById("inCostGoods").value;

  var avginventoryi = document.getElementById("inAvgInventory").value;



  var inventory = calculateInventory(costi, avginventoryi);

    postInventoryanswer(inventory);
  };
