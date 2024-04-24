import { Request } from "express";

export class Auth {
   
    private req: any;
    private readonly secret = "harddick"

    constructor(req: Request) {
        this.req = req;
        }
    
    validate(): boolean {
    
        if (this.req.headers.value === this.secret) {
            console.log("for true",this.req.headers.value)
            return true;
        }
        console.log("for false",this.req.headers.value)
        return false;
    }
} 