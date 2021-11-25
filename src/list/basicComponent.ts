
export class BasicComponent extends HTMLElement{


    /**
     * Connected Callback
     */
    connectedCallback() {
        this.beforeRender();
        this.render();
        this.afterRender();
    }

    disconnectedCallback() {

    }

    /**
     * Setting our template to inner-HTML
     */
    protected render() {
        this.innerHTML = this.template;
    }


    /**
     * Executed before Component is rendered
     */
    protected beforeRender() {

    }

    /**
     * Executed after Component is rendered
     */
    protected afterRender() {

    }

     /**
     * Get Template of Element
     * @return {string}
     */
    protected get template() {
        return `No Template Set`
    }
}