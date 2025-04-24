var slidePos = 1; /* Sets a variable to keep track of slide position */
let slides = document.getElementsByClassName('slide'); /* Sets shorthand for the 'slide' class */

function changeSlide(n){
    slidePos = slidePos + n; /* Sets slidePos to be equal to itself plus a given number */
    if(slidePos < 1){ /* Checks to see if slidePos has gotten lower than the minimum value */
        slidePos = slides.length /* Sets slidePos to the final position */
        setSlide(slidePos); /* Calls setSlide function to change the current slide using slidePos */
    }else if(slidePos > slides.length){ /* Checks to see if slidePos has gotten higher than the max value */
        slidePos = 1; /* Sets slidePos to the initial position */
        setSlide(slidePos); /* Calls setSlide function to change the current slide using slidePos */
    }else{
        setSlide(slidePos); /* Calls setSlide function to change the current slide using slidePos */
    }
}

function setSlide(slideNum){
    for(i = 1; i < slides.length + 1; i++){ /* For loop that cycles for every element with the 'slide' class */
        document.getElementById('page'+i).style.display = 'none'; /* Hides an element with the id 'page' + a number given by the for loop */
    }
    document.getElementById('page'+slideNum).style.display = 'block'; /* Displays an element based on current slide position */
    slidePos = slideNum; /* Sets slidePos to the current slide position, ensures next/prev buttons don't lose track when the navigation dots are used */
}