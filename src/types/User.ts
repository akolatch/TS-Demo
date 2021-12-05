import { CompanyAddress, Address } from "./Address";

export interface User {
    id: number;
    firstName: string;
    middle?: string;
    lastName: string;
    address: {
        home: Address;
        work?: CompanyAddress;
    };
    contactInfo: {
        phoneNumber?: {
            home?: string;
            cell?: string;
            work?: string;
        };
        email: {
            personal: string;
            work?: string;
        };
        linkedIn?: string;
    };
}


