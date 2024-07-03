let orderItems = [];
        let totalAmount = 0;

        function addToOrder(itemName, itemPrice) {
            // Add item to the order array
            orderItems.push({ name: itemName, price: itemPrice });

            // Update the total amount
            totalAmount += itemPrice;

            // Update the order summary UI
            updateOrderSummary();
        }

        function updateOrderSummary() {
            const orderItemsContainer = document.getElementById('orderItems');
            orderItemsContainer.innerHTML = '';

            orderItems.forEach(item => {
                const orderItemDiv = document.createElement('div');
                orderItemDiv.classList.add('order-item');
                orderItemDiv.innerHTML = `<span>${item.name}</span><span>₱${item.price.toFixed(2)}</span>`;
                orderItemsContainer.appendChild(orderItemDiv);
            });

            // Update total amount in the UI
            document.getElementById('totalAmount').innerText = `₱${totalAmount.toFixed(2)}`;
        }

        function calculateChange() {
            const cash = parseFloat(document.getElementById('cash').value) || 0;
            const change = cash - totalAmount;
            document.getElementById('change').value = `₱${change.toFixed(2)}`;
        }
    </script>
</body>
</html>
