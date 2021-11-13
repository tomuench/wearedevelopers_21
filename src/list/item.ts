

export class BasicItem extends HTMLElement {

    private _object: any;

    constructor(object: any) {
        super();
        this._object = object;
    }

    connectedCallback() {
        this.render();
        this.afterRender();
    }

    protected set object(v: any){
        this._object = v;
    }

    public get object() {
        return this._object;
    }

    public render() {
        this.innerHTML = this.template;
    }

    protected afterRender() {

    }

    protected get template() {
        return `<li>${this.object.firstname} ${this.object.lastname} <button>edit</button></li>`
    }

}