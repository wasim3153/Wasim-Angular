export class employeesmodel{
    name:string;
    eid:string;
    role:string;
    togglerole:boolean;
    constructor(name:string,eid:string,role:string,togglerole:boolean){
        this.name=name;
        this.eid=eid;
        this.role=role;
        this.togglerole=this.togglerole
    }

}