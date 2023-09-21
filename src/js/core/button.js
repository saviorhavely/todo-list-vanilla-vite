import Component from "./component";

class Button extends Component {
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
    return `<button>${this.label}</button>`;
  }

  loadHooks() {
    const hook = document.querySelector(this.getSelector(this.target));

    hook.addEventListener("click", (ev) => {
      this.onClick(ev);
    });
  }
}

export default Button;
