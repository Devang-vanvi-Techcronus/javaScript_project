


// let user = {
//     firstName: "John",
//     sayHi() {
//       alert(`Hello, ${this.firstName}!`);
//     }
//   };
// // console.log(  user.sayHi());

// // setTimeout(user.sayHi, 5000); // Hello, undefined!
  
// // let f = user.sayHi;
// // setTimeout(f, 5000); 

// setTimeout(function(){
//      user.sayHi()
// }, 2000);



// let user = {
//     firstName: "John"
//   };
  
//   function func() {
//     alert(this.firstName);
//   }
  
// let t =func.bind(user);
// t()

const backgroundChanger= ()=>{
    let x = Math.floor(Math.random()*256)
    let y = Math.floor(Math.random()*256)
    let z = Math.floor(Math.random()*256)
    
    
    let rgb = `rgb(${x},${y},${z})`
    // console.log(rgb);
     
    document.body.style.backgroundColor = rgb;
    
}
backgroundChanger()















