var sum = "";
var incremented = 0;

var difference = "";
var decremented = 0;

function randomNum(){ /* Returns a random number between 0 and 99 */
    return Math.floor(Math.random() * 100);
}

function addition(num1, num2){ /* Replaces text of p element 'add' with the sum of two given numbers */
    sum = num1 + num2;
    incremented = 0; /* resets variable for use in the 'increment' function */
    document.getElementById('add').innerHTML = num1 + " + " + num2 + " = " + sum + " Click again!";
    document.getElementById('increment').style.display = "initial"; /* Displays p element with id 'increment' */
}

function subtraction(num1, num2){ /* Replaces text of p element 'subtract' with difference between two given numbers */
    if(num1 >= num2){
        difference = num1 - num2;
        decremented = 0; /* Resets variable for use in the 'decrement' function */
        document.getElementById('subtract').innerHTML = num1 + " - " + num2 + " = " + difference + " Click again!";
        document.getElementById('decrement').style.display = "initial"; /* Displays p element with id 'decrement' */
    }else{
        difference = num2 - num1;
        decremented = 0; /* Resets variable for use in the 'decrement' function */
        document.getElementById('subtract').innerHTML = num2 + " - " + num1 + " = " + difference + " Click again!";
        document.getElementById('decrement').style.display = "initial"; /* Displays p element with id 'decrement' */
    }
}

function multiply(num1, num2){ /* Replaces text of p element multiply with the product of two given numbers */
    document.getElementById('multiply').innerHTML = num1 + " * " + num2 + " = " + (num1 * num2) + " Click again!";
}

function divide(num1, num2){ /* Replaces text of p element 'dvide' with the quotient of two given numbers as an integer, displaying the remainder seperately*/
    var remainder = "";
    if(num1 >= num2){
        num1 = (num1 * 10) + Math.floor(randomNum() / 10); /* Increases the size of the larger number for a bigger quotient, purley for aesthetics */
        remainder = num1 % num2;
        document.getElementById('divide').innerHTML = num1 + " / " + num2 + " = " + Math.floor(num1 / num2) + " with a remainder of " + remainder + " Click again!";
    }else{
        num2 = (num2 * 10) + Math.floor(randomNum() / 10); /* Increases the size of the larger number for a bigger quotient, purley for aesthetics */
        remainder = num2 % num1;
        document.getElementById('divide').innerHTML = num2 + " / " + num1 + " = " + Math.floor(num2 / num1) + " with a remainder of " + remainder + " Click again!";
    }
}

function negation(num){ /* Uses the negation operator on a given number */
    num = -num;
    document.getElementById('negate').innerHTML = num + " is the negation of your random number. Click again!";
}

function increment(){ /* Increments the sum of 'add' element and displays it with the number of increments */
    sum++;
    incremented++;
    document.getElementById('increment').innerHTML = sum + " Your number has been incremented " + incremented + " times. Click again!";
}

function decrement(){ /* decrements the difference of 'subtract' element and displays it with the number of decrements */
    difference--;
    decremented++;
    document.getElementById('decrement').innerHTML = difference + " Your number has been decremented " + decremented + " times. Click again!";
}

function displayPi(){ /* Displays pi */
    document.getElementById('pi').innerHTML = "This is pi: " + Math.PI + "...";
}