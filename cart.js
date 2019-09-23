cartBoxTag = document.querySelector('.drop__cart');
const sampleProduct = {
    id_product: 456,
    product_name: "Мышка",
    price: 1000,
    quantity: 1,
    img_small: '',
    img_medium: 'img/Product_1.png',
    img_large: ''
};
const cart = {
    amount: 0,
    countGoods: 0,
    content: [],
    settings: {
        previewSelector: '',
        openedWrapperImageClass: '',
        openedImageClass: '',
        openedImageScreenClass: '',
        openedImageCloseButtonClass: '',
        openedImageCloseButtonSource: '',
    },
    emptyCart() {
        this.amount = 0;
        this.countGoods = 0;
        this.content = []
    },
    sampleCart() {
        this.emptyCart();
        cart.content.push(sampleProduct);
        let elem = Object.create(sampleProduct);
        elem.id_product++;
        elem.product_name = 'Кошка';
        elem.price *= 2;
        elem.quantity = 2;
        this.content.push(elem);
        elem = Object.create(sampleProduct);
        elem.id_product += 2;
        elem.product_name = 'Собака';
        elem.price *= 3;
        elem.quantity = 3;
        this.content.push(elem);
    },
    countCart() {
        this.countGoods = 0;
        this.amount = 0;
        this.content.forEach(element => {
            this.amount += element.price * element.quantity;
            this.countGoods += element.quantity;
        })
    },
    renderDropCart() {
        let dropCartTag = document.querySelector('.drop .drop__cart');
        dropCartTag.innerHTML = '';
    },
    init() {
        document.querySelector('.products__box').addEventListener('click', event => this.productsBoxClickHandler(event));
    },
    productsBoxClickHandler(event) {
        if (event.target !== 'IMG') return;
        this.openImage(event.target.dataset.full_img_url);
    },
    openImage(src) {
      this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },
    getScreenContainer() {
        
    }
};