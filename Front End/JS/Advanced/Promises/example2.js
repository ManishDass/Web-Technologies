let promiseTest = new Promise((resolve, reject) => {
    let a = 1 + 2

    if (a == 4) {
        resolve('Satisfied the condition 😊')
    } else {
        reject('failed to satisfied the condition 😒')
    }
})

promiseTest.then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err)
})

