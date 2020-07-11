function number(a, b) {
    let sum = a + b
    console.log(sum)
}
number(4, 2);

var funVar = function () {
    console.log('hello anyonmus function');
}

funVar();


// Call Back function
function message(age, callback) {
    if (age >= 19 && age <= 50) {
        callback(true)

    } else {
        callback(false)
    }
}
message(18, function (check) {
    if (check) {
        console.log('you are adult');
    } else {
        console.log('you are under age');

    }
});


// Call back funtion countinue 
$.get('https://jsonplaceholder.typicode.com/users')
    .done(function (data) {
        $.map(data, function (rec) {
            if (rec) {
                $.get('https://jsonplaceholder.typicode.com/posts?userId=' + rec.id)
                    .done(function (data) {
                        console.log(data);
                    })
                $.get('https://jsonplaceholder.typicode.com/albums?userId=' + rec.id)
                    .done(function (data) {
                        $.map(data, function (rec) {
                            if (rec) {
                                $.get('https://jsonplaceholder.typicode.com/photos?albumId=' + rec.id)

                                    .done(function (data) {
                                        console.log(data);
                                    })
                            }
                        })

                    })
            }

        })
    })


// // 
// function fetchData(url, callBack) {
//     $.get(url)
//         .done(funciton(data){
//             $.map(data, funciton(rec){
//                 callBack(rec);
//             });
//         })
// }

