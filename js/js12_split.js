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




let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  

  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
function groupById(users){
    // users.map((e)=>{
    //        console.log( e );
    // })
    return users.reduce((obj,value)=>{
        obj[value.id] == value;
        return obj

    },{})

}
alert(groupById(users))
