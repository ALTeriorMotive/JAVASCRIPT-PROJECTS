let activePlayer = 'X'; /* Ensures the user is the starting player when the page is loaded */

let selectedSquares = []; /* Creates an array to be filled with occupied squares later */

function placeXOrO(squareNum){
    if(!selectedSquares.some(element => element.includes(squareNum))){ /* Checks to see if the selected square is already occupied */
        let select = document.getElementById(squareNum); /* Sets 'select' to direct towards an element with a given id */
        if(activePlayer ==='X'){ /* Gives an element an image depending on whoever was the active player */
            select.style.backgroundImage = 'url("images/x.png")';
        }else{
            select.style.backgroundImage = 'url("images/O.png")';
        }
        selectedSquares.push(squareNum + activePlayer); /* Ensures the current selected square gets added to an array of selected squares */
        checkWinConditions();
        if(activePlayer ==='X'){ /* Swaps the current active player */
            activePlayer = 'O';
        }else{
            activePlayer = 'X';
        }
        audio('./media/place.mp3'); /* Plays given audio */
        if(activePlayer === 'O'){ /* Disables the users ability to click while the computer takes a turn */
            disableClick();
            setTimeout(function(){ computersTurn(); }, 1000);
        }
        return true; /* Returns a true value to indicate the selected sqaure was open */
    }
    function computersTurn(){
        let success = false; /* Set to false for a while loop */
        let pickASquare;
        while(!success){ /* Loop keeps repeating until the computer finds a random position that is not occupied */
            pickASquare = String(Math.floor(Math.random() * 9)); /* Sets 'pickASquare' to a random integer from 0-8 */
            if(placeXOrO(pickASquare)){ /* Checks the 'placeXOrO' function to see if the chosen square is occupied */
                placeXOrO(pickASquare); /* Places a marker at the selected location */
                success = true; /* Sets 'success' to true, stopping the loop */
            }
        }
    }
}

function checkWinConditions(){
    if(arrayIncludes('0X', '1X', '2X')){ drawWinLine(50, 100, 558, 100) } /* Checks an array for all possible wins in Tic Tac Toe for both players, calls a funtion to draw a line on success */
    else if(arrayIncludes('3X', '4X', '5X')){ drawWinLine(50, 304, 558, 304) }
    else if(arrayIncludes('6X', '7X', '8X')){ drawWinLine(50, 508, 558, 508) }
    else if(arrayIncludes('0X', '3X', '6X')){ drawWinLine(100, 50, 100, 558) }
    else if(arrayIncludes('1X', '4X', '7X')){ drawWinLine(304, 50, 304, 558) }
    else if(arrayIncludes('2X', '5X', '8X')){ drawWinLine(508, 50, 508, 558) }
    else if(arrayIncludes('6X', '4X', '2X')){ drawWinLine(100, 508, 510, 90) }
    else if(arrayIncludes('0X', '4X', '8X')){ drawWinLine(100, 100, 520, 520) }
    else if(arrayIncludes('0O', '1O', '2O')){ drawWinLine(50, 100, 558, 100) }
    else if(arrayIncludes('3O', '4O', '5O')){ drawWinLine(50, 304, 558, 304) }
    else if(arrayIncludes('6O', '7O', '8O')){ drawWinLine(50, 508, 558, 508) }
    else if(arrayIncludes('0O', '3O', '6O')){ drawWinLine(100, 50, 100, 558) }
    else if(arrayIncludes('1O', '4O', '7O')){ drawWinLine(304, 50, 304, 558) }
    else if(arrayIncludes('2O', '5O', '8O')){ drawWinLine(508, 50, 508, 558) }
    else if(arrayIncludes('6O', '4O', '2O')){ drawWinLine(100, 508, 510, 90) }
    else if(arrayIncludes('0O', '4O', '8O')){ drawWinLine(100, 100, 520, 520) }
    else if(selectedSquares.length >= 9){ /* If all spaces are selected and no winners occur, plays audio and resets the game */
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }
    function arrayIncludes(squareA, squareB, squareC){ /* Checks for three values in an array, returns true only if all values exist in the array */
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if(a === true && b === true && c === true) {
            return true;
        }
    }
}

function disableClick(){ /* Ensures the user can't click on the page for 1 second */
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

function audio(audioURL){ /* Plays audio based on a given URL */
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById('win-lines'); /* Sets 'canvas' constant to direct toward a canvas element */
    const c = canvas.getContext('2d'); /* Allows for the use of 2d drawing functions on the canvas */
    let x1 = coordX1, /* Sets 4 variables to be 2 sets of x-y coordinates, and 2 additional variables to match the first set (will be used to progressively draw a line later) */
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;
    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing); /* Sets a constant to the 'requestAnimationFrame()' method */
        c.clearRect(0, 0, 608, 608); /* Clears the canvas */
        c.beginPath(); /* Preps the canvas to draw a line */
        c.moveTo(x1, y1); /* Sets the starting point of a line to the first set of coordinates */
        c.lineTo(x, y); /* Sets the end point of a line to a modified version of the initial coordinates */
        c.lineWidth = 10; /* Styles the line width */
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)'; /* Styles the line color */
        c.stroke(); /* Draws a line from the starting point to the end point */
        if(x1 <= x2 && y1 <= y2){ /* Checks the direction of the line */
            if(x < x2){ x += 10; } /* Moves the modified coordinate across the screen if not at its endpoint */
            if(y < y2){ y += 10; } /* Moves the modified coordinate down the screen if not at its endpoint */
            if(x >= x2 && y >= y2){ cancelAnimationFrame(animationLoop); } /* Upon reaching the end coordinates, stops the animation */
        }
        if(x <= x2 && y >= y2){ /* Checks the direction of the line (only for use on diagonal line from square 6 to 2) */
            if(x < x2){ x +=10; } /* Moves the modified coordinate across the screen if not at its endpoint */
            if(y > y2){ y -=10; } /* Moves the modified coordinate up the screen if not at its endpoint */
            if(x >= x2 && y <= y2){ cancelAnimationFrame(animationLoop); } /* Upon reaching the end coordinates, stops the animation */
        }
    }
    function clear(){
        const animationLoop = requestAnimationFrame(clear); /* Sets a constant to the 'requestAnimationFrame()' method */
        c.clearRect(0, 0, 608, 608); /* Clears the canvas */
        cancelAnimationFrame(animationLoop); /* Stops the animation */
    }
    disableClick(); /* Disables the users ability to click while a line is drawn */
    audio('./media/winGame.mp3'); /* Plays audio */
    animateLineDrawing(); /* Begins drawing a line */
    setTimeout(function () { clear(); resetGame(); }, 1000); /* Clears the canvas and restarts the game after 1 second */
}

function resetGame(){
    for(let i=0; i<9; i++){ /* For loop that sets the brackground image of each square to be epmty */
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = []; /* Clears the array of selected squares */
}