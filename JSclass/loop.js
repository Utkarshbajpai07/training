// loops  , strict mode , console ypes, array methods
//while , do while , for

// let count = 1;
// while(count <=10){
//     console.log(count);
//     count++;
// }

// do while
    // do{
    //     console.log(count);
    //     count++;

    // } while(count < 10);

    // let arr =[10,20,30,40,50,60,70]
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]*10);
        
    // }

    // let arr =[10,20,30,40,50,60,70]
    // for(let element of arr)
    // {
    //     console.log(element);
    // }

    // for(let index in arr)
    // {
    //     console.log(index);
    // }

    // let items=["first","second",3,4,"fifth"];
    // for(let item of items){
    //     console.log(item);
    // }


// types of console

// console.log("hello");
// console.error("this is an error console");
// console.warn("this is warning console");
// console.assert(5>10,"5 is not grater then 10");
// console.assert(5<10,"10 is not grater then 5");

// console.count("counter");
// console.count("counter");
// console.count("counter");

// Array methods

// let arr = [10,20,30,40,50,60];

// push,pop,shift,unshift

// arr.push("100");
// console.log(arr);
// arr.pop("100");
// console.log(arr);

// let arr = [10,20,30,40,50,60];
// arr.unshift(1000);
// console.log(arr);
// arr.shift();
// console.log(arr);


// let arr1 = [10,20];
// let arr2 = [30,40];

// let result = arr2.concat(arr1);
// console.log(result);

// slice and splice
//  let arr = [10,20,30,40,50,60]

// let a= arr.slice(2,5);

// console.log(a);

// let result = arr.splice(2,0,"utkarsh","bajpai");

// console.log(result);
// console.log(arr);


//include , reverse , join , flat
// let arr = [10,20,30,40,50,60];
// let result = arr.includes(400);
// console.log(result);
// arr.reverse();
// console.log(arr);

// let joinedstr=arr.join("*|*");
// console.log(joinedstr);

// let arr = [10,20,[30,[40,[50,60]]]];
// let result = arr.flat(2);
// console.log(result);

// map , filter ,, reduce , forEach
// let arr=[10,20,30,40,50,60];

//callback functions
//higer order functions

// newArr=arr.map((item)=>{
    // console.log(item);

//     return item*10;
// });
// console.log(newArr)
// console.log(arr);
// map return new array with the same length as original
