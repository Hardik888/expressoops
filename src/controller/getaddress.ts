import { Request } from "express";
import { Auth } from "../auth";
import { Iperson } from "../interfaces/person.interface";
import { User } from "../user";
export class GetInfo {
    private headers: any;
    private userdetails: Iperson;

    constructor(req: Request) {
        this.headers = new Auth(req),
        this.userdetails =  User.getRandomUser();    
    }

    public async getHeader() {

        const val = this.headers.validate()
        if (!val) {
            return null;
        }
        console.log(this.userdetails)
        return this.userdetails;

    }

}
