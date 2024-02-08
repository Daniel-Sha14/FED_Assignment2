

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve and display points when the page loads
  updatePointsDisplay();

  // Add an event listener for the storage event
  window.addEventListener('storage', function (event) {
      // Check if the storage event is related to the 'cart' key
      if (event.key === 'cart') {
          // Update points display when the cart is updated
          updatePointsDisplay();
      }
  });
});

function updatePointsDisplay() {
  console.log('updatePointsDisplay called');
  // Retrieve points from local storage
  let points = calculateTotalPoints(JSON.parse(localStorage.getItem('cartItems')) || []);

  // Get the points display element
  let pointsDisplay = document.getElementById('pointsDisplay');

  if (pointsDisplay) {
      // Update the points display
      pointsDisplay.innerText = 'Points: ' + points;
  }
}

function calculateTotalPoints(cartItems) {
  return cartItems.reduce(function (total, item) {
      var itemPrice = parseFloat(item.price.replace('$', '')); // Assuming the price is formatted like '$XX.XX'
      return total + item.quantity * 5 * itemPrice;
  }, 0);
}

// Call updatePointsDisplay after updating the cart items on page load
document.addEventListener('DOMContentLoaded', function () {
  // Update points display on page load
  updatePointsDisplay();
});


function updatePointsDisplay2(earnedPoints) {
  // Assuming you have an HTML element with the ID "earnedPointsDisplay"
  var earnedPointsDisplay = document.getElementById('earnedPointsDisplay');

  // Check if the element exists
  if (earnedPointsDisplay) {
    // Update the content of the element with the new earned points
    earnedPointsDisplay.innerText = 'Points after Redemption: ' + earnedPoints;
  } else {
    console.error('Earned Points Display Element not found!');
  }
}

function redeemProduct(productId, pointsRequired) {
  // Retrieve earned points from local storage
  var earnedPoints = calculateTotalPoints(JSON.parse(localStorage.getItem('cartItems')) || []);

  // Check if the user has enough earned points to redeem
  if (pointsRequired <= earnedPoints) {
    // Deduct redeemed points from earned points
    earnedPoints -= pointsRequired;

    // Implement your specific redemption logic here, e.g., update UI or trigger backend process

    // Update the earned points display
    updatePointsDisplay2(earnedPoints);

    // Save the updated earned points to local storage
    sessionStorage.setItem('cartItems', JSON.stringify(earnedPoints));

    alert('Redemption successful!');
  } else {
    alert('You do not have enough earned points to redeem this product.');
  }
  console.log('Redemption Attempt - Earned Points:', earnedPoints);
  console.log('Redemption Attempt - Points Required:', pointsRequired);
}


