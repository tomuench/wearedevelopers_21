import { BasicItem } from "./item";
import { ListItemEdit } from "./itemEdit";


/**
 * Showing a List-Item
 */
export class ListItemShow extends BasicItem {

    protected afterRender() {
        this.editButton.addEventListener("click", () => {
            this.replaceWith(new ListItemEdit(this.object));
        })

        this.deleteButton.addEventListener("click", () => {
            let event = new CustomEvent("delete", {detail: this.object});
            this.dispatchEvent(event);
            this.remove();
        })
    }

    private get editButton() : HTMLButtonElement{
        return this.querySelector("#edit") as HTMLButtonElement;
    }

    private get deleteButton() : HTMLButtonElement{
        return this.querySelector("#delete") as HTMLButtonElement;
    }

    protected get template() {
        return `<a class="panel-block">
                    ${this.object.firstname} ${this.object.lastname} 
                    <button id="delete" class="button is-danger">DEL</button>
                    <button id="edit" class="button">edit</button>
                </a>`
    }

}

customElements.define('item-list-show', ListItemShow);