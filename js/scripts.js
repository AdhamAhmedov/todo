
const elForm = document.querySelector(".todo-form");
const elInputTodo = elForm.querySelector(".todo-input");
const elTodoList = document.querySelector(".todo-list");
const elTodoTemplate = document.querySelector("#todo-item--template").content;

const todosArr = [];

function deleteTodo(evt) {
    const todoId = evt.target.dataset.todoId;

    const foundTodoIndex = todosArr.findIndex((item) => item.Id == todoId);

    todosArr.splice(foundTodoIndex, 1)

    renderTodos(todosArr, elTodoList);
}

function renderTodos(todosArr, element) {
    element.innerHTML = null;

    todosArr.forEach((todo) => {

        const todoTemplate = elTodoTemplate.cloneNode(true);

        const todoTitleSpan = todoTemplate.querySelector(".todo-item-complete-text");
        const todoDeleteBtn = todoTemplate.querySelector(".todo-item-delete-btn ");

        todoTitleSpan.textContent = todo.title;
        todoDeleteBtn.dataset.todoId = todo.id;

        todoDeleteBtn.addEventListener("click", deleteTodo);


        element.appendChild(todoTemplate);

    });

}



elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const inputTodo = elInputTodo.value.trim()

    todosArr.push({
        id: todosArr.length,
        title: inputTodo,
        isCompleted: false,
    });

    console.log(todosArr);
    renderTodos(todosArr, elTodoList);
    elInputTodo.value = null;

});









