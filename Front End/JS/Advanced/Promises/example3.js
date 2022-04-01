let ca1 = new Promise((resolve, reject) => {
    resolve('CA1 Completed')
})

let ca2 = new Promise((resolve, reject) => {
    resolve('CA2 Completed')
})

let ca3 = new Promise((resolve, reject) => {
    resolve('CA3 Completed')
})

Promise.all([ //Promise.race will execute only one which excutes first
    ca1,ca2,ca3
]).then((message) => { //console.log(message)
    message.forEach(i => {
        console.log(i)
    });  
})
