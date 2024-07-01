function calculateOrder() {
    const products = [
        { name: "Whopper Ala Carte", price: 300, quantity: document.getElementById('qty1').value },
        { name: "Whopper Jr Burger", price: 200, quantity: document.getElementById('qty2').value },
        { name: "Fish'n Crisp Burger", price: 250, quantity: document.getElementById('qty3').value },
        { name: "Big King Fish Burger", price: 270, quantity: document.getElementById('qty4').value },
        { name: "Chicken Burger Monster", price: 290, quantity: document.getElementById('qty5').value },
        { name: "Grilled Chicken Burger", price: 270, quantity: document.getElementById('qty6').value }
    ];

    let total = 0;
    let orderDetails = "";

    products.forEach(product => {
        if (product.quantity > 0) {
            let productTotal = product.price * product.quantity;
            orderDetails += `${product.name} - ${product.quantity} x ${product.price} = ${productTotal.toFixed(2)}\n`;
            total += productTotal;
        }
    });

    document.getElementById('carts').value = orderDetails;
    document.getElementById('total').value = `Total: ${total.toFixed(2)}`;

    const cash = parseFloat(document.getElementById('cash').value);
    if (!isNaN(cash) && cash >= total) {
        const change = cash - total;
        document.getElementById('change').value = `Change: ${change.toFixed(2)}`;
    } else {
        document.getElementById('change').value = "Insufficient cash";
    }
                            }
