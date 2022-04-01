//1. Get element by ID
let byId = document.getElementById("heading-text"); //returns single object
byId.innerText = "Heading Text Modified Using JS"; 

//2. Get element by Class Name
let byClass = document.getElementsByClassName("heading-text"); //returns collections of object


//3. Get element by Tag Name
let byTagName = document.getElementsByTagName("h1"); //returns collection of objects

//4. Get Elements by Query Selector *same as css *most useful
let byQuerySelector = document.querySelector("#heading-text"); //returns single object

    //also have query selector All
    let byQuerySelectorAll = document.querySelectorAll(".heading-text"); //returns collection of object

//how to traverse in DOM

// 1. Get parents from child
const child = document.querySelector('.child');
const parent = child.parentElement; 

    //alternative *both will work same
    const parent1 = child.parentNode;


// 2. Get children from parent
const parent2 = document.querySelector('.parent');
const child2 = parent2.childNodes; //returns  collection of object


// 3. Get Next Sibling
const sibiling1 = document.querySelector('#sibling1');
const sibling2 = sibiling1.nextElementSibling;

const sibling3 = sibiling1.previousElementSibling; //since there are no previous sibling so return null


console.log("Hello");

alert("Chal nikal");