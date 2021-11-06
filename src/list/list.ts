

export class List extends HTMLElement{

    public connectedCallback() {
        this.innerHTML = "Hello-World"
    }
}


customElements.define("my-list", List)