function calculateBill()
{
    let customerName = document.getElementById("name").value;

    var quantity = Number(document.getElementById("quantity").value);

    let total = 0;
    let items = "";

    const shirt = 800;
    const jeans = 1200;
    const shoes = 2500;
    const watch = 1800;
    const cap = 600;
    const bag = 900;
    const belt = 400;

    if(document.getElementById("shirt").checked)
    {
        total += shirt;
        items += "Shirt, ";
    }

    if(document.getElementById("jeans").checked)
    {
        total += jeans;
        items += "Jeans, ";
    }

    if(document.getElementById("shoes").checked)
    {
        total += shoes;
        items += "Shoes, ";
    }

    if(document.getElementById("watch").checked)
    {
        total += watch;
        items += "Watch, ";
    }

    if(document.getElementById("cap").checked)
    {
        total += cap;
        items += "Cap, ";
    }

    if(document.getElementById("bag").checked)
    {
        total += bag;
        items += "Bag, ";
    }

    if(document.getElementById("belt").checked)
    {
        total += belt;
        items += "Belt, ";
    }

    if(items == "")
    {
        document.getElementById("bill").innerHTML =
        "<h3>Please select at least one product.</h3>";
        return;
    }

    let finalBill = total * quantity;

    document.getElementById("bill").innerHTML =
    "<h2>Shopping Bill</h2>" +
    "<b>Customer Name:</b> " + customerName + "<br><br>" +
    "<b>Selected Products:</b> " + items.slice(0,-2) + "<br>" +
    "<b>Quantity:</b> " + quantity + "<br>" +
    "<b>Total Bill:</b> ₹" + finalBill;
}