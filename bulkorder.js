//For adding more products
document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('add-product-btn');
    const productsContainer = document.getElementById('products-container');

    addProductBtn.addEventListener('click', function() {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <div class="form-group">
                <label for="product-name">Product Name:</label>
                <input type="text" class="product-name" name="product-name" required>
            </div>
            <div class="form-group">
                <label for="quantity">Quantity:</label>
                <input type="number" class="quantity" name="quantity" required>
            </div>
        `;

        productsContainer.appendChild(productDiv);
    });
});


//Shows a msg when order is submitted
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bulk-order-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // You can perform form validation here if needed
        
        // Display confirmation message
        confirmationMessage.innerText = 'Order has been submitted successfully!';
        confirmationMessage.style.color = 'green';

        // Reset the form after submission if needed
        form.reset();
    });
});
