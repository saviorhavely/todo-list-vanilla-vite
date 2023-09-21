import { dataClean, dataDelete, renderTodos } from "../data/todos";

const onHook = (target, event = "click", callback = (ev) => {}) => {
  const elements = document.querySelectorAll(target);
  elements.forEach((button) => {
    button.addEventListener(event, callback);
  });
};

function onClickForDelete() {
  const btnsDelete = document.querySelectorAll(".btn-del");
  btnsDelete.forEach((button) => {
    button.addEventListener("click", function () {
      // const li = button.parentNode;
      const li = button.closest("li");
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



// function onChangeConcluited() {
//   const checkedTask = document.querySelectorAll("[name=checkedTask]");

//   btnsClear.forEach((button) => {
//     button.addEventListener("click", function () {
//       // const type = button.dataset.type
//       const { type } = button.dataset;
//       dataClean(type);
//       renderTodos();
//     });
//   });
// }

export { onClickForClear, onClickForDelete, onHook };
