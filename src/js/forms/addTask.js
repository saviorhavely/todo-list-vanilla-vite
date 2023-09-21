import { dataPush, renderTodos } from "../data/todos";

const form = document.querySelector("#addTask");

function onSubmitAddTask() {
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    
    dataPush({
      title: form.querySelector("[name=title]").value,
      description: form.querySelector("[name=description]").value,
      checked: false,
    })
    
    renderTodos();
  });
}

export { onSubmitAddTask };
