import { States } from "./constants/states";
import { ApiData, data } from "./data";
import { User } from "./types/User";

let myString = "sting";
// myString = 123
// myString = 'Aharon'

let myName: "Aharon" | "Kolatch";

let myNumber = 123;
// myString = 123
// myString = 'Aharon'

const myArray = [myString];
// myString.push(myNumber)

const myOject = {
    string: myString,
    number: myNumber,
    myName: "Aharon",
};
//  myOject.array = myArray

// functions
function timesX(base: number, x: number): number {
    return base * x;
}

enum me {
    FirstName = "Aharon",
    LastName = "Kolatch",
    Age = 34,
    YearsCoding = 2,
}

// me.yearsCoding = 3

function percentageOfLifeCoding(age: number, yearsCoding: number): string {
    const percentCoding = ((yearsCoding / age) * 10).toFixed(2);
    return `I have been coding for ${yearsCoding} years or ${percentCoding} percent of my life`;
}

const percentCodingMsg = percentageOfLifeCoding(me.Age, me.YearsCoding);
console.log(percentCodingMsg);

// practical TS and why we use it

enum Status {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    Error = 500,
}

// res.status(Status.OK)
const userData = data 

function formatUsedData (apiData: ApiData): User {
    const user = {...apiData} as any
    const homeState = user.address.home.state as keyof typeof States
    const homeZipCode = user.address.home.ZipCode

    user.address.home.state = States[homeState]
    user.address.home.ZipCode = parseInt(homeZipCode)
    if (user.address.work?.state) {
        const workState = user.address.work.state as keyof typeof States
        const workZipCode = user.address.work.ZipCode
        user.address.work.state = States[workState]
        user.address.work.ZipCode = parseInt(workZipCode)
    }
    return user as User
}

const user = formatUsedData(userData)

console.log(userData)
