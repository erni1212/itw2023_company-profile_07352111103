function increaseQuantity(button) {
  // Get the current quantity
  var quantityElement = button.parentNode.querySelector("span");
  var currentQuantity = parseInt(quantityElement.innerText);

  // Increase the quantity
  quantityElement.innerText = currentQuantity + 1;

  // Update the total
  updateTotal(button);
}

function decreaseQuantity(button) {
  // Get the current quantity
  var quantityElement = button.parentNode.querySelector("span");
  var currentQuantity = parseInt(quantityElement.innerText);

  // Ensure quantity is not less than 1
  if (currentQuantity > 1) {
    // Decrease the quantity
    quantityElement.innerText = currentQuantity - 1;

    // Update the total
    updateTotal(button);
  }
}

function updateTotal(button) {
  // Get the row of the item
  var row = button.closest("tr");

  // Get the price and quantity elements
  var priceElement = row.querySelector("td:nth-child(2)");
  var quantityElement = row.querySelector("td:nth-child(3) span");

  // Calculate the total
  var price = parseFloat(priceElement.innerText.replace("$", ""));
  var quantity = parseInt(quantityElement.innerText);
  var total = price * quantity;

  // Update the total element
  row.querySelector("td:nth-child(4)").innerText = "$" + total.toFixed(2);
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    // Add more options as needed
  });
});

