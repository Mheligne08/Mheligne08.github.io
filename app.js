let order = [];

function addToOrder(name, price) {
    const item = order.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        order.push({ name, price, quantity: 1 });
    }
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';
    let totalAmount = 0;

    order.forEach(item => {
        totalAmount += item.price * item.quantity;
        orderItemsContainer.innerHTML += `
            <div class="order-item">
                <span>${item.name} x${item.quantity}</span>
                <span>₱${item.price * item.quantity}.00</span>
            </div>
        `;
    });

    document.getElementById('totalAmount').textContent = `₱${totalAmount}.00`;
}

function checkout() {
    if (order.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    // Show checkout modal
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
    // Clear the order
    order = [];
    // Update the order summary
    updateOrderSummary();
}
// Function to update the order summary
function updateOrder() {
    // Your existing code for updating the order summary
}

// Function to calculate change
function calculateChange() {
    let totalAmount = parseFloat(document.getElementById('totalAmount').innerText.replace('₱', ''));
    let cashTendered = parseFloat(document.getElementById('cash').value);
    let change = cashTendered - totalAmount;

    if (isNaN(change) || change < 0) {
        document.getElementById('change').value = '';
    } else {
        document.getElementById('change').value = '₱' + change.toFixed(2);
    }
}

// Function to handle checkout
function checkout() {
    calculateChange();
    $('#checkoutModal').modal('show');
}
    
