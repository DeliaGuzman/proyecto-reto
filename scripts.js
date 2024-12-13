const filterBtns = document.querySelectorAll('.filter-btn');
const productos = document.querySelectorAll('.producto');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        filterProducts(category);
    });
});

function filterProducts(category) {
    productos.forEach(product => {
        const productCategory = product.dataset.category;
        if (category === 'all' || category === productCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).
