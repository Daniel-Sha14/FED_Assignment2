// If the page is refreshed, reset userPoints to 0 and remove the flag


// Check if points are stored in local storage, if not, initialize to 0
let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;

// Update the points display on the website
function updatePointsDisplay() {
  document.getElementById('pointsDisplay').innerText = `Points: ${userPoints}`;
}

// Function to add an item to the cart
function addToCart(itemId, price) {
  

  // Update points based on the item price
  userPoints += Math.floor(price / 1); 

  // Save the updated points to local storage
  localStorage.setItem('userPoints', userPoints);

  // Update the points display
  updatePointsDisplay();
  
}

// Function to be called when the page loads
function onPageLoad() {
  // // Update the points display on page load
  // updatePointsDisplay();
  // Check if points are stored in local storage, if not, initialize to 0
  // userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
  

  // Update the points display on page load
  console.log("onPageLoad");
  
  updatePointsDisplay();
  
}



// Call onPageLoad when the page loads
document.addEventListener('DOMContentLoaded', onPageLoad);