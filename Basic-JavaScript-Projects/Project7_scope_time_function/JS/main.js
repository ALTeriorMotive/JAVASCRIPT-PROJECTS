var x = 5; /* Global variable */

function varTest(){ /* Function with a local variable */
    var y = 10;
}

function write(){
    console.log(x); /* console.log() used to debug */
    try{
        console.log(y); /* console.log() used to debug */
    } catch(error) {
        console.error(error);
    }
    document.write(x + "<br>");
    try{
        document.write(y + "<br>"); /* Intentional error via a local variable from another function */
    } catch(error) {
        console.error(error);
    }
}

function timedGreetings(){ /* Function containing an if statement */
    if(new Date().getHours() < 12){
        document.getElementById('greet').innerHTML = "Good morning!";
    }else if(new Date().getHours() < 20){
        document.getElementById('greet').innerHTML = "Good evening.";
    }else{
        document.getElementById('greet').innerHTML = "Good night.";
    }
}

function colorChoice(){ /* Function containing an if statement */
    var choice = document.getElementById('favColor').value.toLowerCase();
    var response;
    if(choice == 'blue'){
        response = 'Good choice';
    }else{
        response = 'Wrong answer, blue is best!'
    }
    document.getElementById('colorResponse').innerHTML = response;
}

function Time_function(){ /* Time function written from course steps */
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }else{
        Reply = "It is evening time.";
    }
    document.getElementById('Time_of_day').innerHTML = Reply;
}