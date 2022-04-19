let min = 2;
let max = 10;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


var randomNumber1 = getRandomIntInclusive(min, max)
var randomNumber2 = getRandomIntInclusive(min, max)


// let arr2 = Array(randomNumber2).fill('🏐')
// let finalString2 = arr2.join("");




for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("number1").innerHTML = ` &nbsp ${randomNumber1}`;
        document.getElementById("number2").innerHTML = `+ ${randomNumber2} `;
        document.getElementById("object1").innerHTML = ` _________ `;

    }, i * 50);
}

