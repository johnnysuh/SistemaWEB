let pedido = [];

function addItem() {
    const itemSelect = document.getElementById("item");
    const quantityInput = document.getElementById("quantity");

    const selectedItem = itemSelect.value;
    const quantity = parseInt(quantityInput.value);

    const item = {
        name: selectedItem,
        quantity: quantity,
        price: calculatePrice(selectedItem, quantity)
    };

    pedido.push(item);

    updateOrderSummary();
}

function calculatePrice(item, quantity) {
    const prices = {
        Brigadeiro: 5.00,
        Bolo: 15.00,
        Macaron: 10.00,
        Coxinha: 5.00,
        Croissant: 8.00
    };

    return prices[item] * quantity;
}

function updateOrderSummary() {
    const summaryList = document.getElementById("summaryList");
    const totalPriceElement = document.getElementById("totalPrice");

    summaryList.innerHTML = "";

    let totalPrice = 0;


    pedido.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.quantity}x ${item.name} - R$ ${item.price.toFixed(2)}`;
        summaryList.appendChild(listItem);

        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}