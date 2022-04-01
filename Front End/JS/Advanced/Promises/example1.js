const promiseResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        //food truck found
        resolve('Bringing the tacos'); //returns the string by default and access it it callback function parameters
    }, 5000)
})

//reject scenario
const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        //food truck not found/out of stock
        reject('Not bringing the tacos');
    }, 5000)
})


const onFullfillment = (success) => {
    console.log("Set up the table and eat tacos :)")
    console.log(success)
}


promiseResolve.then(onFullfillment)
promiseReject.catch(no)

function great() {
    console.log("Let's Eat")
}

function no(failed) {
    console.log("Let's cook pasta")
    console.log(failed)
}

