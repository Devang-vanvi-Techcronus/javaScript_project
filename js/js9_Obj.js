// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


// const user = {
//     name: 'john',
//     surname:'smith',
// }
//  user.name = 'pete'

//  delete user.name 

// console.log(user);


//------------------------------------------------------------------------------------------



// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let schedule = prompt('enter here','')


// function isEmpty(schedule){
//     if(schedule = ''){
//         alert( isEmpty(schedule) )
//     }
   

// }



// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// // let sum = salaries.John + salaries.Ann +salaries.Pete
// // console.log(sum)

// let sum  = 0

// for(let keys in salaries){
//     sum = sum + salaries[keys]
//     console.log(sum);
// }

//---------------------------------------------------------------------------------

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// }



// function multiplyNumeric(menu){
//     for(let keys in menu){
//         let data = menu[keys]*2
//         console.log(data);
//     } 
// }
// multiplyNumeric(menu)




// function multiplyNumeric(menu) {
//     for (let key in menu) {
//       if (typeof menu[key] == 'number') {
//         menu[key] *= 2;
//       }
//     }
//   }

//   multiplyNumeric(menu)

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(permissions2.canView); // undefine




// let menu = {
//   fname: 'dev',
//   address: 'data',
// }



// let menu1 = {
//     width: '400',
//     height: '500',
    
//   }


// let user = {
//     name:'dev'
//   };
  
//   // first, declare
//   function sayHi() {
//     alert("Hello!");
//   }
  
//   // then add as a method
//   user.sayHi = sayHi;
  
//   user.sayHi(); // Hello!




// function makeUser() {
//     return {
//       name: "John",
//       ref(){
//          return this
//       }
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref().name ); // What's the result?