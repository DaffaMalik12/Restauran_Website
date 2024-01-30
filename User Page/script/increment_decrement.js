const container = document.querySelector(".container");
const totalPriceElement = document.querySelector(".total-price");

let totalPrice = 60000; // Initialize total price

container.addEventListener("click", (event) => {
  const target = event.target;

  // Check if the clicked element is the plus or minus button
  if (target.id === "plus" || target.id === "minus") {
    const cardContent = target.closest(".content");
    const numElement = cardContent.querySelector("#num");
    const cardPrice = parseInt(cardContent.parentElement.dataset.price, 10);

    if (target.id === "plus") {
      incrementNum(numElement, cardPrice);
    } else if (target.id === "minus") {
      decrementNum(numElement, cardPrice);
    }
  }
});

function incrementNum(numElement, cardPrice) {
  let num = parseInt(numElement.innerText, 10);
  num++;
  num = num < 10 ? "0" + num : num;
  numElement.innerText = num;

  // Update total price
  totalPrice += cardPrice;
  updateTotalPrice();
}

function decrementNum(numElement, cardPrice) {
  let num = parseInt(numElement.innerText, 10);
  if (num > 1) {
    num--;
    num = num < 10 ? "0" + num : num;
    numElement.innerText = num;

    // Update total price
    totalPrice -= cardPrice;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  totalPriceElement.innerText = "Rp." + totalPrice.toLocaleString();
}
