import { Person } from "../models/person";
import { Binder } from "./binder";
import { BasicItem } from "./item";
import { ListItemShow } from "./itemShow";


/**
 * Component to be shown on edit
 */
export class ListItemEdit extends BasicItem {


    private _backupObj : Person;

    protected afterRender() {
        this._backupObj = Object.assign({}, this.object);
        Binder.bindObjectToElement(this.object, this);
        
        this.cancelButton.addEventListener("click", () => {
            Object.keys(this.object).forEach(key => {
                (this.object as any)[key] = (this._backupObj as any)[key];
            });
            this.replaceWith(new ListItemShow(this.object));
        })

        this.saveButton.addEventListener("click", () => {
            this.replaceWith(new ListItemShow(this.object));
        });
    }

    /**
    * Get CancelButton from Innerhtml
    * @return {HTMLButtonElement}
    */
    private get saveButton(): HTMLButtonElement {
        return this.querySelector("#save") as HTMLButtonElement;
    }


    /**
     * Get CancelButton from Innerhtml
     * @return {HTMLButtonElement}
     */
    private get cancelButton(): HTMLButtonElement {
        return this.querySelector("#cancel") as HTMLButtonElement;
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


customElements.define('list-item-edit', ListItemEdit);