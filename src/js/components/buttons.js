import { dataClean, dataDelete, renderTodos } from "../data/todos";

function onClickForDelete() {
  const btnsDelete = document.querySelectorAll(".btn-del");
  btnsDelete.forEach((button) => {
    button.addEventListener("click", function () {
      const li = button.parentNode;
      const index = li.dataset.index;
      dataDelete(index);
      renderTodos();
    });
  });
}

function onClickForClear() {
  const btnsClear = document.querySelectorAll(".clear-btn");
  btnsClear.forEach((button) => {
    button.addEventListener("click", function () {
      // const type = button.dataset.type
      const { type } = button.dataset;
      dataClean(type);
      renderTodos();
    });
  });
}

export { onClickForClear, onClickForDelete };
