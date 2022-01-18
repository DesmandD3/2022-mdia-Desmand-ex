var template = document.createElement("template");
template.innerHTML = `
<style>
#counter {
  display: flex;
  padding: 5px;
  background-color: #dad;
}

#counter > button {
  background-color: #bed;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#counter > div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: x-large;
}

#bar {
  width: 0px;
  height: 10px;
  background-color: yellow;
  transition: width 0.2s;
}
</style>
<div id="counter">
<button id="d_but">-</button>
<div id="c_num">1</div>
<button id="i_but">+</button>
</div>
<div id="bar"></div>
`;

class TheCounter extends HTMLElement {
  constructor() {
    super();
    this.num = 1;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#d_but").onclick = this.dec;
    this.shadowRoot.querySelector("#i_but").onclick = this.inc;
  }

  dec() {
    this.num = this.num - 1;
    this.shadowRoot.querySelector("c_num").innerTect = this.num;
  }

  inc() {
    this.num = this.num + 1;
    this.shadowRoot.querySelector("c_num").innerTect = this.num;
  }
}

customElements.define("the-counter", TheCounter);
