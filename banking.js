//deposit input to deposit total
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get the amount deposied
  const depostiInput = document.getElementById("deposit-input");
  const newDepositAmount = parseFloat(depostiInput.value);
  //   console.log(depositAmount);

  //upadate total deposit amount
  const depostTotal = document.getElementById("deposit-total");
  const previousDepositAmount = depostTotal.innerText;
  //parseFloat to convert string value to float value
  const newDepositTotal =
    parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
  depostTotal.innerText = newDepositTotal;

  //update current balance
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotal.innerText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear deposit input field
  depostiInput.value = "";
});

//---------handle withdraw input to withdraw total
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //get the amount deposied
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmount = parseFloat(withdrawInput.value);
  console.log(withdrawAmount);

  //upadate total withdraw amount
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdraw = parseFloat(withdrawTotal.innerText);
  const newWithdraw = previousWithdraw + withdrawAmount;
  withdrawTotal.innerText = newWithdraw;

  //update current balance
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotal.innerText);
  const newBalanceTotal = previousBalanceTotal - withdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear deposit input field
  withdrawInput.value = "";
});
