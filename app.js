let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById('total').textContent = total.toFixed(2);
    calculateChange();
}

function calculateChange() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const change = cash - total;
    document.getElementById('change').textContent = change.toFixed(2);
}

function checkout() {
    alert('Thank you for your purchase! Your total is ₱' + total.toFixed(2));
    // Reset total and fields
    total = 0;
    document.getElementById('total').textContent = '0.00';
    document.getElementById('cash').value = '';
    document.getElementById('change').textContent = '0.00';
}
