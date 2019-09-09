// Задание 1, создание шахматной доски
const desk = document.createElement('div');
const blackCell = desk.cloneNode(true);
const whiteCell = blackCell.cloneNode(true);
const colNumerator = whiteCell.cloneNode(true);
const rowNumerator = whiteCell.cloneNode(true);
const emptyCell = rowNumerator.cloneNode(true);
desk.classList.add('desk');
blackCell.classList.add('blackCell');
whiteCell.classList.add('whiteCell');
colNumerator.classList.add('colNumerator');
rowNumerator.classList.add('rowNumerator');
emptyCell.classList.add('emptyCell');

let str = ' 12345678';
const rowName = [...str];
str = ' ABCDEFGH';
const colName = [...str];

function blackWhiteReturn(f) {
    if (f) {
        return [blackCell.cloneNode(true), !f]
    } else {
        return [whiteCell.cloneNode(true), !f]
    }
}

function generateDesk() {
    const h2Tag = document.getElementsByTagName('h2')[0];
    h2Tag.insertAdjacentElement('afterend',desk);
    let f = true;
    rowName.forEach(rowElem => {
        colName.forEach(colElem => {
            let s = emptyCell.cloneNode(true);
            if (rowElem === ' ' && colElem === ' ') {       //empty cell in top left corner
                s = emptyCell.cloneNode(true);
            } else if (rowElem === ' ') {                   //top row
                s = colNumerator.cloneNode(true);
                s.textContent = colElem;
            } else if (colElem === ' ') {                   //left column
                s = rowNumerator.cloneNode(true);
                s.textContent = rowElem;
            } else {                                        //all another cells
                [s, f] = blackWhiteReturn(f);
            }
            desk.insertAdjacentElement('beforeend',s);
        });
        f = !f
    });
    document.querySelector('input#point1').setAttribute('disabled', 'disabled'); //Кнопка выключается
}

//Задание 3 - создание каталога
const sampleProduct = {
    id_product: 456,
    product_name: "Мышка",
    price: 1000,
    quantity: 1
};
const product = [sampleProduct];
let elem = Object.create(sampleProduct);
elem.id_product++;
elem.product_name = 'Кошка';
elem.price *= 2;
product.push(elem);
elem = Object.create(sampleProduct);
elem.id_product += 2;
elem.product_name = 'Собака';
elem.price *= 3;
product.push(elem);

//Задание 2 - создание корзины
const carttext = '';
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
    printCart() {
        this.sampleCart();
        let cartTag = document.getElementById('cart');
        cartTag.innerHTML = '<div class="shop_table div_flex"><div class="shop_table__flex"></div></div>';
        cart.countCart();
        if (cart.countGoods === 0) {
            cartTag.insertAdjacentHTML('beforeBegin','<span>Корзина пуста</span>');
        } else {
            cartTag.insertAdjacentHTML('beforeBegin',`<span>В корзине: ${cart.countGoods} товаров на сумму ${cart.amount} рублей</span>`);
        }
        cartTag = document.getElementsByClassName('shop_table__flex')[0];
        if (cart.countGoods !== 0) {
            cartTag.insertAdjacentHTML('beforeEnd', '' +
                '<div class="shop_table__header">' +
                '<div class="shop_table__details">product details</div>' +
                '<div class="shop_table__property div_flex">unite price</div>' +
                '<div class="shop_table__property div_flex">quantity</div>' +
                '<div class="shop_table__property div_flex">shipping</div>' +
                '<div class="shop_table__property div_flex">subtotal</div>' +
                '<div class="shop_table__action div_flex">action</div></div>');
            this.content.forEach(element => {
                cartTag.insertAdjacentHTML('beforeEnd',`
                    <div class="shop_table__prodline">
                    <div class="shop_table__details div_colwrap">
                    <img src="img/Product_9.jpg" alt="">
                    <div class="product__name product__name_cart">${element.product_name}</div>
                    <div class="product__prop">Color: <span class="product__prop_value">Red</span><br>Size: <span class="product__prop_value">Xll</span></div></div>
                    <div class="shop_table__property div_flex">$${element.price}</div>
                    <div class="shop_table__property div_flex"><input class="choose__box choose__box_cart" min="1" type="number" value="${element.quantity}"></div>
                    <div class="shop_table__property div_flex">FREE</div>
                    <div class="shop_table__property div_flex">$${element.quantity*element.price}</div>
                    <div class="shop_table__action div_flex"><i class="fa fa-times-circle" aria-hidden="true"></i></div></div>`)
            });
            cartTag.insertAdjacentHTML('beforeEnd',`
                <div class="form__box"><form id="checkout form" action="" class="checkout_form">
                <div class="checkout_form__h2">Sub total<div style="width: 20px; height: 10px"></div>$${this.amount}</div>
                <div class="checkout_form__h1">GRAND TOTAL<div style="width: 20px; height: 10px"></div>
                <span class="checkout_form__h1_active">$${this.amount}</span></div>
                <div class="checkout_form__submit div_flex">proceed to checkout</div></form></div>`);
        }
    },
    createCartVariant1() {
        this.emptyCart();
    },
};
