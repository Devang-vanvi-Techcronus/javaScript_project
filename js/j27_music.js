
document.addEventListener("keypress", function (event) {
    console.log(event.key.toLowerCase());
    sound(event.key);
});

function sound(key) {
    switch (key) {
        case "w":
            var sound1 = new Audio('audio/1.mp3');
            sound1.play();
            break;

        case "a":
            var sound2 = new Audio("audio/2.mp3");
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio("audio/3.mp3");
            sound3.play();
            break;

        case "d":
            var sound4 = new Audio("audio/4.mp3");
            sound4.play();
            break;
        case "f":
            var sound5 = new Audio("audio/5.mp3");
            sound5.play();
            break;
    }
}



















































































