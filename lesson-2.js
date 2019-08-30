function point3() {
    let a, b;
    a =  Math.floor(Math.random() * 20 - 10);
    b =  Math.floor(Math.random() * 20 - 10);
    let al = "a = "+a+". b = "+b;
    let s = 0;
    if (a >= 0) {
        s++
    } else {
        s--
    }
    if (b >= 0) {
        s++
    } else {
        s--
    }
    switch (s) {
        case 2:
            alert(al+"\nРазность = "+Math.abs(a - b));
            break;
        case -2:
            alert(al+"\nПроизведение = "+ (a * b));
            break;
        case 0:
            alert(al+"\nСумма = "+ (a + b));
    }
}

function point4() {
    let s = "";
    let a = Math.floor(Math.random()*16);
    switch (a) {
        case 0: s+= "0 ";
        case 1: s+= "1 ";
        case 2: s+= "2 ";
        case 3: s+= "3 ";
        case 4: s+= "4 ";
        case 5: s+= "5 ";
        case 6: s+= "6 ";
        case 7: s+= "7 ";
        case 8: s+= "8 ";
        case 9: s+= "9 ";
        case 10: s+= "10 ";
        case 11: s+= "11 ";
        case 12: s+= "12 ";
        case 13: s+= "13 ";
        case 14: s+= "14 ";
        case 15: s+= "15 ";
    }
    alert("a= "+a+"\n"+s);
}

function point5() {
    let a = prompt("Введите A");
    let b = prompt("Введите B");
    alert("a+b = "+point5_sum(a,b));
    alert("a-b = "+point5_sub(a,b));
    alert("a*b = "+point5_mul(a,b));
    alert("a/b = "+point5_div(a,b));
}

function point5_sum(a,b) {
    return +a + +b;
}

function point5_sub(a,b) {
    return a-b;
}

function point5_mul(a,b) {
    return a*b;
}

function point5_div(a,b) {
    return a/b;
}

function point6() {
    let a = prompt("Введите A");
    let b = prompt("Введите B");
    let o = prompt("Введите действие");
    alert(a+o+b+"="+point6_operation(a,b,o));
}

function point6_operation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case "+":
        case "sum":
        case "плюс":
            return point5_sum(arg1,arg2);
        case "-":
        case "sub":
        case "минус":
            return point5_sub(arg1,arg2);
        case "*":
        case "mul":
        case "умножить":
            return point5_mul(arg1,arg2);
        case "/":
        case "div":
        case "делить":
            return point5_div(arg1,arg2);
 }
}