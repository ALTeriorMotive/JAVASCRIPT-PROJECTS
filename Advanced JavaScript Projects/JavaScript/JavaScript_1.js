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