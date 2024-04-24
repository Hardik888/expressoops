import { IAddress } from "./address.interface";

export interface Iperson {
    firstName:string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: IAddress
}