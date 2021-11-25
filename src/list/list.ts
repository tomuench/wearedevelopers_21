import { Person } from "../models/person";
import { BasicComponent } from "./basicComponent";
import { ListItemEdit } from "./itemEdit";
import { ListItemShow } from "./itemShow";


export class List extends BasicComponent {

    private _objects: Person[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    public get objects(): Person[] {
        return this._objects;
    }

    public set objects(v: Person[]) {
        this._objects = v;
        
        this._objects.forEach((object) => {
            this.appendToList(new ListItemShow(object));
        })
    }

    private appendToList(listItem: ListItemShow){
        listItem.addEventListener("delete",(event: CustomEvent) => {
            let obj : Person = event.detail as Person;
            let index = this.objects.indexOf(obj);

            if(index >= 0) {
                this.objects.splice(index, 1);
                console.log(this.objects);
            }
            
        })
        this.itemList.append(listItem);
    }

    protected render() {
        this.shadowRoot.innerHTML = this.template;
    }


    protected afterRender() {
        this.addButton.addEventListener("click", () => {
            let obj = this.buildNewObject();
            this.itemList.append(new ListItemEdit(obj));
        })
    }

    /**
     * Creating a new Object
     * @returns {any}
     */
    private buildNewObject() :any {
        return { firstname: "", lastname: "" };
    }

    /**
     * Getting the ItemList Div
     * @return {HTMLElement}
     */
    private get itemList() : HTMLElement {
        return this.shadowRoot.querySelector("#items") as HTMLElement;
    }

    private get addButton() : HTMLButtonElement {
        return this.shadowRoot.querySelector("#add") as HTMLButtonElement;
    }

    /**
     * Get Template of Element
     * @return {string}
     */
    protected get template() {
        return `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <article class="panel is-primary">
                        <p class="panel-heading">
                            Primary
                        </p>
                        <div id="items">
                        
                        </div>
                        
                        <div class="panel-block">
                            <button id="add" class="button">add</button>
                        </div>
                </article>`
    }
}


customElements.define("my-list", List)