import { BasicItem } from "./item";


/**
 * Component to be shown on edit
 */
export class ListItemEdit extends BasicItem {


    protected afterRender() {
        // TODO Bind Element-Attributes
        // TODO Bind Listener to Cancel-Button + Backup
        // TODO Bind Listener to Save-Button
    }

    /**
    * Get CancelButton from Innerhtml
    * @return {HTMLButtonElement}
    */
    private get saveButton(): HTMLButtonElement {
        return this.querySelector("#cancel") as HTMLButtonElement;
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


// TODO register