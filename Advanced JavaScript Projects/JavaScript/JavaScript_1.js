function select(){
    var response;
    switch(document.getElementById('deviceSelect').value.toLowerCase()){
        case "phone":
            response = 'A very common device, not unusual';
        break;
        case "laptop":
            response = 'Personally, I prefer a desktop';
        break;
        case "game console":
            response = 'Nice, video games are fun!';
        break;
        case "desktop":
            response = 'Very versatile, good choice';
        break;
        default:
            response = "Sorry, either that's not an option or it wasn't typed correctly, please enter a choice from above";
        break;
    }
    document.getElementById('response').innerHTML = response;
}

function wipe(){
    var clear = document.getElementsByClassName('wipe');
    for(i=0; i<clear.length; i++){
        clear[i].innerHTML = '';
        clear[i].style.listStyleType = 'none';
    }
}

var circle = document.getElementById('canvas').getContext("2d");

var gradient = circle.createLinearGradient(0, 0, 500, 500);
gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.95, 'black');

circle.fillStyle = gradient;
circle.fillRect(0, 0, 500, 500);