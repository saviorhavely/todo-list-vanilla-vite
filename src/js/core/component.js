import { app } from "../variables";

class Component {
  constructor(target) {
    this.target = target
  }

  getSelector() {
    return `[data-component="${this.target}"]`
  }

  getBody() {
    return `<span>Component</span>`;
  }

  loadHooks() {
    console.log("carreando hooks");
  }

  render() {
    const item = document.createElement("div");
    item.setAttribute('data-component', this.target)
    item.innerHTML = this.getBody();

    app.append(item);
    this.loadHooks();
  }

  rerender() { 
    const el = document.querySelector('[data-component=' + this.target + ']')
    el.innerHTML = this.getBody();
    this.loadHooks()
  }
}

export default Component;
