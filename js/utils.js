function createProductCard(p) {
    var a = document.createElement("a");
    a.className = "product-card";
    a.href = "#";
    a.innerHTML = 
        '<div class="product-img">' + p.emoji + "</div>" +
        '<div class="product-info">' +
            '<div class="product-name">' + p.name + "</div>" +
            '<div class="product-category">' + p.category + "</div>" +
            '<div class="product-footer">' +
                '<div class="product-price">' + p.price + "</div>" +
                '<button class="btn-add">' + "Кошик" + "</button>" +
            "</div>" +
        "</div>";

    let btn = a.querySelector(".btn-add");
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        addToCart(p.id, 1);
    });

    return a;
}

let toastTimer = null;

function showToast(msg) {
    let el = document.getElementById("toast");
    if (!el) return;

    el.textContent = msg;
    el.classList.add("show");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        el.classList.remove("show");
    }, 2000);
}