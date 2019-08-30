function prime(n) {
    let f = true;
    if (n === 1 || n === 2) {
        return true;
    } else if (n <= 0) {
        return false;
    } else {
        for (let i = 2; f && (i <= (n / 2)); i++) {
            if (n % i === 0) {
                f = false
            }
        }
        return f;
    }
}

function point1(max) {
    let s = "";
    for (let i = 1; i <= max; i++) {
        if (prime(i)) {
            s +=i+" ";
        }
    }
    alert("Простые числа: "+s);
}

function countBasketPrice(priceArr, countArr) {
    let grandTotal = 0;
    let subtotal = [];
    for (let i=0; i < priceArr.length; i++) {
        subtotal.push(priceArr[i] * countArr[i]);
        grandTotal += subtotal[subtotal.length-1];
    }
    return [grandTotal, subtotal];
}

function point3() {
    let priceArr = [120, 250, 399];
    let countArr = [3, 1, 2];
    let cart = countBasketPrice(priceArr, countArr);
    alert("1st product $"+cart[1][0]+"\n2nd product $"+cart[1][1]+"\n3rd product $"+cart[1][2]+"\nGrand total $"+cart[0]);
}

function point4() {
    for (let i = 0; i < 10; console.log(i++)) {}
    alert("Посмотри в консоль");
}
 function point5(max) {
    for (let i = 1; i<=max; i++) {
        let s = "";
        for (let j = 1; j <= i; j++) {
            s += "*";
        }
        console.log(s);
    }
 }