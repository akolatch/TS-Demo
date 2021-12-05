import { States } from "../constants/states";

export interface Address {
    street1: string;
    street2?: string;
    apt?: string;
    city: string;
    state: typeof States;
    ZipCode: number;
}

export interface CompanyAddress extends Address {
    companyName: string;
}
