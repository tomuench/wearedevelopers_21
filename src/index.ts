import {List} from './list/list';
import { Person } from './models/person';

export * from './list/list';


let l = document.createElement("my-list") as List;

document.body.append(l);

var objects = [
    new Person({
        firstname: "Peter",
        lastname: "Meyer"
    }),
    new Person({
        firstname: "Petra",
        lastname: "Meyer"
    })
]

l.objects = objects;