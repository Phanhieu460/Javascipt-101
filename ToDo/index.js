const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todoLi = document.createElement("li");
  todoLi.innerHTML = "hey";
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);
}

todoButton.addEventListener("click", addTodo);
