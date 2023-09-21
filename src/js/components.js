// import boostrap
import "bootstrap/dist/css/bootstrap.css";

import Button from "./core/button";
import Input from "./core/input";
import Component from "./core/component";

// const data = [
//   {
//     label: "Abrir",
//     componentClass: Button,
//   },
//   {
//     label: "Abrir",
//     componentClass: Input,
//   },
//   {
//     label: "Abrir",
//     componentClass: Button,
//   },
//   {
//     label: "Abrir",
//     componentClass: Button,
//   },
//   {
//     label: "Abrir",
//     componentClass: Button,
//   },
//   {
//     label: "Abrir",
//     componentClass: Button,
//   },
//   {
//     label: "Abrir",
//     componentClass: Button,
//   },
// ];

async function getDate() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  return await response.json()
}

const data = await getDate()

function componentes() {
  
  return data.map(({ name }, index) => {
    return new Button("open" + index, name, (ev) => {
      ev.target.classList.toggle("lkdsalkjdsaljlkja");
    });
  });
}

function show() {
  componentes().forEach((comp) => {
    comp.render();
  });
}
show();

document.querySelector("#rerender").addEventListener("click", () => {
  data[0].name = "apagar as luzes 1";
  data[1].name = "apagar as luzes 2";
  data[2].name = "apagar as luzes 3";

  componentes().forEach((comp) => {
    comp.rerender();
  });
});

// new Button({ prop: "class", value: "open" }, "Abrir").render();
// new Button({ prop: "name", value: "open" }, "Abrir").render();
