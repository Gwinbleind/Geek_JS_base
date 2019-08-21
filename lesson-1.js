function CtoF() {
    let Tc = prompt("Insert Temperature in Celsium");
    let Tf = (9 / 5) * Tc + 32;
    alert("Temperature in Farenheit: " + Tf);
}

function vars() {
    let admin,name = "";
    name = "Василий";
    admin = name;
    alert("admin = " + admin);
}

CtoF();
vars();
alert(1000+"108"); //Experiment's result is "1000108"
//async - параллельная загрузка dom & script
//defer - загрузка script после dom


