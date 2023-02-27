


function LiveClock(){
    let date = new Date()
    document.getElementById('date').innerHTML = date.getDate()
    document.getElementById('min').innerHTML = date.getMinutes()
    document.getElementById('sec').innerHTML = date.getSeconds()
}
LiveClock()

setInterval(function(){
    LiveClock()
},1000)













































































