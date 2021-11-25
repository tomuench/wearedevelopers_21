export class Person {
    firstname: string | undefined;
    lastname: string | undefined;

    constructor(args : any = {}){
        this.firstname = args.firstname;
        this.lastname = args.lastname;
    }
}