let a = document;
console.log(a);

let child2 = a.querySelector('#child2');
child2.innerHTML = 'This was created by JS';

let b = document.URL;

document.body.style.backgroundColor = "";
setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    child2.style.fontSize = "1.5rem";
    child2.style.color = "white";
    child2.style.fontWeight = "800";
}, 1000);

let button = document.getElementById("clickMe");
button.style.borderRadius = "10px";
                                   
function test()
{
    console.log("Hello");
    button.style.fontSize = "20px";
}


let x = document.links;
 
Array.from(x).forEach(function(element){
    if(element.href.includes("javascript"))
   {
          console.log(element.href);
   }
}
);

