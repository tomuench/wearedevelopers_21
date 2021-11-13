import { ListItemEdit } from "./itemEdit";
import { ListItemShow } from "./itemShow";


export class List extends HTMLElement {

    private _objects: any[] = [];

    public get objects(): any[] {
        return this._objects;
    }

    public connectedCallback() {
        this.render();
    }

    public set objects(v: any[]) {
        this._objects = v;
        this.appendObjects();
    }

    private appendObjects() {
        let box = this.querySelector("#items");
        box.innerHTML = "";
        this._objects.forEach((object) => {
            box.append(new ListItemShow(object))
        });
    }

    private addNewObject() {
        let object = {firstname: "", lastname: ""};
        this.objects.push(object);


        let box = this.querySelector("#items");
        box.append(new ListItemEdit(object));
    }

    public render() {
        this.innerHTML = this.template;
        this.appendObjects();

        this.querySelector("button").addEventListener("click",() => this.addNewObject());

    }

    protected get template() {
        return `<article class="panel is-primary">
                        <p class="panel-heading">
                            Primary
                        </p>
                        <div id="items">
                        </div>
                        
                        <div class="panel-block">
                            <button class="button">add</button>
                        </div>
                </article>`
    }
}


customElements.define("my-list", List)