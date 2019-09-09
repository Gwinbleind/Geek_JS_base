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
        cart.content.push(sampleProduct);
        let elem = Object.create(sampleProduct);
        elem.id_product++;
        elem.product_name = 'Кошка';
        elem.price *= 2;
        this.push(elem);
        elem = Object.create(sampleProduct);
        elem.id_product += 2;
        elem.product_name = 'Собака';
        elem.price *= 3;
        this.push(elem);
    },
    countCart() {
            this.countGoods = 0;
            this.amount = 0;
            this.content.forEach(element => {
              this.amount += element.price * element.quantity;
              this.countGoods += element.quantity;
            })
    }
};
