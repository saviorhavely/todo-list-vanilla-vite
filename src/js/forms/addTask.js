import { dataPush, renderTodos } from "../data/todos";

const form = document.querySelector("#addTask");

function onSubmitAddTask() {
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    
    dataPush({
      title: form.querySelector("[name=title]").value,
      amount: form.querySelector("[name=amount]").value,
      checked: form.querySelector("[name=checked]").checked,
    })
    
    renderTodos();
  });
}

export { onSubmitAddTask };
