document.getElementById("btn-deposite").addEventListener("click", function () {
  const depositeField = document.getElementById("deposite-field");
  const depositeNewAmount = depositeField.value;
  const depositeTotalElement = document.getElementById("deposite-total");
  const depositePreTotal = depositeTotalElement.innerText;
  const depositeCrTotal =
    parseFloat(depositePreTotal) + parseFloat(depositeNewAmount);
  depositeTotalElement.innerText = depositeCrTotal;
  const balanceTotalElement = document.getElementById("balance-total");
  const balancePreTotal = balanceTotalElement.innerText;
  const balanceCrTotal =
    parseFloat(balancePreTotal) + parseFloat(depositeNewAmount);
  balanceTotalElement.innerText = balanceCrTotal;
  depositeField.value = "";
});
