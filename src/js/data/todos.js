import {
  onClickForClear,
  onClickForDelete,
  onHook,
} from "../components/buttons";
import { listCompletedTask, listTask } from "../variables";

function data() {
  if (localStorage.getItem("list")) {
    return JSON.parse(localStorage.getItem("list"));
  }
  return [];
}

function dataPush(item) {
  const prevdata = data();
  prevdata.push(item);
  localStorage.setItem("list", JSON.stringify(prevdata));
}

function dataClean(type = "tasks") {
  const prevdata = data();
  const isCompleted = type == "tasks";

  const filtered = prevdata.filter((item) => {
    return item.checked == isCompleted;
  });

  localStorage.setItem("list", JSON.stringify(filtered));
}

function renderTodos() {
  listTask.innerHTML = "";
  listCompletedTask.innerHTML = "";

  data().forEach((item, index) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.classList.add("list__item");

    const itemHtml = `
      <input name="checkedTask" type="checkbox" class="form-check-input" />
      <span>
        <strong>Titulo:</strong> ${item.title} </br>
        <strong>Descrição:</strong> ${item.description}
      </span>
      <span> 
        <button class="btn btn-sm btn-info">Editar</button>
        <button class="btn btn-sm btn-danger btn-del">Deletar</button>
      </span>
    `;

    // const buttonDel = document.createElement("button");
    // buttonDel.classList.add("btn", "btn", "btn-del");
    // buttonDel.innerHTML = "Deletar";

    // li.append(title);
    // li.append(buttonDel);

    li.innerHTML = itemHtml;

    if (item.checked == true) {
      listCompletedTask.append(li);
    } else {
      listTask.append(li);
    }
  });

  onClickForClear();
  // onClickForDelete();

  onHook(".btn-del", "click", (ev) => {
    const li = ev.target.closest("li");
    const index = li.dataset.index;
    dataDelete(index);
    renderTodos();
  });
}

function dataDelete(index) {
  const prevdata = data();
  prevdata.splice(index, 1);

  localStorage.setItem("list", JSON.stringify(prevdata));
}

const dataEdit = (index, args) => {};

export { data, dataPush, dataClean, dataDelete, renderTodos };
