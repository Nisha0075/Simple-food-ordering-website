let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    
    cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    alert(`Total: $${total.toFixed(2)}\nThank you for your order!`);
    cart = [];
    total = 0;
    updateCart();
}
