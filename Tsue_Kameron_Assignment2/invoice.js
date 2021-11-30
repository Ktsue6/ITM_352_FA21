let generateInvoice = function (products) {
    let invoiceTxt = `<header style="text-align:left;">
            <h1>Your Smartphones@ Order Receipt</h1>
        </header>
        <div style="text-align:left;">
        <table border="4" bordercolor="black" cellpadding="3" cellspacing="1" style="margin: auto;">
            <tbody>
        <tr id="invoice">
            <!--table titles-->
            <th style="text-align: left;" width="45%">Item</th>
            <th style="text-align: left;" width="15%">Quantity</th>
            <th style="text-align: left;" width="20%">Price</th>
            <th style="text-align: left;" width="20%">Extended Price</th>
        </tr>`;
    let subTotal = 0;
    for (let i = 0; i < products.length; i++) 
    {
        if (products[i].quantity > 0) {
            //product rows
            let extended_price = products[i].quantity * products[i].price;
            subTotal += extended_price;
            invoiceTxt += `
            <tr>
                <td align="right" width="45%">${products[i].name}</td>
                <td align="right" width="15%">${products[i].quantity}</td>
                <td align="right" width="20%">\$${products[i].price.toFixed(
                    2
                )}</td>
                <td align="center" width="50%">\$${extended_price.toFixed(
                    2
                )}</td>
            </tr>
            `;
        }
    }
    let shipping = 0;
    //to calculate shipping
    //calculate shipping based on order; it should be based sub-total & use stepped shipping amounts
    if (subTotal <= 1000) {
        shipping = 25;
    } else {
        shipping = ((sub_total - 1) * 0.25) + 25;
        }

    //tax rate
    let salesTax = 0.04712;
    let tax = subTotal * salesTax;

    //grand total. calculate total now based on subtotal, tax, & shipping.
    let grandTotal = subTotal + tax + shipping;

    invoiceTxt += `<!--prints out invoice summary-->
    <tr>
        <td colspan="6" width="100%">&nbsp;</td>
    </tr>
    <tr>
        <td style="text-align: right;" colspan="2" width="67%" class="w3-wide">
            Sub-total</td>
        <td width="67%">
            ${subTotal.toFixed(2)}
        </td>
    </tr>
    <tr>
        <td style="text-align: right;" colspan="2" width="67%" class="w3-wide"><span>Tax @ 4.712%</span>
        </td>
        <td width="67%">                    
            ${tax.toFixed(2)}
        </td>
    </tr>
    <tr>
        <td style="text-align: right;" colspan="2" width="67%" class="w3-wide">Shipping</td>
        <td width="67%">                    
            ${shipping.toFixed(2)}
        </td>
    </tr>
    <tr>
        <td style="text-align: center;" colspan="2" width="67%" class="w3-wide"><strong>Grand Total</strong>
        </td>
        <td width="67%"><strong>
                ${grandTotal.toFixed(2)}
            </strong></td>
    </tr>
    <!--statement printed a part at the end of the table-->
    <td style="text-align: left; padding: 30px;" colspan="4" width="121%"><strong>
            <div><strong>
                    OUR SHIPPING POLICY:
                    <br>
                    Subtotals $0 - $1000 will be $25 shipping
                    <br>
                    For every $500 over the $1000 you will pay an extra 25 cents.
                </strong>
            </div>
        </strong></td>
    </tr>
    </tbody>
    </table>
    <div>`;
    return invoiceTxt;
};