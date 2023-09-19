
import { onClickForClear, onClickForDelete } from "../components/buttons";
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

    const title = document.createElement("span");
    title.innerHTML = "<strong>Titulo: </strong> " + item.title;

    const buttonDel = document.createElement("button");
    buttonDel.classList.add("btn", "btn-danger", "btn-del");
    buttonDel.innerHTML = "Deletar";
    
    li.append(title);
    li.append(buttonDel);

    if (item.checked == true) {
      listCompletedTask.append(li);
    } else {
      listTask.append(li);
    }
  });

  onClickForClear();
  onClickForDelete();
}

function dataDelete(index) {
  const prevdata = data();
  prevdata.splice(index, 1);

  localStorage.setItem("list", JSON.stringify(prevdata));
}

export { data, dataPush, dataClean, dataDelete, renderTodos };
