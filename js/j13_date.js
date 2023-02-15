// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.



// let datee = new Date(2012,2,20)
// console.log(datee);
// console.log( datee.getHours() );



// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// //alert( getLocalDay(date) );       // tuesday, should show 2



// function getLocalDay(date){
//     let day = date.getDay() 
//     console.log(day);
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//     return days[date.getDay()]
    
// }
// alert( getLocalDay(date) );   



// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// // alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// // alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// function getDateAgo(date, day){
//     date.setDate(date.getDay() - day)
//     return date.getDate()
// }

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

// Open a sandbox with tests.

// function getLastDayOfMonth(year, month){
//     let date = new Date(year, month + 1, 0);
//     console.log(date.getDate());

// }
// alert(getLastDayOfMonth(2012, 1))


// let now = new Date();
// let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// console.log(today);


// console.log(typeof null);



// let age = "aaa"
// let person = {
//     name :"dev"
// }
// person['age'] = 23

// console.log(person);


// function func2(){
//     console.log('hello');
// }

// function func(func2){
//     func2()
//     console.log('hi');
// }

// func(func2)



// console.log(typeof null);


// arry like object which have langth property and also can access by index

// let data = [
//     {name:'dev'},
//     {name:'vikas'}
// ]

// console.log(data[1]);


















































