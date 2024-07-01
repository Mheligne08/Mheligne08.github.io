var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");
var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");
var carts = document.getElementById("carts");
var totalInput = document.getElementById("total");
var cashInput = document.getElementById("cash");
var changeInput = document.getElementById("change");

function addOrder() {
    carts.textContent = "";

    if (qty1 && parseFloat(qty1.value) > 0 && product1 && price1) {
        var order1 = qty1.value.toString() + " pcs x " + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + "\n";
        carts.textContent += order1;
    }

    if (qty2 && parseFloat(qty2.value) > 0 && product2 && price2) {
        var order2 = qty2.value.toString() + " pcs x " + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + "\n";
        carts.textContent += order2;
    }
    
    if (qty3 && parseFloat(qty3.value) > 0 && product3 && price3) {
        var order3 = qty3.value.toString() + " pcs x " + product3.textContent + " - Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2) + "\n";
        carts.textContent += order3;
    }

    // Add similar checks for qty4, qty5, qty6 if needed
    
    updateTotal(); // Update total after adding orders
}

function updateTotal() {
    var total = 0;

    total += parseFloat(qty1.value) * parseFloat(price1.textContent);
    total += parseFloat(qty2.value) * parseFloat(price2.textContent);
    total += parseFloat(qty3.value) * parseFloat(price3.textContent);
    total += parseFloat(qty4.value) * parseFloat(price4.textContent);
    total += parseFloat(qty5.value) * parseFloat(price5.textContent);
    total += parseFloat(qty6.value) * parseFloat(price6.textContent);

    console.log("Total:", total); // Add this line for debugging

    totalInput.value = total.toFixed(2); // Update total input field
    calculateChange(); // Calculate change after updating total
}

function calculateChange() {
    var total = parseFloat(totalInput.value);
    var cash = parseFloat(cashInput.value);

    if (!isNaN(total) && !isNaN(cash)) {
        var change = cash - total;
        changeInput.value = change.toFixed(2); // Update change input field
    } else {
        changeInput.value = "";
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
cashInput.addEventListener("input", calculateChange);ayusin mo mga mga errors nito
