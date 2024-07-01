function buyProducts() {
    // Get quantity inputs
    var qty1 = document.getElementById("qty1").value;
    var qty2 = document.getElementById("qty2").value;
    var qty3 = document.getElementById("qty3").value;
    var qty4 = document.getElementById("qty4").value;
    var qty5 = document.getElementById("qty5").value;

    // Get prices
    var price1 = parseFloat(document.getElementById("price1").innerHTML);
    var price2 = parseFloat(document.getElementById("price2").innerHTML);
    var price3 = parseFloat(document.getElementById("price3").innerHTML);
    var price4 = parseFloat(document.getElementById("price4").innerHTML);
    var price5 = parseFloat(document.getElementById("price5").innerHTML);

    // Calculate total
    var total = qty1 * price1 + qty2 * price2 + qty3 * price3 + qty4 * price4 + qty5 * price5;

    // Display total
    document.getElementById("total").value = total.toFixed(2);

    // Calculate change
    var cashTendered = parseFloat(document.getElementById("cash").value);
    var change = cashTendered - total;
    if (change >= 0) {
        document.getElementById("change").value = change.toFixed(2);
    } else {
        alert("Insufficient cash tendered!");
    }

    // Generate order summary
    var orderSummary = "";
    if (qty1 > 0) {
        orderSummary += "IPhone 11 ProMax x" + qty1 + "\n";
    }
    if (qty2 > 0) {
        orderSummary += "IPhone XR x" + qty2 + "\n";
    }
    if (qty3 > 0) {
        orderSummary += "IPhone 13 ProMax x" + qty3 + "\n";
    }
    if (qty4 > 0) {
        orderSummary += "IPhone 14 ProMax x" + qty4 + "\n";
    }
    if (qty5 > 0) {
        orderSummary += "IPhone 15 ProMax x" + qty5 + "\n";
    }

    // Display order summary
    document.getElementById("carts").value = orderSummary;
            }
