const form = document.getElementById('todoForm');
const todoList = document.querySelector('section');

//array
let todos = [];

function renderTodos() {

    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        const text = document.createElement('span');
        const checkBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        text.textContent = todo.text;
        if (todo.complete) {
            text.style.textDecoration = 'line-through';
        }

        checkBtn.textContent = 'Mark as Completed';
        checkBtn.addEventListener('click', () => {
            todos[index].complete = !todos[index].complete;
            renderTodos();
        });

        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });

        todoItem.appendChild(text);
        todoItem.appendChild(checkBtn);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
    });
}

//submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoField = document.getElementById('todoField').value;
    if (todoField.trim() !== '') {
        todos.push({ text: todoField, complete: false });
        renderTodos();
        document.getElementById('todoField').value = '';
    }
});


renderTodos();
