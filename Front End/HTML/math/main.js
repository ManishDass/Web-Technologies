let min = 2;
let max = 10;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


var randomNumber1 = getRandomIntInclusive(min, max)
var randomNumber2 = getRandomIntInclusive(min, max)


var x = getRandomIntInclusive(min, max)
var y = getRandomIntInclusive(min, max)

if (x == y) {
    x += 1;
}

var maxElem = Math.max(x, y)
var minElem = Math.min(x, y)


// let arr1 = Array(randomNumber1).fill('⚽')
// let finalString1 = arr1.join("");

let arr2 = Array(randomNumber2).fill('🏐')
let finalString2 = arr2.join("");

let arr3 = Array(maxElem).fill('🍪')
let finalString3 = arr3.join("");



for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("demo1").innerHTML = `${randomNumber1} + ${randomNumber2} = `;
        document.getElementById("object1").innerHTML = ` ${finalString2} = `;

    }, i * 50);
}


for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("demo2").innerHTML = `${maxElem} - ${minElem} = `;
        document.getElementById("object2").innerHTML = `${finalString3}  = `;
    }, i * 50);
}