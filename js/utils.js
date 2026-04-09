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

    return a;
}