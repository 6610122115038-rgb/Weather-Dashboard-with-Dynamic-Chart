let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let chart = null;

function saveAndRender() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
  updateUI();
}