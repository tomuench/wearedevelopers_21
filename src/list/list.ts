import { Person } from "../models/person";
import { BasicComponent } from "./basicComponent";
import { ListItemEdit } from "./itemEdit";
import { ListItemShow } from "./itemShow";


export class List extends BasicComponent {

    private _objects: Person[] = [];

    constructor(){
        super();
        // TODO create shadow dom
    }

    public get objects(): Person[] {
        return this._objects;
    }

    public set objects(v: Person[]) {
        this._objects = v;
        // TODO create Component for each List item
    }


    protected afterRender() {
        // Todo bind add button
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
        return this.querySelector("#items") as HTMLElement;
    }

    private get addButton() : HTMLButtonElement {
        return this.querySelector("#add") as HTMLButtonElement;
    }

    /**
     * Get Template of Element
     * @return {string}
     */
    protected get template() {
        return `<article class="panel is-primary">
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