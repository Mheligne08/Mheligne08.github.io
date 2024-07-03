// Function to add items to order summary
function addToOrder(itemName, itemPrice) {
    var orderItems = document.getElementById('orderItems');
    var totalAmountElement = document.getElementById('totalAmount');
    
    // Create new order item element
    var item = document.createElement('div');
    item.classList.add('order-item');
    item.innerHTML = `
        <span>${itemName}</span>
        <span>₱${itemPrice.toFixed(2)}</span>
    `;
    
    // Append item to orderItems container
    orderItems.appendChild(item);
    
    // Update total amount
    var currentTotal = parseFloat(totalAmountElement.textContent.replace('₱', ''));
    var newTotal = currentTotal + itemPrice;
    totalAmountElement.textContent = `₱${newTotal.toFixed(2)}`;
}

// Function to calculate change
function calculateChange() {
    var total = parseFloat(document.getElementById('totalAmount').textContent.replace('₱', ''));
    var cashTendered = parseFloat(document.getElementById('cash').value);
    var change = cashTendered - total;
    document.getElementById('change').value = change.toFixed(2);
}

// Function to initialize products
function initializeProducts() {
    var products = [
        { name: 'Whopper Ala Carte', price: 300 },
        { name: 'Whopper Jr Burger', price: 200 },
        { name: 'Fish\'n Crisp Burger', price: 250 }
        // Add more products as needed
    ];

    var productList = document.getElementById('product-list');
    products.forEach(function(product) {
        var productCol = document.createElement('div');
        productCol.classList.add('col-md-4');
        productCol.innerHTML = `
            <div class="card product-card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: ₱${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToOrder('${product.name}', ${product.price})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCol);
    });
}

// Initialize products when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
});
