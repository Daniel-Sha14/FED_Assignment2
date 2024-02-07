function selectColor(color) {
    document.getElementById('selected-color').innerText = color;
}

function selectSize(size) {
    document.getElementById('selected-size').innerText = size;
}







// // Retrieve cart items from local storage
// /*var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// // Display cart items
// var cartList = document.getElementById('cart-items');
// cartItems.forEach(function(item) {
//     var listItem = document.createElement('div');
//     listItem.textContent = item.name + ' - ' + item.color + ', ' + item.size + ' - ' + item.price + ' - Quantity: ' + item.quantity;
//     cartList.appendChild(listItem);
// });*/


// // Retrieve cart items from local storage
// var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// // Display cart items
// var cartList = document.getElementById('cart-items');

// cartItems.forEach(function(item) {
//     // Create a container for each cart item
//     var cartItemContainer = document.createElement('div');
//     cartItemContainer.classList.add('cart-item');

//     // Create an image element for the product image
//     var imageElement = document.createElement('img');
//     imageElement.src = item.image;
//     imageElement.alt = item.name;
//     imageElement.classList.add('item-image');
//     cartItemContainer.appendChild(imageElement);

//     // Create a div to hold the details of the item
//     var detailsDiv = document.createElement('div');
//     detailsDiv.classList.add('item-details');

//     // Create elements to display the item details
//     var itemName = document.createElement('h3');
//     itemName.textContent = item.name;

//     var itemColor = document.createElement('p');
//     itemColor.textContent = 'Color: ' + item.color 
    
//     var itemSize = document.createElement('p');
//     itemSize.textContent = 'Size: ' + item.size;

//     var itemPrice = document.createElement('p');
//     itemPrice.textContent = 'Price: ' + item.price;

//     var itemQuantity = document.createElement('p');
//     itemQuantity.textContent = 'Quantity: ' + item.quantity;

//     // Append the details elements to the details div
//     detailsDiv.appendChild(itemName);
//     detailsDiv.appendChild(itemColor);
//     detailsDiv.appendChild(itemSize);
//     detailsDiv.appendChild(itemPrice);
//     detailsDiv.appendChild(itemQuantity);

//     // Append the details div to the cart item container
//     cartItemContainer.appendChild(detailsDiv);

//     // Append the cart item container to the cart list
//     cartList.appendChild(cartItemContainer);
// });





// ****** Image unable to be displayed *****

function updateCartDisplay(cartItems) {
    var cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear the existing content

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Display cart items
        cartItems.forEach(function(item) {
            var itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Size: ${item.size}</p>
                    <p>Color: ${item.color}</p>
                    <label for="${item.name}-quantity">Quantity:</label>
                    <select id="${item.name}-quantity" onchange="updateQuantity(this.value, '${item.name}')">
                        ${generateQuantityOptions(item.quantity)}
                    </select>
                    <button class="removeBtn font2" onclick="removeItemFromCart('${item.name}')">REMOVE</button>
                </div>
            `;
            cartContainer.appendChild(itemElement);
        });

        // Update the total price
        updateTotalPrice(cartItems);
        
    }
}



function updateTotalPrice(cartItems) {
    var totalPriceElement = document.getElementById('total-price');
    var totalPrice = calculateTotalPrice(cartItems);
    totalPriceElement.innerText = 'Total: $' + totalPrice;
}


function calculateTotalPrice(cartItems) {
    var totalPrice = cartItems.reduce(function(total, item) {
        var itemPrice = parseFloat(item.price.replace('$', ''));
        var itemTotal = itemPrice * parseInt(item.quantity);
        //console.log('Item:', item.name, 'Item Price:', itemPrice, 'Item Quantity:', item.quantity, 'Item Total:', itemTotal);
        return total + itemTotal;
    }, 0);

    //console.log('Total Price:', totalPrice.toFixed(2));
    return totalPrice.toFixed(2);
}



function addToShopCart() {
    // Get selected product details
    var productImage = document.getElementById('item-image').src;
    var productName = document.getElementById('item-name').innerText;
    var productPrice = document.getElementById('item-price').innerText;
    var selectedColor = document.getElementById('selected-color').innerText;
    var selectedSize = document.getElementById('selected-size').innerText;
    var quantity = document.getElementById('quantity').value;

    // Construct cart item object
    var cartItem = {
        image: productImage,
        name: productName,
        price: productPrice,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity
    };
    

    // Retrieve existing cart items from local storage or create an empty array
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    


    // Check if the item is already in the cart
    var itemExists = cartItems.some(function(item) {
        return (
            item.name === cartItem.name &&
            item.color === cartItem.color &&
            item.size === cartItem.size
        );
    });
    // If the item doesn't exist, add it to the cart
    if (!itemExists) {
        cartItems.push(cartItem);

        // Save the updated cart items back to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay(cartItems);
        // Log cart items and total price to console
        //console.log('Cart Items:', cartItems);
        //console.log('Total Price:', calculateTotalPrice(cartItems));
        
    } else {
        alert('This item is already in the cart.');
    }
   

    
    


    // Add the new cart item
    //cartItems.push(cartItem);

    // Save the updated cart items back to local storage
    //localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to the cart page
    //window.location.href = 'cart.html';
}





var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
var cartContainer = document.getElementById('cart-items');

// Check if the cart is empty
if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
    // Display cart items
    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Size: ${item.size}</p>
                <p>Color: ${item.color}</p>
                <label for="${item.name}-quantity">Quantity:</label>
                <select id="${item.name}-quantity" onchange="updateQuantity(this.value, '${item.name}')">
                    ${generateQuantityOptions(item.quantity)}
                </select>
                <button class="removeBtn font2" onclick="removeItemFromCart('${item.name}')">REMOVE</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);

        // Add event listener to the remove button
        var removeButton = itemElement.querySelector('.removeBtn');
        removeButton.addEventListener('click', function() {
            removeItemFromCart(item.name);
            itemElement.remove(); // Remove HTML element from the cart display
            //console.log('Total Price Before Update:', calculateTotalPrice(cartItems));
            updateCartDisplay(cartItems); // Update the total price
        });
    });
    updateTotalPrice(cartItems);
    

}

// Function to generate quantity options for the dropdown
function generateQuantityOptions(selectedQuantity) {
    var options = '';
    for (var i = 1; i <= 3; i++) {
        if (i == selectedQuantity) {
            options += `<option value="${i}" selected>${i}</option>`;
        } else {
            options += `<option value="${i}">${i}</option>`;
        }
    }
    return options;
}

// Function to update the quantity in localStorage when dropdown value changes
function updateQuantity(quantity, itemName) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.map(function(item) {
        if (item.name === itemName) {
            item.quantity = quantity;
        }
        return item;
    });
    
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    updateCartDisplay(updatedCartItems);
}





// // // Add event listener to the remove button
// var removeButton = itemElement.querySelector('.removeBtn');
// removeButton.addEventListener('click', function() {
//     removeItemFromCart(item.name);
//     itemElement.remove(); // Remove HTML element from the cart display
//     updateTotalPrice(cartItems);
// });


// Function to remove item from cart
function removeItemFromCart(itemName) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.filter(function(item) {
        return item.name !== itemName;
    });

    // Update the local storage first
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // Update the total price after removing an item
    updateTotalPrice(updatedCartItems);

    // Update the cart display after updating the total price
    updateCartDisplay(updatedCartItems);
}