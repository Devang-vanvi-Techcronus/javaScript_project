let quotes2 = [
    {author: 'Nelson Mandel', quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."'},
    {author: 'Walt Disney', quote: '”The way to get started is to quit talking and begin doing.”'},
    {author: 'Eleanor Roosevelt', quote: '”If life were predictable it would cease to be life, and be without flavor.”'},
    {author: 'Oprah Winfrey', quote: '”If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.”'},
    {author: 'James Cameron', quote: '”If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.”'},
    {author: 'John Lennon', quote: '”Life is what happens when you\'re busy making other plans.”'}
    ];

let btn = document.getElementById('btn-qu')


const msg =()=>{
   let ind = Math.floor(Math.random()*6 )
//    console.log(ind);
//    console.log( quotes2[ind].quote);
    document.getElementById('p').innerHTML = quotes2[ind].quote
}

btn.addEventListener('click',msg)




























































