$(document).ready(function () {
    const productsGenerated = new Set();

    for (let i = 1; i <= 3; i++) {
        productsGenerated.add(i);
        generateProduct(i);
    }

    // Génération de 3 produits au chargement de la page
    function generateProduct(id) {
        $.ajax({
            url: `https://dummyjson.com/products/${id}`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let product = $('.product-template').clone();
                product.removeClass('product-template');
                product.addClass(`product-${id}`);
                product.find('.img').attr('src', data.thumbnail);
                product.find('.img').attr('alt', data.title);
                product.find('.title').text(data.title);
                product.find('.brand').text(`(${data.brand})`);
                product.find('.price').text(`${data.price} €`);
                product.find('.old-price').text(`${data.price / (1 - data.discountPercentage / 100)} €`);
                product.find('.stock').text(data.stock);

                // On ajoute le produit à la page
                $('body').append(product);
            }
        });
    }

    // Génération d'un produit aléatoire
    function generateRandomProduct() {
        if (productsGenerated.size >= 100) {
            $('#product-generation').attr('disabled', 'disabled');
            return;
        }

        // Génération d'un id aléatoire
        let randomId;
        while (productsGenerated.has(randomId)) {
            randomId = Math.floor(Math.random() * 100) + 1;
        }
        productsGenerated.add(randomId);
        generateProduct(randomId);
    }

    // Génération d'un produit aléatoire
    $('#product-generation').on('click', generateRandomProduct);
});
