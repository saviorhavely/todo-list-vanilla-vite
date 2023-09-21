import Component from "./component";

class Input extends Component {
  constructor(target, label, onClick) {
    super(target);

    this.label = label;
    this.target = target;
    this.onClick = onClick;
    console.log("carregando");
  }

  getTarget() {
    return ``;
  }

  getBody() {
    return `<button class="btn btn-danger">${this.label}</button>`;
  }

  loadHooks() {
    const hook = document.querySelector(this.getSelector(this.target));

    hook.addEventListener("click", (ev) => {
      this.onClick(ev);
    });
  }
}

export default Input;
