interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

const inputElement = document.getElementById('todo-input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

let todos: ToDo[] = [];

addBtn.addEventListener('click', function () {
    const text = inputElement.value.trim();
    if (text !== '') {
        addTodo(text);
        inputElement.value = '';
    }
});

function addTodo(text: string): void {
    const newTodo: ToDo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function renderTodos(): void {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;

        if (todo.completed) {
            li.classList.add('completed');
        }

        li.addEventListener('click', () => {
            todo.completed = !todo.completed;
            renderTodos();
        });
        todoList.appendChild(li);
    })
}