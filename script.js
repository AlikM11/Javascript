//let map = new Map()

// map.set("1","salam")
// map.set("1","sagol")
// map.set(1,"Value")
// map.set(true,"adfasd")

// console.log(map.get(true))

// let mirali = {name:"Mirali"}

// map.set(mirali,"Mirali Name")

// console.log(map.get(mirali))

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {};
// visitsCountObj[john] = 234
// visitsCountObj[ben] = 456
// visitsCountObj[ben] = 789

// console.log( visitsCountObj["[object Object]"]); // 123

// map.set('1', 'str1')
//    .set(1, 'num1')
//    .set(true, 'bool1');//chaning

//map.forEach(e=>console.log(e))


// https://javascript.info/map-set


// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
//   }

// let obj = {
//     name: "John",
//     age: 30
//   };
  
//   let map = new Map(Object.entries(obj));
  
//   alert( map.get('age') ); // John

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
  
//   // now prices = { banana: 1, orange: 2, meat: 4 }
  
//   alert(prices.banana); // 2

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// // done!
// // obj = { banana: 1, orange: 2, meat: 4 }

// alert(obj.meat); // 2

// let set = new Set();

// let john = { name: "John",surname:'blablabla' };
// let pete = { name: "Pete",surname:'blablabla' };
// let mary = { name: "Mary",surname:'blablabla' };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// alert( set.size ); // 3

// for (let user of set) {
//   alert(user.surname); // John (then Pete and Mary)
// // }
// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) alert(value);

// // the same with forEach:
// set.forEach((value) => {
//   alert(value);
// });

// let user = {
//     name: "John"
//   };

//   user = null;
//   console.log(user.name)

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null; 

// for(let v of map.keys()){
//     console.log(v)
// }
// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok"); // works fine (object key)

// obj = null

// // can't use a string as the key
// console.log(weakMap.get(obj));

// let a ;
// let b = a ||15
// console.log(b)

// let b = 19;
// function Any(){
//     console.log(b)
// }

// Any()


// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     console.log( "Hello, " + getFullName() );
//     console.log( "Bye, " + getFullName() );
  
//   }

//   sayHiBye("salam","Aleykum")

function makeCounter() {
    
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2