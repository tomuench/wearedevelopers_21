import { Binder } from "./binder";
import { BasicItem } from "./item";
import { ListItemShow } from "./itemShow";


export class ListItemEdit extends BasicItem {

    private _originalObject: any;


    protected afterRender() {
        this._originalObject = Object.assign({}, this.object);
        Binder.bindObjectToElement(this.object, this);
        this.querySelector("#cancel").addEventListener("click", () => {
            this.object = this._originalObject;
            this.switchToShow();
        })

        this.querySelector("#save").addEventListener("click", () => {
            this.switchToShow();
        })
    }

    private switchToShow() {
        this.replaceWith(new ListItemShow(this.object));
    }


    protected get template() {
        return `<a class="panel-block">
                    <input class="input" type="text" name="firstname"/>
                    <input class="input" type="text" name="lastname"/>
                    <button class="button is-danger" id="cancel">X</button>
                    <button class="button is-success" id="save">Ok</button>
                </a>`;
    }
}


customElements.define('list-item-edit', ListItemEdit)