// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(e) {
  //Prevent Form from submitting...
  e.preventDefault();
  //Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = "heeeeeee";
  todoDiv.append(newTodo);
  //Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //Append to list
  todoList.appendChild(todoDiv);
}
