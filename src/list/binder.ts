

export class Binder {

    /**
     * Bind Object to An Element
     * @param {any} object 
     * @param {HTMLElement} parent 
     */
    public static bindObjectToElement(object: any, parent: HTMLElement) {
        Object.keys(object).forEach((key) => {
            let value = object[key];
            let element = parent.querySelector(`input[name='${key}']`) as HTMLInputElement;
            if (element) {
                element.value = value;
                element.addEventListener("change", (event) => {
                    object[key] = element.value;
                })
            }
        })
    }

}