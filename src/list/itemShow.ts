import { BasicItem } from "./item";
import { ListItemEdit } from "./itemEdit";


/**
 * Showing a List-Item
 */
export class ListItemShow extends BasicItem {

    protected afterRender() {
        // TODO Implement Listener to Edit-Button
    }

    protected get template() {
        return `<a class="panel-block">
                    ${this.object.firstname} ${this.object.lastname} 
                    <button class="button">edit</button>
                </a>`
    }

}

// TODO register