
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
  } else if (searchTerm.includes('kids') && searchTerm.includes('bottoms')) {
    window.location.href = 'kbottoms.html';
  } else if (searchTerm.includes('kids') && searchTerm.includes('homewear')) {
    window.location.href = 'khomewear.html';
  }else if (searchTerm.includes('kids') && searchTerm.includes('innerwear')) {
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

function addToCart(item, points) {
  // ... (existing addToCart logic)

  // Update points in localStorage
  let currentPoints = localStorage.getItem('points') || 0;
  localStorage.setItem('points', parseInt(currentPoints) + points);

  // Update points display on rewards.html if it's open
  if (window.location.href.includes("rewards.html")) {
      updatePointsDisplay();
  }
}


function selectColor(color) {
  // Update the selected color display
  document.getElementById('selected-color').innerText = color;
}

function selectSize(size) {
  // Update the selected size display
  document.getElementById('selected-size').innerText = size;
}

function updateProductDetails(item) {
  document.getElementById("productImage").src = item.image;
  document.getElementById("productName").innerText = item.name;
  document.getElementById("productPrice").innerText = "Price: $" + item.price;
  document.getElementById("productDescription").innerText = item.description;

  // Update color boxes
  var colorBoxes = document.getElementById("color-boxes");
  colorBoxes.innerHTML = "";
  item.colors.forEach(function(color) {
      var box = document.createElement("div");
      box.className = "color-box";
      box.style.backgroundColor = color;
      box.setAttribute("onclick", "selectColor('" + color + "')");
      colorBoxes.appendChild(box);
  });

  // Update size selection boxes
  var selectionBoxes = document.getElementById("selection-boxes");
  selectionBoxes.innerHTML = "";
  item.sizes.forEach(function(size) {
      var box = document.createElement("div");
      box.className = "selection-box";
      box.setAttribute("onclick", "selectSize('" + size + "')");
      box.innerText = size;
      selectionBoxes.appendChild(box);
  });
}

var sampleItem = {
  image: "images/header2.png",
  name: "Sample Product",
  price: "$19.99",
  description: "This is a sample product description."
  // Add other properties as needed
};

// Function to update item details
function updateItemDetails(item) {
  document.getElementById("item-image").src = item.image;
  document.getElementById("item-name").textContent = item.name;
  document.getElementById("item-price").textContent = item.price;
  document.getElementById("item-description").textContent = item.description;
  // Add code to update other details dynamically
}

// Initial update with the sample item
updateItemDetails(sampleItem);

function showItemDetails(name, price, image, description) {
  // Store item details in localStorage (you can use other methods like cookies, session storage, etc.)
  localStorage.setItem('itemName', name);
  localStorage.setItem('itemPrice', price);
  localStorage.setItem('itemImage', image);
  localStorage.setItem('itemDescription', description);

  // Redirect to the item description page
  window.location.href = 'itemdescription.html';
}

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve item details from localStorage
  var itemName = localStorage.getItem('itemName');
  var itemPrice = localStorage.getItem('itemPrice');
  var itemImage = localStorage.getItem('itemImage');
  var itemDescription = localStorage.getItem('itemDescription');

  // Update the content dynamically
  document.getElementById('item-name').textContent = itemName;
  document.getElementById('item-price').textContent = itemPrice;
  document.getElementById('item-image').src = itemImage;
  document.getElementById('item-description').textContent = itemDescription;
  // Add other dynamic updates as needed
});