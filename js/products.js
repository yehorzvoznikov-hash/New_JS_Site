var products = [
    {
        id: 1,
        name: "Товар 1",
        category: "Категорія 1",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 1"
    },
    {
        id: 2,
        name: "Товар 2",
        category: "Категорія 1",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 2"
    },
    {
        id: 3,
        name: "Товар 3",
        category: "Категорія 3",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 3"
    },
    {
        id: 4,
        name: "Товар 4",
        category: "Категорія 4",
        price: 1000,
        emoji: "😊",
        desc: "Опис товару 4"
    },
];

function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
    }

    return null;
}