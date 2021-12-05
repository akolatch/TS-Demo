export const data = {
    id: 123456789,
    firstName: "Aaron",
    lastName: "Kolatch",
    address: {
        home: {
            street1: "123 15th St",
            apt: "1",
            city: "Brooklyn",
            state: "NY",
            ZipCode: "11215",
        },
        work: {
            companyName: "IBM",
            street1: "IBM North America",
            street2: "590 Madison Ave",
            city: "New York",
            state: "NY",
            ZipCode: "10022",
        },
    },
    contactInfo: {
        phoneNumber: {
            cell: "202-202-2020",
        },
        email: {
            personal: "aharon.kolatch@gmail.com",
        },
        linkedIn: 'linkedin.com/in/aharon-kolatch'
    },
};

export type ApiData = typeof data
