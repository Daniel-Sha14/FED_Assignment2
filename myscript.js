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

// Sample product data (you can fetch this from a server or a database)
const products = [
  { id: 1, name: 'Tank Top', description: 'Comfortable tank top for everyday wear.' },
  { id: 2, name: 'Jeans', description: 'Classic denim jeans for any occasion.' },
  // Add more products as needed
];

// Function to display product details
function showProductDetails(productId) {
  const product = products.find(item => item.id === productId);

  if (product) {
      // Update the content of the page with product details
      document.getElementById('product-name').innerText = product.name;
      document.getElementById('product-description').innerText = product.description;
      // Update other details as needed

      // You can also navigate to a different section of the page if needed
      window.location.href = '#product-details';
  } else {
      alert('Product not found');
  }
}
