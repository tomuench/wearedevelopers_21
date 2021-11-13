import { BasicItem } from "./item";
import { ListItemEdit } from "./itemEdit";


export class ListItemShow extends BasicItem {

    protected afterRender() {
        this.querySelector("button").addEventListener("click", () => {
            this.replaceWith(new ListItemEdit(this.object));      
        })
    }

    protected get template() {
        return `<li>${this.object.firstname} ${this.object.lastname} <button>edit</button></li>`
    }

}


customElements.define('list-item', ListItemShow)