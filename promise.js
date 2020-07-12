// how to use promises in JS

// Simple Concept 

/*
let promise = new Promise(function (res, rej) {
    const varb = true;
    if (varb) {
        res('problem resolve');
    }
    else {
        rej('problem not resolve');
    }
})

promise.then(function (msg) {
    console.log(msg, 'working well');
}).catch(function (err) {
    console.log(err, 'try again');
})
*/


let promise1 = function () {
    retrun new Promise(function (res, rej) {
        res('Solution 1');
    })
}
let promise2 = function () {
    retrun new Promise(function (res, rej) {
        res('Solution 2');
    })
}

promise1().then(function (msg) {
    console.log('msg');
    return promise2()
}).then(function (msg) {
    console.log('msg');
}