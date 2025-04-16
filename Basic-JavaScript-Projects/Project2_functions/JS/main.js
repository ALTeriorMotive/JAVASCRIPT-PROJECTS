var str = "This is the button text!"; /* Sets a global variable for all functions to use */

function My_First_Function(){
    document.getElementById("Button_Text").innerHTML = str; /* Sets the text of the p element to the variable 'str' */
    setTimeout(concatenate, 2000); /* Adds a delay before continuing to the concatenate function */
}

function concatenate(){
    str += " And this is some bonus text!"; /* Concatenates the 'str' var with some text */
    document.getElementById("Button_Text").innerHTML = str; /* Updates the text of the p element to the new value of 'str' */
}