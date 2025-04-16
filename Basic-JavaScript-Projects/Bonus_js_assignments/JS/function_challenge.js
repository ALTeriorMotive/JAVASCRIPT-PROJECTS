var direction = "right";


/* Moves the div back and forth depending on which side of the screen it hit */
function moveDiv(){
    console.log(screen.availWidth);
    console.log(screen.width);
    var divPos = parseInt(document.getElementById("the_div").style.left);
    if(divPos >= (parseInt(screen.availWidth) - 300)){
        direction = "left";
    }else if(divPos <= 50){
        direction = "right";
    }
    if(direction == "right"){
        divPos = divPos + 200;
        document.getElementById("the_div").style.left = divPos + "px";
        console.log(divPos);
    }else{
        divPos = divPos - 200;
        document.getElementById("the_div").style.left = divPos + "px";
        console.log(divPos);
    }
}