import { IAddress } from "./interfaces/address.interface"
import {faker} from '@faker-js/faker'

export class address {

    public static getRandomAddress(): IAddress {
        return {
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            city: faker.location.city(),
            state: faker.location.city(),
            postalcode: faker.location.city(),
            country:'usa'
        }
    }
}