function stuff(){
    var avengers = {
        0: "Chris Evans - Captain America",
        1: "Robert Downey Jr - Iron Man",
        2: "Chris Hemsworth - Thor",
        3: "Mark Ruffalo - Hulk",
        4: "Scarlet Johansson - Black Widow",
        5:"Jeremy Renner - Hawkeye"
    };
    var randomNum = String(Math.floor(Math.random() * 6));
    document.getElementById('Dictionary').innerHTML = "Here's an actor in the MCU: " + avengers[randomNum];
    console.log(randomNum);
}