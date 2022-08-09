class MyApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    mountPoint.innerText = "Hello World";
  }
}

customElements.define("my-app", MyApp);
