import { address } from "../Addresses/Address";

export class person {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    addressId!: number
    address!: address;
}