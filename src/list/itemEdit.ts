import { BasicItem } from "./item";
import { ListItemShow } from "./itemShow";


export class ListItemEdit extends BasicItem {

    private _originalObject: any;


    protected afterRender() {
        this._originalObject = Object.assign({}, this.object);
        this.bindObject();
        this.querySelector("#cancel").addEventListener("click", () => {
            this.object = this._originalObject;
            this.switchToShow();
        })

        this.querySelector("#save").addEventListener("click", () => {
            this.switchToShow();
        })
    }

    private bindObject(){
        Object.keys(this.object).forEach((key) => {
            let value = this.object[key];
            let element = this.querySelector(`input[name='${key}']`) as HTMLInputElement;
            if(element) {
                element.value = value;
                element.addEventListener("change", (event) => {
                    this.object[key] = element.value;
                })
            }
        })
    }

    private switchToShow(){
        this.replaceWith(new ListItemShow(this.object));
    }


    protected get template() {
        return `<li>
                    <input name="firstname"/>
                    <input name="lastname"/>
                    <button id="cancel">X</button>
                    <button id="save">Ok</button>
                </li>`;
    }
}


customElements.define('list-item-edit', ListItemEdit)