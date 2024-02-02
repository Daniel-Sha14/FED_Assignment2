// productDetails.js

const products = {
    "flannelpajamabottoms": {
      name: "Flannel Bottom Pajamas",
      image: "images/flannelpajamabottoms.webp",
      description: "Comfortable flannel pajama bottoms.",
      price: 10.00,
    },
    "highriseloungepants": {
      name: "High Rise Lounge Pants",
      image: "images/highriseloungepants.webp",
      description: "Stylish high rise lounge pants.",
      price: 30.00,
    },
    // Add more products as needed
  };
  
  function showProductDetails(productId) {
    const product = products[productId];
  
    if (product) {
      document.getElementById("productName").innerText = product.name;
      document.getElementById("productImage").src = product.image;
      document.getElementById("productDescription").innerText = product.description;
      document.getElementById("productPrice").innerText = `$${product.price.toFixed(2)}`;
    }
  }
  