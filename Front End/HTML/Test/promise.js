let a = new Promise(function(resolve,reject){
    let x = 1;

    if(x==0)
    {
        resolve("Yes X == 0")
    }
    else
    {
        reject("No X != 0")
    }
});

a.then(
    function successfull(lol)
    {
        console.log(lol)
    }
).catch(
    function successfull(lol)
    {
        console.log(lol)
    }
)

