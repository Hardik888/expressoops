import { Iperson } from "./interfaces/person.interface";
import { faker } from '@faker-js/faker'
import { address } from './address'
export class User {

    public static getRandomUser(): Iperson {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: 'example@gmail.com',
            phoneNumber: faker.phone.number(),
            address: address.getRandomAddress()
        }
    }
}