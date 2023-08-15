document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawNewAmount = withdrawField.value;
  const withdrawTotaElement = document.getElementById("withdraw-total");
  const withdrawPreTotal = withdrawTotaElement.innerText;
  const withdrawCrTotal =
    parseFloat(withdrawPreTotal) + parseFloat(withdrawNewAmount);
  withdrawTotaElement.innerText = withdrawCrTotal;
  const balanceTotalElement = document.getElementById("balance-total");
  const balancePreTotal = balanceTotalElement.innerText;
  const balanceCrTotal =
    parseFloat(balancePreTotal) - parseFloat(withdrawNewAmount);
  balanceTotalElement.innerText = balanceCrTotal;
  withdrawField.value = "";
});
