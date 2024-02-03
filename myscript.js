includeHTML();
function includeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("myscript")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("myscript");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("myscript");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    searchItems();
  }
}

function searchItems() {
  // Get the search input value
  var searchTerm = document.getElementById('search-bar').value.toLowerCase();

  // Check for keywords related to items and redirect accordingly
  if (searchTerm.includes('women') && searchTerm.includes('accessories')) {
    window.location.href = 'waccessories.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('bottoms')) {
    window.location.href = 'wbottoms.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('dresses')) {
    window.location.href = 'wdressesandskirts.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('skirts')) {
    window.location.href = 'wdressesandskirts.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('innerwear')) {
    window.location.href = 'winnerwear.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('homewear')) {
    window.location.href = 'whomewear.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('maternity')) {
    window.location.href = 'maternity.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('outerwear')) {
    window.location.href = 'wouterwear.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('sportswear')) {
    window.location.href = 'wsportswear.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('tops')) {
    window.location.href = 'wtops.html';
  } else if (searchTerm.includes('women') && searchTerm.includes('underwear')) {
    window.location.href = 'wunderwear.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('accessories')) {
    window.location.href = 'maccessories.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('bottoms')) {
    window.location.href = 'mbottoms.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('homewear')) {
    window.location.href = 'mhomewear.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('innerwear')) {
    window.location.href = 'minnerwear.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('outerwear')) {
    window.location.href = 'mouterwear.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('sportswear')) {
    window.location.href = 'msportswear.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('tops')) {
    window.location.href = 'mtops.html';
  } else if (searchTerm.includes('men') && searchTerm.includes('underwear')) {
    window.location.href = 'munderwear.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('homewear')) {
    window.location.href = 'khomewear.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('innerwear')) {
    window.location.href = 'kinnerwear.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('outerwear')) {
    window.location.href = 'kouterwear.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('tops')) {
    window.location.href = 'ktops.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('sportswear')) {
    window.location.href = 'ksportswear.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('underwear')) {
    window.location.href = 'kunderwear.html';
  } 
  else {
    alert('Item not found!');
  }
}



// Check if points are stored in local storage, if not, initialize to 0
let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;

// Update the points display on the website
function updatePointsDisplay() {
  document.getElementById('pointsDisplay').innerText = `Points: ${userPoints}`;
}

// Function to add an item to the cart
function addToCart(itemId, price) {
  // Perform the logic to add the item to the cart
  // ...

  // Update points based on the item price
  userPoints += Math.floor(price / 1); // Assuming 1 dollar = 5 points

  // Save the updated points to local storage
  localStorage.setItem('userPoints', userPoints);

  // Update the points display
  updatePointsDisplay();

  // Show a message to the user
  alert(`Item added to cart. You now have ${userPoints} points.`);
}

// Function to be called when the page loads
function onPageLoad() {
  // Update the points display on page load
  updatePointsDisplay();
}

// Call onPageLoad when the page loads
document.addEventListener('DOMContentLoaded', onPageLoad);

function selectColor(color) {
  // Update the selected color display
  document.getElementById('selected-color').innerText = color;
}

function selectSize(size) {
  // Update the selected size display
  document.getElementById('selected-size').innerText = size;
}