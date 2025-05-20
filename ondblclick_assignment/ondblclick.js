function colorChange(){
    document.getElementById('color').style.color = randomColor();
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
    console.log(rgb);
    return rgb;
}