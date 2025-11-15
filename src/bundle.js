const windowLoaded = (e) => {

    invalidateCart();
}

const invalidateCart = () => {

    const hasItems = G_CART.getItems().length > 0;
    const node = document.getElementById("cart-items-badge");

    if (hasItems) {
        node.classList.remove("hidden");
    }
    else {
        node.classList.add("hidden");
    }
};

const showCart = () => {
    const cart = document.getElementById("cart");
    cart?.showModal();

    buildCart();
}

function addToCart(e) {
    const id = e.target.dataset.id;
    G_CART.add(id);

    invalidateCart();
    buildCart();
}

function removeFromCart(e) {
    const id = e.target.dataset.id;
    G_CART.remove(id);
    
    invalidateCart();
    buildCart();
}

const closeCart = () => {
    const cart = document.getElementById("cart");
    cart?.close();
}

function buildCart() {
    const items = G_CART.getItems();

    const root = document.getElementById("cart-items-container");
    root.replaceChildren();

    const template = document.querySelector("#cart-row-item-template");

    if (items.length) {

        items.forEach(i => {
            const product = G_PRODUCTS.find(p => p.id == i[0]);
            const row = template.content.cloneNode(true);
            row.querySelector("#cart_product").textContent = product.title;
            row.querySelector("#cart_description").textContent = product.description;
            row.querySelector("#cart_quantity").textContent = i[1];
            row.querySelector("#incr").setAttribute("data-id", i[0]);
            row.querySelector("#decr").setAttribute("data-id", i[0]);
            row.querySelector("#cart_price").textContent = product.price;
            row.querySelector("#cart_total").textContent = Number.parseFloat(i[1] * product.price).toFixed(2);

            root.appendChild(row);
        });
    }
}