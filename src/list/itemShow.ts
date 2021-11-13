import { BasicItem } from "./item";
import { ListItemEdit } from "./itemEdit";


export class ListItemShow extends BasicItem {

    protected afterRender() {
        this.querySelector("button").addEventListener("click", () => {
            this.replaceWith(new ListItemEdit(this.object));      
        })
    }

    protected get template() {
        return `<a class="panel-block">
                    ${this.object.firstname} ${this.object.lastname} 
                    <button class="button">edit</button>
                </a>`
    }

}


customElements.define('list-item', ListItemShow)