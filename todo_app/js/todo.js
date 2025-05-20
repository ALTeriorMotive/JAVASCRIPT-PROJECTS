/* JSON.stringify assignment */
var things = {
    one: 'first',
    two: 'second',
    three: 'third'
};
var jsonString = JSON.stringify(things);
/* JSON.parse assignment */
console.log(JSON.parse(jsonString));
/* localStorage assignment */
localStorage.setItem('name', 'value');


/* vvv Todo javascript vvv */
function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add(){
    var task = document.getElementById('task').value;
    if(task.trim() === ""){
        alert('Box has not been filled out');
        return;
    }
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

function show(){
    var todos = get_todos();
    var html = '<ul>';
    for(i=0; i<todos.length; i++){
        html += '<li class="listItem">' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var removeBtns = document.querySelectorAll('.remove');
    for(i=0;i<document.getElementsByClassName('remove').length; i++){
        removeBtns[i].addEventListener('click', function(event){
            removeTask(event);
        });
    }
}

document.getElementById('add').addEventListener('click', add);
show();


function removeTask(event){
    var todos = get_todos();
    var index = event.target.getAttribute('id');
    todos.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}