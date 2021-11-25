

export class HelloComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `<p>Hello <slot name="name"></slot></p>`;
    }
}
window.customElements.define('hello-comp', HelloComponent)