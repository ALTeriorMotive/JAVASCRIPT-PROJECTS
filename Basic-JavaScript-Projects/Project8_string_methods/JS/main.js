function connect(){
    var string1 = "Here are some strings "; /* Partial string */
    var string2 = "that I've connected "; /* Partial string */
    var string3 = "utilizing JavaScript"; /* Partial string */
    var concatenated = string1.concat(string2, string3); /* Var with concatenated strings */
    document.getElementById('concatenate').innerHTML = concatenated; /* Displays concatenated string */
}

function dice(){
    var thing = "Here's a string to be sliced"; /* String */
    document.getElementById('slice').innerHTML = thing.slice(9, 15); /* Uses slice() to display part of a string */
}

var num = 7837.86417893; /* Integer variable for use in makeString() and precise() functions */

function makeString(){
    document.getElementById('stringify').innerHTML = num.toString(); /* Displays a string version of an integer variable */
}

function precise(){
    document.getElementById('precise').innerHTML = num.toPrecision(5); /* Displays 5 digits of an integer variable */
}