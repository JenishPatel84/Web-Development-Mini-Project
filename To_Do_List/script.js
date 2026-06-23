"use strict";
const inputElement = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let todos = [];
addBtn.addEventListener('click', function () {
    const text = inputElement.value.trim();
    if (text !== '') {
        addTodo(text);
        inputElement.value = '';
    }
});
function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}
function renderTodos() {
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
    });
}
