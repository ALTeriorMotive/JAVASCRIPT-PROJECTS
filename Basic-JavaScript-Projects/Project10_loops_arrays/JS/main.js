function Call_Loop(){
    var text = ''; /* Creates a var with an empty string */
    var count = 1; /* Sets up a variable to count in a while loop */
    while(count < 11){
        count++; /* Increases the value of 'count' each loop */
        text = text + Math.floor(Math.random() * 10); /* Adds a random number from 0 to 9 to a string */
        document.getElementById('loop').innerHTML = text; /* Sets a p element to display var 'text' */
    }
}

var things = ['Table', 'Chair', 'Water Bottle', 'Charger', 'Speaker', 'Monitor']; /* Array for use in the functions 'for_loop' and 'array_Function' */

function for_loop(){
    document.getElementById('List_of_Things').innerHTML = ''; /* Clears the display of a p element */
    for(i=0; i<things.length; i++){ /* For loop set to iterate for each item in 'things' array */
        document.getElementById('List_of_Things').innerHTML += things[i] + '<br>'; /* Displays each item in 'things' array on seperate lines */
    }
}

function array_Function(){ /* Displays a random item from 'things' array */
    document.getElementById('Array').innerHTML = things[Math.floor(Math.random() * things.length)];
}

function constantFunction(){
    const vehicle = {type:'Car', color:'Blue'}; /* Creates a constant */
    vehicle.color = 'Purple'; /* Changes the value of vehicle.color */
    vehicle.year = '2013'; /* Adds a value to constant 'vehicle' */
    document.getElementById('constant').innerHTML = 'The ' + vehicle.color + ' vehicle was made in ' + vehicle.year; /* Displays a string utilizing the constant 'vehicle' */
}

function letFunction(){
    let num = '#' + Math.floor(Math.random() * 1000000); /* Creates a string that can be used as hex code */
    document.getElementById('let').style.backgroundColor = num; /* Sets background color of a p element to the value of 'num' */
    document.getElementById('let').style.color = 'white'; /* Sets the text color of a p element to white, usually easier to see given the range of hex code values above */
}

function object(){
    let table = { /* Creates object 'table' */
        type: 'wood',
        stand_type: 'center stand',
        size: '1 person',
        description: function(){ /* Method within 'table' object that returns a string utilizing it's values */
            return 'This table is made of ' + this.type +  ', stands via ' + this.stand_type + ', and is for the use of ' + this.size;
        }
    }
    document.getElementById('object').innerHTML = table.description(); /* Sets the text of a p element to the string returned by table.description() */
}