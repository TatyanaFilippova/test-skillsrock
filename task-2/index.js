function addTodo() {
  // получаем значение инпута
  const value = document.getElementById("todo-value").value;

  // получаем элемент списка
  const ul = document.getElementById("todo-list");

  // создаем кнопку удаления элемента
  const buttonRemove = document.createElement("button");
  buttonRemove.className = "button-remove";
  buttonRemove.innerHTML = "Удалить";

  // создаем элемент списка
  const li = document.createElement("li");
  li.className = "todo-list-element";

  // добавляем к элементу списка новое todo и кнопку удаления
  li.appendChild(document.createTextNode(value));
  li.appendChild(buttonRemove);
  ul.appendChild(li);

  // очишаем значение инпута
  document.getElementById("todo-value").value = "";
}

// обработчик для всех кликов по документу
document.addEventListener("click", function (event) {
  // если клик был по элементу списка, добавляем ему класс активного
  if (event.target.classList.contains("todo-list-element")) {
    event.target.classList.add("todo-list-element__active");
    return;
  }

  // если клик был по кнопке удаления, удаляем родителя
  if (event.target.classList.contains("button-remove")) {
    event.target.parentElement.remove();
    return;
  }
});
