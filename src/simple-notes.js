const LOCAL_STORAGE_KEY = "simple-notes-storage";

class Notes extends HTMLElement {
  destructors = [];
  notesStyles = `
  textarea {
    width: 99%;
    height: 99%;
    resize: none;
    border: none;
    outline: none;
    background-color: rgb(
      237,
      230,
      230
    ); /* For browsers that do not support gradients */
    background: repeating-linear-gradient(
      white,
      white 19px,
      rgb(101, 142, 231) 20px,
      rgb(101, 142, 231) 20px
    );
    line-height: 20px;
    font-family: FiraCode, Monaco, Helvetica, sans-serif;
  }
  `;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const textArea = document.createElement("textarea");
    textArea.value = window.localStorage.getItem(LOCAL_STORAGE_KEY) || "";
    const listener = (e) => {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, e.target.value);
    };
    textArea.addEventListener("input", listener);
    this.destructors.push(() => {
      textArea.removeEventListener("input", listener);
    });

    const style = document.createElement("style");
    style.textContent = this.notesStyles;

    this.shadowRoot.append(style, textArea);
  }

  disconnectedCallback() {
    this.destructors.forEach((destructor) => destructor());
  }
}

customElements.define("simple-notes", Notes);
