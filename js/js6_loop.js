// if (i > 5) {
//     alert(i);
//   } else {
//     continue;
//   }


//Use the for loop to output even numbers from 2 to 10.
for(let i = 2; i<11; ++i){
    if(i%2 == 0){
console.log(i);
    }

}


// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

 let i = 0;
while(i<3){
    i++
    console.log(i);
}




// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


let data = prompt('enter number', 0)


for( data = 0 ; data<=100; data++){
    if(data < 100){
   return data
}
}


// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);



// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.



// let n = 10
//  data:

// for(let i=2;i<=n;i++){
//     console.log(i)

//     for(let j = 2; j < i ; j++){

//     if(i % j == 0) continue data
     
//     }
//     console.log(i);

// }

// function showprime(){
//     for(let i=2;i<=n;i++){
//         if(!isPrime(i)) continue
//     }

// }

// function isPrime(n){
//     for(let i = 2 ;i < n; i++){
//         if(n % i == 0) return false
//     }
//     return true
// }

