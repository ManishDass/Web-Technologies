let min1 = 2;
let max1 = 5;

function getRandomIntInclusive1(min1, max1) {
    min1 = Math.ceil(min1);
    max1 = Math.floor(max1);
    return Math.floor(Math.random() * (max1 - min1 + 1) + min1); //The maximum is inclusive and the minimum is inclusive
}

let min2 = 2;
let max2 = 10;

function getRandomIntInclusive2(min2, max2) {
    min2 = Math.ceil(min2);
    max2 = Math.floor(max2);
    return Math.floor(Math.random() * (max2 - min2 + 1) + min2); //The maximum is inclusive and the minimum is inclusive
}


var x = getRandomIntInclusive1(min1, max1)
var y = getRandomIntInclusive2(min2, max2)


var maxElem = Math.max(x, y)
var minElem = Math.min(x, y)


let arr1 = Array(minElem * maxElem).fill('⚽')
let finalString1 = arr1.join("");

// let arr2 = Array(minElem).fill('🏐')
// let finalString2 = arr2.join("");

// let arr3 = Array(maxElem).fill('🍪')
// let finalString3 = arr3.join("");


for (let i = 1; i < 10; i++) {
    setTimeout(function myGreeting() {
        document.getElementById("nums").innerHTML = `${minElem} x ${maxElem} = `;
        document.getElementById("shapes").innerHTML = `${finalString1}  = `;
    }, i * 50);
}