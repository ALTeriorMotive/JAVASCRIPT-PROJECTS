function getReceipt(){
    var text1 = "<h3>You Ordered:</h3>"; /* Variable containing an html element to be displayed */
    var runningTotal = 0; /* Variable to keep track of the cost for the order */
    var sizeTotal = 0; /* Variable used for the cost of different pizza sizes */
    var sizeArray = document.getElementsByClassName("size"); /* Variable that creates an array of every html element with class 'size' */
    for(var i=0; i<sizeArray.length; i++){ /* For loop that repeats for every html element with class 'size' */
        if(sizeArray[i].checked){ /* Checks which element has been selected */
            var selectedSize = sizeArray[i].value; /* Gets the value of the chosen element and stores it in a variable */
            text1 = text1 + selectedSize + "<br>"; /* Stored text to be listed in the final order line by line */
        }
    }
    if(selectedSize === "Personal Pizza"){ /* Stores a value depending on the selected size */
        sizeTotal = 6;
    }else if(selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; /* Stores the cost for the size in the runningTotal var */
    console.log(selectedSize + " = $" + sizeTotal + ".00"); /* Displays the chosen size along with its cost in the console */
    console.log("size text1: " + text1); /* Displays the ordered size in the console */
    console.log("subtotal: $" + runningTotal + ".00"); /* Displays the current total in the console */
    getTopping(runningTotal, text1); /* Runs a function to add up cost for the toppings */
}

function getTopping(runningTotal, text1){
    var toppingTotal = 0; /* Variable used to track the cost of toppings */
    var selectedTopping = []; /* Array that will contain all the selected toppings */
    var toppingArray = document.getElementsByClassName('toppings'); /* Variable that creates as array for all html elements with the 'toppings' class */
    for(var j=0; j<toppingArray.length; j++){ /* For loop that repeats for each element with class 'toppings' */
        if(toppingArray[j].checked){ /* Checks if each element is checked */
            selectedTopping.push(toppingArray[j].value); /* Current checked element gets added into an array */
            console.log("selected topping item: (" + toppingArray[j].value + ")"); /* Displays selected topping in the console */
            text1 = text1 + toppingArray[j].value + "<br>"; /* Adds the current chosen topping onto a new line to be displayed later */
        }
    }
    var toppingCount = selectedTopping.length; /* Checks how many toppings were selected */
    if(toppingCount > 1){ /* Determines the cost for toppings, subtracting one free topping from the total */
        toppingTotal = (toppingCount - 1);
    }else{
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); /* Adds the total for toppings to the overal total */
    console.log("total selected topping items: " + toppingCount); /* Displays in the console the number of toppings selected */
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00"); /* Displays in the console the cost for toppings */
    console.log("topping text1: " + text1); /* Displays in the console all the current ordered items */
    console.log("Purchase Total: $" + runningTotal + ".00"); /* Displays in the console the overall total*/
    document.getElementById('showText').innerHTML = text1; /* Displays the current order to the user */
    document.getElementById('totalPrice').innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" +"</strong></h3>"; /* Displays the cost of the current order to the user */
}