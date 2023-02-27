
// var string = "Welcome to this Javascript Guide!";

// let str1 = string.split(' ')
// console.log(str1);
// let str2 = str1.reverse().join(' ')
// console.log(str2);


// function myfunc(){
//     console.log('hello');
// }
// function func2(callback){
//     callback()
//     console.log('a');
// }

// myfunc(func2)

//   var string = "welcome to this javascript guide! to";
//  let str = string.split(' ')
//  let str1 = str[0]
//  console.log(str1);
//  let str2 = str1[0].charAt(0).toUpperCase() + str1.slice(1)
//  console.log(str2);
// let myData = string.toUpperCase().split(' ')
// // console.log(myData);

// var map = new Map()

// myData.forEach(value => {
//     if(!map.has(value)){
//         map.set(value,1)
//     }
//     else{
//         if(value == value){
//             var data = map.get(value)
//             map.set(value,data+1)
//         }
//     }
// });
// console.log(map);

// let myTest = "Patel Divyesh Minesh Test";
// let str = myTest.split(' ')
// // let ans = Name[2]

// //  let final1 = myTest.charAt(0) + '.' + myTest.substr(myTest.indexOf(" ")+1,1) +'.' + ans.substr(ans.indexOf(" ")+1,1) + '.' + myTest.substr(myTest.lastIndexOf(" ")+1,1);



// console.log(str1);

// function Even(num){
//         if( num % 2 == 0 ){
//             console.log('num is even');
//         } 
//         else{
//             console.log('odd');
//         }

// }
// Even(3)



// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27


// function addSix(num){
//     return function(N){

//         let data = num + N
//         console.log(data);
//     }
        
// }
// var ans = addSix(6)
// ans(10)


// var firstWord = "mary";
// var secondWord = "army";

// function data(){
//     let str = firstWord.split('').sort().join('')
    
//     let str1 = secondWord.split('').sort().join('')
    
//     if(str === str1){
//         return true
//     }
   
// }
// data()


// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// (function() {
//     var a = b = 5;
//   })();

//   console.log(a);
  
//   console.log(b);


// var output = (function(x) {
//   delete x;
//   return x;
// })(0);

// console.log(output);

// var Employee = {
//     company: 'xyz'
//   }
//   var emp1 = Object.create(Employee);
//   delete emp1.company
//   console.log(emp1.company);



// let num = 20
// let n1 = 0
//   n2 = 1

// for(let i=1;i<=num;i++){
//   console.log(n1);
//     let nnext = n1+n2
//     n1 = n2
//     n2 = nnext
// }

let num = 4

let fact = 1

for(let i=1;i<=num;i++){
  fact *= i
  console.log(fact);
}











































































