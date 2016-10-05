var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];


function first(arr,cb) {
    var firstName = arr[0];
    cb(firstName);
}

first(names, function(firstName){
    console.log('The first name in names is ' + firstName)
});


function last(arr,cb) {
    cb(arr[arr.length - 1])
}


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



last(names, function(lastName){
    console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


 function multiply(num1,num2,cb) {
     cb(num1 * num2);

 }


multiply(4, 3, function(answer){
    console.log('The answer is ' + answer); //should console.log 12
})



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function contains(arr,str,cb){
    var i,
        found = false;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === str) {
            found = true
            return cb(found)
        }
    }
    return cb(found)

}

contains(names, 'Colt', function(result){
    if(result === true){
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the array');
    }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//function uniq(arr,cb){
//    var sortedArray = arr.slice().sort(),
//        results = [],
//        newArr = [];
//
//    for (var i = 0; i < arr.length - 1; i++) {
//        if (sortedArray[i + 1] == sortedArray[i]) {
//            results.push(sortedArray[i]);
//
//        }else if(sortedArray[i + 1] != sortedArray[i]) {
//            newArr.push(sortedArray[i]);
//        }
//
//    }
//    console.log(results);
//    console.log(sortedArray);
//    console.log(newArr);
//    cb(newArr)
//
//}


// Here is another example

function uniq(arr,cb) {
    var out = [],
        obj = {};

    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }
    console.log(obj)
    for (key in obj) {
        out.push(key);
    }
    return cb(out);
}

uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
});








/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function each(arr,cb) {
    var i;
    for(i = 0; i < arr.length; i++) {
        cb(i,arr[i])
    }
}


each(names, function(item, indice){
    console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function getUserById(arr,value,cb) {
    var i;
    for(i = 0; i < arr.length; i++) {
    if(arr[i].id === value) {
        cb(arr[i])
    }
    }
}

var users = [
    {
        id: '12d',
        email: 'tyler@gmail.com',
        name: 'Tyler',
        address: '167 East 500 North'
    },
    {
        id: '15a',
        email: 'cahlan@gmail.com',
        name: 'Cahlan',
        address: '135 East 320 North'
    },
    {
        id: '16t',
        email: 'ryan@gmail.com',
        name: 'Ryan',
        address: '192 East 32 North'
    },
];

getUserById(users, '16t', function(user){
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
