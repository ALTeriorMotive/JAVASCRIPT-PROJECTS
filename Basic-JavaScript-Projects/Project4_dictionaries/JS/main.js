function stuff(){
    var avengers = { /* Dictionary */
        0: "Chris Evans - Captain America",
        1: "Robert Downey Jr - Iron Man",
        2: "Chris Hemsworth - Thor",
        3: "Mark Ruffalo - Hulk",
        4: "Scarlet Johansson - Black Widow",
        5:"Jeremy Renner - Hawkeye"
    };
    var randomNum = String(Math.floor(Math.random() * 6)); /* Creates a random number between 0 and 5 to be used later */
    delete avengers[randomNum]; /* Deletes the item with the given random key */
    document.getElementById('Dictionary').innerHTML = "Here's an actor in the MCU: " + avengers[randomNum]; /* Replaces text in 'Dictionary' element with the value that matches a random key */
    console.log(randomNum);
}

function stuff2(){
    var avengers = { /* Dictionary */
        0: "Chris Evans - Captain America",
        1: "Robert Downey Jr - Iron Man",
        2: "Chris Hemsworth - Thor",
        3: "Mark Ruffalo - Hulk",
        4: "Scarlet Johansson - Black Widow",
        5:"Jeremy Renner - Hawkeye"
    };
    var randomNum = String(Math.floor(Math.random() * 6)); /* Creates a random number between 0 and 5 to be used later */
    document.getElementById('Dictionary2').innerHTML = "Here's an actor in the MCU: " + avengers[randomNum]; /* Replaces text in 'Dictionary2' element with the value that matches a random key */
    console.log(randomNum);
}