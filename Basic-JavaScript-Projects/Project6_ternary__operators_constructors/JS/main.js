function Ride_Function(){
    var Height, Can_ride; /* Creates variables for use in current function */
    Height = document.getElementById("Height").value; /* Sets var 'Height' to the value of the html input element 'Height' */
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; /* Ternary operation to set the value of var 'Car_ride' */
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; /* Displays decided value of var 'Can_ride' in a p element */
}

function Vehicle(Make, Model, Year, Color){ /* Function used to created objects based on given parameters */
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');

function myFunction(){ /* Displays a sentence based on a given object in a p element */
    document.getElementById('Keywords_and_Constructors').innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function newPerson(Age, Job, Status){ /* Function used to created objects based on given parameters */
    this.Person_age = Age;
    this.Person_Job = Job;
    this.Person_Status = Status;
}

var Michael = new newPerson(39, 'Car Salesman', 'Married');

function displayPerson(){ /* Displays a sentence based on a given object in a p element */
    document.getElementById('New_and_This').innerHTML = "Michael is a " + Michael.Person_age + " year old " + Michael.Person_Job + " who is currently " + Michael.Person_Status;
}

function trueFalse(){
    document.getElementById('Nested_Function').innerHTML = alternate(document.getElementById('Nested_Function').innerHTML); /* Uses current innerHTML of a p element to determine a new value to be displayed */
    function alternate(state){ /* If given a string value of 'True' or 'False', returns the opposite */
        if(state === 'True'){
            return 'False';
        }else if(state === 'False'){
            return 'True';
        }
    }
}