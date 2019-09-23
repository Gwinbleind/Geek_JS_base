cartBoxTag = document.querySelector('.drop__cart');

const cart = {
    amount: 0,
    countGoods: 0,
    content: [],
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
    renderDropCart () {

    },
};