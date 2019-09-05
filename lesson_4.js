const numberObj = {
    one: undefined,
    ten: undefined,
    hundred: undefined,
    transformNumber(number) {
        number = Math.abs(Math.trunc(number)); //Перестраховка от дробных и отрицательных
        if (number>999) {
            console.log('число слишком большое');
            this.hundred = undefined;
            this.ten = undefined;
            this.one = undefined;
        } else {
            this.one = number % 10;
            number = Math.floor(Number / 10);
            this.ten = number % 10;
            number = Math.floor(Number / 10);
            this.hundred = number % 10;
        }
    },
    inputNumber() {
        let number = prompt('Введи число от 0 до 999');
        this.transformNumber(number);
    }
}

numberObj.inputNumber();