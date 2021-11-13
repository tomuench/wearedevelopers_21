

export class ListItem extends HTMLElement {

    private _object: any;

    constructor(object: any) {
        super();
        this._object = object;
    }


    connectedCallback() {
        this.innerHTML = `<li>${this._object.firstname} ${this._object.lastname}</li>`
    }
}


customElements.define('list-item', ListItem)