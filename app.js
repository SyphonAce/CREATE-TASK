//this is all the data
let data = [];

// abstraction
function createTodo(desc, priority=false) {
    if (!desc) {
        return false;
    }
    data.push({todo: desc, done: false, priority: priority});
    return true;
}
document.querySelector('#add').addEventListener('click', handleAdd);
function handleAdd(evt) {
    let desc = document.querySelector('#todo');
    let p = document.querySelector('#priority');
    console.log(p);
    createTodo(desc.value, p.checked);
    render();
}

function render() {
    const todoList = document.querySelector(".todos ul")
    console.log(todoList);
    todoList.innerHTML = ``;
    for (let i = 0; i<data.length;i++) {
        if (data[i].priority) {
            todoList.innerHTML +=  `<li class="red">
            <input type="checkbox" id="${data[i].todo}-${i}">
            <label for="${data[i].todo}-${i}">
            ${ data[i].todo }
            </li>`; 
        } else {
            todoList.innerHTML +=  `<li>
            <input type="checkbox" id="${data[i].todo}-${i}">
            <label for="${data[i].todo}-${i}">
            ${ data[i].todo }
            </li>`; 
            }   
        }
    }
    console.log(render)

    let checks = document.querySelectorAll('.todos [type="checkbox"]')


    for (let i=0; i< checks.length; i++) {
        checks[i].addEventListener('change', handleCheck)
    }
    function handleCheck(evt) {
        console.log(evt.currentTarget);
        let id = evt.currentTarget.id.split('-');
        console.log(id);
    }
    