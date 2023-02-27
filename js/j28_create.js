

// const ages = [32, 33, 16, 40];
// const result = ages.filter((e)=>{
//     return e >= 18
// });
// console.log(result);


// const alp = ['a','x','a','c'];
// const result = alp.filter((obj)=>{
//     return obj == 'a' 
// });
// console.log(result);

// const hasss = alp.has('a')
// console.log(hasss);



const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.myfunc()

// Array.prototype.myfunc = function(){
//     for(i=0;i<=4;i++){
//         this[i] = this[i].toUpperCase()
//     }
// }


// let data = fruits.toString()
// let data1 = data.split(',')
// console.log(data1);

// let data1 = fruits.map((e)=>{
//         return e.toUpperCase()
// })
// console.log(data1);

let employees = [
    {name: 'John', salary: 90000, bonus: 1000},
    {name: 'Ana', salary: 80000, bonus: 3000},
    {name: 'Xaviar', salary: 60000, bonus: 4000},
    {name: 'David', salary: 70000, bonus: 1200}
];

//  employees.sort((a,b)=>{
//     return a.salary -b.salary
// })


// let ans = employees.sort((a,b)=> 
//     a.bonus.toString().localeCompare(b.bonus.toString())
//     // if( a.name > b.name){
//     //     console.log(a.name > b.name,'125');
//     //     return 1
//     // }
    
//     // console.log(a);
//     // console.log(b,'bb');

   
// )
// console.log(ans);


// const higTolow = employees.sort((a,b)=>{
//     return b.price - a.price
    
// })
// console.log(higTolow,'hifh to low');



// object lateral

// let obj = {
//     name: 'dev',
//     age:25
// }


// function method to create Object

// function newObj(name,age){
//         this.name = name,
//         this.age = age
// }

// let objectdata = new newObj('dev',25)


//object.create mtd

// const coder = {
//     isStudying : false,
//     printIntroduction : function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     }
// };
// const me = Object.create(coder);
// me.name = 'Mukul';
// me.isStudying = true;
// me.printIntroduction();


// let arr = ['a','b','c','b','a',]
// let unique = []

// arr.forEach((char)=>{
//     if(!unique.includes(char)){
//         unique.push(char)
//     }
// })

// console.log(unique);


// create class using function using method like prototype,objectlaterals,define internally,using sigleton mtd


// using function
// function car(name,age) {
//     this.name = 'dev',
//     this.age = 23

// }
// var Car= new car()


// singlton mtd
// let func = new function(){
//     this.name = 'dev',
//     this.age =25
// }






// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j <= n; j--) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);






































