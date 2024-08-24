window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const price = urlParams.get('price');

    if (product && price) {
        document.getElementById('product').value = product;
        document.getElementById('price').value = price;
    }
};
