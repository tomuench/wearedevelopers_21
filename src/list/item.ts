import { Person } from "../models/person";
import { BasicComponent } from "./basicComponent";


export class BasicItem extends BasicComponent {

    private _object: Person;

    constructor(object: Person) {
        super();
        this._object = object;
    }

    /**
     * @property {Person} object
     */
    protected set object(v: Person){
        this._object = v;
    }

    public get object() {
        return this._object;
    }

}