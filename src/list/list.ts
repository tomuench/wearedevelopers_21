import { ListItem } from "./item";


export class List extends HTMLElement{

    private _objects : any[] = [];

    public get objects() : any[] {
        return this._objects;
    }

    public set objects(v : any[]) {
        this._objects = v;

        this._objects.forEach((object) => this.append(new ListItem(object)));
    }

}


customElements.define("my-list", List)