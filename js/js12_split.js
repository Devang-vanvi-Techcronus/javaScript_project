// camelize("background-color") == 'backgroundColor';


// let string = "background-color"

// let str = string.split('-').join('')

// console.log(str);


// let arr = [5, 3, 8, 1];
// let xx = [1,4]


// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)



// function filterarr(){
//     for(let key of xx){
//         if(!arr.includes(key)){
//             arr.push(key)
//         }
//     }
// }
// filterarr()

// sort it
// let arr = [5, 2, 1, -10, 8];

// let arr1 = arr.sort(function(a,b){
//     return a - b
// })
// console.log(arr1);

// let arr = ["HTML", "JavaScript", "CSS"];

// // let sorted = copySorted(arr);

// // alert( sorted ); // CSS, HTML, JavaScript
// // alert( arr ); // HTML, JavaScript, CSS (no changes)


// let sortData = arr.sort(function(a,b){
//     return a.arr < b.arr
// })
// console.log(sortData);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };


// let users = [ john, pete, mary ];



// function username(){
    
//      users.map((e)=>{
//            console.log(e.name);
//     })

// }
// username()




// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];


// function getAverageAge(users) {
//     return users.reduce((a, b) => a + b.age, 0 ) / users.length;
//   }

//   alert( getAverageAge(arr) );



  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
//   */
// function groupById(users){
//     // users.map((e)=>{
//     //        console.log( e );
//     // })
//     return users.reduce((obj,value)=>{
//         obj[value.id] == value;
//         return obj

//     },{})

// }
// alert(groupById(users))
// .



// let obj = {
//   name: "John",
//   age: 30
// };

// let mapp = new Map(Object.fromEntries(obj));

// alert( mapp.name ); // John


// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// // alert( sumSalaries(salaries) ); // 650

// let sum = 0

// for( let sal of Object.values(salaries)){
//     sum  += sal
//     console.log(sum);
// }


// let user = {
//   name: 'John',
//   age: 30
// };

// let count = 0

// for(let data in Object.keys(user)){
//    count +=  data.length
//    console.log(count);
// }






// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.




let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250

};


// function topSalary(arr){
//   // for(let salary of Object.values(arr)){
//   //     console.log(salary);
//   // }
//   console.log(Object.values(arr))
//   let sortData = Object.values(arr).sort()
//   console.log(sortData);
//   let final = sortData.slice(sortData.length-1)
//   // if we want second last 
//   // let final = sortData.slice(sortData.length-2,sortData.length-1)
//   console.log(final);


 
// }
// topSalary(salaries)



function topSalary(arr){
  let maxsalary = 0
  let maxkey = null
    for( let [key , value] of Object.entries(arr)){
      console.log([key , value]);
      if(maxsalary < value){
        maxsalary = value 
        maxkey = key
      }
    }

    console.log(maxkey);
}
topSalary(salaries)





















