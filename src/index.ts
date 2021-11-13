import {List} from './list/list';

export * from './list/list';


let l = document.createElement("my-list") as List;

document.body.append(l);

var objects = [
    {
        firstname: "Peter",
        lastname: "Meyer"
    },
    {
        firstname: "Petra",
        lastname: "Meyer"
    }
]

l.objects = objects;