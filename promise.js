// how to use promises in JS
let promise = new Promise(function (res, rej) {
    const varb = false;
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
    console.log(msg, 'try again');
})