function validate(){
    var name = document.forms['theForm']['name'].value;
    var email = document.forms['theForm']['email'].value;
    if(name == '' || email == ''){
        alert('Please fill out the required fields');
    }
}