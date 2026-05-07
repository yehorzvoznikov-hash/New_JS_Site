function loadCart() {
    let data = sessionStorage.getItem("shopua_cart");
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

function saveCart(cart) {
    sessionStorage.setItem("shopua_cart", JSON.stringify(cart));
}

function findCartItem(cart, id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === id) return cart[i];
    }

    return null;
}

function addToCart(id, qty) {
    qty = qty || 1;
    let cart = loadCart();
    let existing = findCartItem(cart, id);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({productId : id, qty: qty});
    }

    saveCart(cart);
    updateCartCount();
    showToast("✔ Додано в кошик!");
}

function removeFromCart(id) {
    let cart = loadCart();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === id) {
            cart.splice(i, 1);
            break;
        }
    }

    saveCart(cart);
    updateCartCount();
}

function clearCart() {
    saveCart([]);
    updateCartCount();
}

function updateCartCount() {
    let el = document.getElementById("cart-count");
    if (!el) return;

    let cart = loadCart();
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].qty;
    }

    el.textContent = total;
}

function getCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let product = getProduct(cart[i].productId);
        if (product) {
            total += product.price * cart[i].qty;
        }
    }

    return total;
}