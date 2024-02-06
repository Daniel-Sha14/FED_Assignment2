// // If the page is refreshed, reset userPoints to 0 and remove the flag
// const isPageRefreshed = sessionStorage.getItem('isPageRefreshed') === 'true';

// // Initialize userPoints from localStorage or set to 0 if refreshed
// let userPoints = isPageRefreshed ? 0 : parseInt(localStorage.getItem('userPoints')) || 0;

// function resetPointsOnRefresh() {
//   sessionStorage.setItem('isPageRefreshed', 'true');
//   userPoints = 0;
//   localStorage.setItem('userPoints', userPoints);
//   //updatePointsDisplay(); // Update the points display after resetting
// }

// document.addEventListener('DOMContentLoaded', function () {
//   updatePointsDisplay(); // Initial display when the page loads
// });

// function updatePointsDisplay() {
//   let points = localStorage.getItem('points') || 0;
//   let pointsDisplay = document.getElementById('pointsDisplay');

//   if (pointsDisplay) {
//       pointsDisplay.innerText = 'Points: ' + points;
//   } else {
//       console.error("Element with ID 'pointsDisplay' not found.");
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  // Check if the page was manually refreshed
  if (performance.navigation.type === 1) {
      // Page was refreshed manually, reset points
      localStorage.setItem('points', 0);
  }

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
  // Retrieve points from local storage
  let points = localStorage.getItem('points') || 0;
  // Get the points display element
  let pointsDisplay = document.getElementById('pointsDisplay');

  if (pointsDisplay) {
      // Update the points display
      pointsDisplay.innerText = 'Points: ' + points;
  } 
}


// Function to add an item to the cart
// function addToCart(itemName, price) {
  
//   let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
//   // Update points based on the item price
//   userPoints += Math.floor(price / 1); 

//   // Save the updated points to local storage
//   localStorage.setItem('userPoints', userPoints);

//   // Update the points display
//   updatePointsDisplay();
  
// }


// Function to be called when the page loads
// function onPageLoad() {
//   // // // Update the points display on page load
//   // // updatePointsDisplay();
//   // // Check if points are stored in local storage, if not, initialize to 0
//   // // userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
  

//   // // Update the points display on page load
//   // console.log("onPageLoad");
//   localStorage.removeItem('userPoints');
//     console.log('onPageLoad');
    
//     // Update the points display on page load
//     updatePointsDisplay();
  
  
// }

// // Call onPageLoad when the page loads
// document.addEventListener('DOMContentLoaded', onPageLoad);