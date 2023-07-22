// getting all elements needed
const balance = document.getElementById("balance");
const transactions = document.getElementById("transactions");
const itemDesc = document.getElementById("text-value");
const itemAmt = document.getElementById("amount-value");
const submit = document.getElementById("submit");

let allExpenses = localStorage.getItem("Expenses")
  ? JSON.parse(localStorage.getItem("Expenses"))
  : [];

function placeElement() {
  transactions.innerHTML = "";
  let price = 0;
  allExpenses.forEach((element, i) => {
    const itemTemplate = `
    <li class="items" data-item="${i}">
        <span class="left">${element.item}</span>
        <span class="right">₹${element.price}</span>
        <span class="delete fa-solid fa-xmark"></span>
    </li>
    `;
    price += Number(element.price);
    transactions.innerHTML += itemTemplate;
  });
  balance.innerHTML = `₹${price}`;
  localStorage.setItem("Expenses", JSON.stringify(allExpenses));
}
submit.addEventListener("click", (e) => {
  if (itemAmt.value.trim() && itemDesc.value.trim()) {
    allExpenses.push({ item: itemDesc.value, price: itemAmt.value });
    itemDesc.value = "";
    itemAmt.value = "";
    placeElement();
  } else if (!itemDesc.value.trim()) {
    itemDesc.focus();
  } else {
    itemAmt.focus();
  }
});

transactions.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let elementId = e.target.parentElement.getAttribute("data-item");
    allExpenses.splice(elementId, 1);
    placeElement();
  }
});

placeElement();
