const Calculator = { /* Creates a constant for use in later functions */
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand} = Calculator; /* Sets a local constant for 'Display_Value' and 'Wait_Second_Operand' to be equivalent to the first two values of global 'Calculator' Constant */
    if(Wait_Second_Operand === true){ /* Checks to see if local 'Wait_Second_Operand' is true */
        Calculator.Display_Value = digit; /* Sets global 'Calculator.Display_Value' to given digit */
        Calculator.Wait_Second_Operand = false; /* Sets global 'Calculator.Wait_Second_Operand' to false */
    }else{
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; /* Should the local 'Display_Value' be 0, sets global 'Calculator.Display_Value to given digit, adds given digit to the end of current value if false */
    }
}

function Input_Decimal(dot){
    if(Calculator.Wait_Second_Operand === true) return; /* Ensures the function stops if condition is true */
    if(!Calculator.Display_Value.includes(dot)){ /* If 'Calculator.Display_Value' does not have a decimal, adds one to the current number */
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator){
    const {First_Operand, Display_Value, operator} = Calculator; /* Sets a local constant for 'First_Operand', 'Display_Value', and 'Wait_Second_Operand' to be equivalent to the first three values of global 'Calculator' Constant */
    const Value_of_Input = parseFloat(Display_Value); /* Creates a new constant to get the current value of local 'Display_Value' as a floating point */
    if(operator && Calculator.Wait_Second_Operand){ /* Should local 'operator' exist and global 'Calculator.Wait_Second_Operand' be true, sets global 'Calculator.operator' to given operator and stops the function */
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null){ /* Checks to see if local 'First_Operand' has no value and sets global 'Calculator.First_Operand' to 'Value_of_Input */
        Calculator.First_Operand = Value_of_Input;
    }else if(operator){ /* Checks to see if operator exists */
        const Value_Now = First_Operand || 0; /* Should local 'First_Operand' have a 'truthy' value, sets 'Value_Now' to that value, if not the constant is set to 0 */
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); /* Searches for the given operator in 'Perform_Calculation' and performs the associated function with the given parameters */
        result = Number(result).toFixed(9); /* Ensures the final number doesn't surpass the size of the calculator screen */
        result = (result * 1).toString(); /* Ensures there are no unecessary 0's */
        Calculator.Display_Value = parseFloat(result); /* Displays the result on the calculator screen */
        Calculator.First_Operand = parseFloat(result); /* Sets 'Calculator.First_Operand' to the result so the user may continue using the calculator with current value */
    }
    Calculator.Wait_Second_Operand = true; /* Sets 'Calculator.Wait_Second_Operand' to true */
    Calculator.operator = Next_Operator; /* Sets 'Calculator.operator' to given operator */
}

const Perform_Calculation = { /* A constant with operators tied to functions performing their corresponding operations */
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset(){
    Calculator.Display_Value = '0'; /* Clears the display */
    Calculator.First_Operand = null; /* Clears the first number of the calculation */
    Calculator.operator = null; /* Clears the operator */
}

function Update_Display(){ /* Updates the calculator's display to 'Calculator.Display_Value' */
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys'); /* Sets 'keys' constant to direct towards the first html element with class '.calculator-keys' */
keys.addEventListener('click', (event) => { /* Adds an event listener to check if the user clicks on any element inside 'keys' */
    const {target} = event; /* Sets 'target' to direct to the element the user clicked on */
    if(!target.matches('button')){ /* Ends the function if the user didn't click on a button */
        return;
    }
    if(target.classList.contains('operator')){ /* If the user clicked on an operator key, performs neccessary operation and updates the screen, then ends the function */
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains('decimal')){ /* If the user clicked on the decimal key, adds a decimal and updates the screen, then ends the function */
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains('all-clear')){ /* If the user clicked on the clear button, resets the calculator and updates the screen, then ends the function */
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value); /* Should all other statements be false, adds the digit of the key clicked by the user */
    Update_Display(); /* Updates the display */
})