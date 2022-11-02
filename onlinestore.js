function app(){
    console.log("Buying...");   
    let description = prompt("Add the product's name");
    console.log(description);
    let price = prompt("Add the product's price");
    console.log(price);
    let quantity = prompt("Add the quantity");
    console.log(quantity);
    let subTotal = (price*quantity);
    console.log(subTotal);
    alert("Your Sub Total is " + subTotal +".");
    const taxes = .09;
    let total = (subTotal*taxes+subTotal);
    console.log(total);
    alert("Your Total is " + total);
    document.write(`
        <p style  = "font-size : 30"> Welcome to My Awesome Online Store</p>
        <p style = "font-size : 25"> ${quantity} ${description} $${price}(ea)</p>
        <p style = "font-size : 25"> Sub Total: $ ${subTotal}.00</p>
        <p style = "font-size : 25"> Taxes: $ ${taxes*subTotal}.00</p>
        <p style = "font-size : 25"> TOTAL $ ${subTotal*taxes+subTotal}.00</p>
        <p style = "font-size : 30"> Thank you for your purchase ! </p>
        `);
}
