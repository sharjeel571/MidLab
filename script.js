
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const todosList = document.getElementById("todos");
  let isEditing = false;
  let currentTodo;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = input.value.trim();
    if (todoText) {
      if (isEditing) {
        currentTodo.innerText = todoText;
        isEditing = false;
        input.value = "";
      } else {
        const todoItem = document.createElement("li");
        todoItem.innerText = todoText;
        todoItem.addEventListener("click", function () {
          todoItem.classList.toggle("completed");
        });
        todoItem.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          todosList.removeChild(todoItem);
        });
        todoItem.addEventListener("dblclick", function () {
          isEditing = true;
          currentTodo = todoItem;
          input.value = todoItem.innerText;
        });
        todosList.appendChild(todoItem);
        input.value = "";
      }
    }
  });
});

