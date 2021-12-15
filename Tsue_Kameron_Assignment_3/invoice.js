let generateInvoice = function (products) {
    let invoiceTxt = `<header style="text-align:center;">
            <h1><strong>Your Sweet As Art Receipt</strong></h1>
        </header>
        <div style="text-align:center;">
        <table border="1" bordercolor="#111111" cellpadding="2" cellspacing="0" style="margin: auto;">
            <tbody>
        <tr id="invoice">
            <!--the titles for the table-->
            <th style="text-align: right;" width="35%">Item</th>
            <th style="text-align: right;" width="20%">Qty</th>
            <th style="text-align: right;" width="13%">Price</th>
            <th style="text-align: right;" width="20%">Extended Price</th>
        </tr>`;
    let subTotal = 0;
    for (i = 0; i < products.length; i++) {
        if (products[i].quantity > 0) {
            //product rows
            let extended_price = products[i].quantity * products[i].price;
            subTotal += extended_price;
            invoiceTxt += `
            <tr>
                <td align="center" width="35%">${products[i].name}</td>
                <td align="center" width="20%">${products[i].quantity}</td>
                <td align="center" width="13%">\$${products[i].price.toFixed(
                    2
                )}</td>
                <td align="center" width="67%">\$${extended_price.toFixed(
                    2
                )}</td>
            </tr>
            `;
        }
    }
    let shipping = 0;
    //shipping calc
    //calculate shipping based on order; should be based on sub-total and use step shipping amounts
    if (subTotal <= 14) {
        shipping = 6;
    } else if (subTotal < 75) {
        shipping = 13;
    } else {
        shipping = 0.05 * subTotal;
    }

    //tax rate
    let salesTax = 0.04712;
    let tax = subTotal * salesTax;

    //grand total. calculate the total now based on subtotal, tax, and shipping.
    let grandTotal = subTotal + tax + shipping;

    invoiceTxt += `<!--below prints out the invoice summary-->
    <tr>
        <td colspan="4" width="100%">&nbsp;</td>
    </tr>
    <tr>
        <td style="text-align: center;" colspan="3" width="67%" class="w3-wide">
            Sub-total</td>
        <td width="67%">
            ${subTotal.toFixed(2)}
        </td>
    </tr>
    <tr>
        <td style="text-align: center;" colspan="3" width="67%" class="w3-wide"><span>Tax @ 5.75%</span>
        </td>
        <td width="67%">                    
            ${tax.toFixed(2)}
        </td>
    </tr>
    <tr>
        <td style="text-align: center;" colspan="3" width="67%" class="w3-wide">Shipping</td>
        <td width="67%">                    
            ${shipping.toFixed(2)}
        </td>
    </tr>
    <tr>
        <td style="text-align: center;" colspan="3" width="67%" class="w3-wide"><strong>Total</strong>
        </td>
        <td width="67%"><strong>
                ${grandTotal.toFixed(2)}
            </strong></td>
    </tr>
    <!--statement printed a part at the end of the table-->
    <td style="text-align: left; padding: 20px;" colspan="4" width="121%"><strong>
            <div><strong>
                    OUR SHIPPING POLICY:
                    <br>
                    Subtotals $0 - $14.99 will be $6 shipping
                    <br>
                    Subtotals $14 - $74.99 will be $13 shipping
                    <br>
                    Subtotals over $75 will be charged 5% of the subtotal amount
                </strong>
            </div>
        </strong></td>
    </tr>
    </tbody>
    </table>
    <div>`;
    return invoiceTxt;
};

module.exports = {
    generateInvoice: generateInvoice
}