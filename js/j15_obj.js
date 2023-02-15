
// function func(){
//     console.log(`my name is ${this.name} and my age is ${this.age}`);
// }


// const person1 ={
//     name:'dev',
//     age:22,
//     x:func
// }

// const person2 ={
//     name:'vik',
//     age:23,
//     x:func
// }

// const person3 ={
//     name:'pal',
//     age:24,
//     x:func
// }

// person1.x()
// person2.x()
// person3.x()


// use of call 


// const person1 ={
//     name:'dev',
//     age:22,
//     about:function(){
//         console.log(`${this.name} ${this.age}`)
//     }
// }

// const person2 ={
//     name:'vik',
//     age:23,
// }

// // now i want to call about for person 2 
 

// person1.about().call          //  undefined undefined
// person1.about().call(person2)   



function about(hobby){
    console.log(this.name, this.age, hobby)
}

const person1 ={
    name:'dev',
    age:22,
}

const person2 ={
    name:'vik',
    age:23,
}


about.call(person1,'guitar')

// and if i want to use apply instead of call then other things are in array
about.apply(person1,['guitar'])

// and if i want to use bind 
const data = about.bind(person1,['guitar'])
data()
















