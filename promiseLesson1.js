let promise1 = function (isResolved) {
    return new Promise(function (res, rej) {
        if (isResolved) {
            res('message from 1 promise');
        }
        else {
            rej('erro');
        }
    })
}
let promise2 = function (isResolved) {
    return new Promise(function (res, rej) {
        if (isResolved) {
            res('message from 2 promise');
        }
        else {
            rej('erro');
        }
    })
}
let promise3 = function (isResolved) {
    return new Promise(function (res, rej) {
        if (isResolved) {
            res('message from 3 promise');
        }
        else {
            rej('erro');
        }
    })
}

/*promise1(true).then(function (msg) {
    console.log(msg);
    return promise2(true)
}).then(function (msg) {
    console.log(msg)
    return promise3(false)
}).then(function (msg) {
    console.log(msg)
}).catch(function (err) {
    console.log('this is not done', err);
})*/
Promise.all([promise1(true), promise2(false), promise3(true)]).then(function (msg) {
    console.log(msg);
}).catch(function (msg) {
    console.log('erroooooor')
})