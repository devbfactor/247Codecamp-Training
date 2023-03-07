// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const fitlerOption = document.querySelector('.filter-todo')

// Functions
const addTodo = (event)=>{
    // Prevent button from submitting 
    event.preventDefault();
    // Create Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add Todo to Local Storage
    saveLocalTodos(todoInput.value);
    // Check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn);
    // Trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear input box
    todoInput.value = '';

}

const deleteCheck = (event)=>{
    const item = event.target;
    // Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        });
        removeLocalTodos(todo);
    }
    // Complete Todo
    if (item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

const filterTodo = (event)=>{
    const todos = todoList.childNodes;
    todos.forEach((todo)=>{
        switch(event.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        };
        
    });
}

const saveLocalTodos = (todo)=>{
    // Check Existing Todos
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // Push & Save New Todos
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = ()=>{
    // Check Existing Todos
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // Display Existing Todos
    todos.forEach(todo=>{
        // Create Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // Check mark button
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = '<i class="fas fa-check"></i>';
        completedBtn.classList.add('completed-btn');
        todoDiv.appendChild(completedBtn);
        // Trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);
        // Append to List
        todoList.appendChild(todoDiv);
    })
}

const removeLocalTodos = (todo)=>{
    // Check Existing Todos
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);

    localStorage.setItem('todos', JSON.stringify(todos));
}

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
fitlerOption.addEventListener('click', filterTodo);