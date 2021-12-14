import { States } from './constants/states';
import { ApiData, data } from './data';
import { User } from './types/User';

// strings
let myString = 'sting';
// myString = 123
// myString = 'Aharon'

let myNumber = 123;
// myNumber = 123
// myNumber = 'Aharon'

const constantNumber = 10;

// type assignment and unions
let myName: 'Aharon' | 'Kolatch';
// myName = "bob"
// myName = ''

// arrays
const myArray = [myString, 5];
myArray.push(myNumber);

const array: (number | string)[] = [];

// objects
const myOject = {
  string: myString,
  number: myNumber,
  myNam: 'Aharon',
};
//  myOject.myName = myArray

const obj: { [key: string]: string } = {};
obj.a = 'a';

// functions
function timesX(num: number, x: number): number {
  return num * x;
}

const badBase = '12';
const num = 2;
// timesX(num, badBase)
//test timesX

// Enum the ultimate constant
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
// res.status(Status.OK).json()

// Status.Accepted = 111
// Status.Sad = 22

//types and interfaces
type ActionType = 'RESET' | 'ADD_BY' | 'SUB_BY';

interface Action {
  type: ActionType;
  payload?: number;
}

const reset = (): Action => {
  return { type: 'RESET' };
};

const addBy = (payload: number): Action => {
  return { type: 'ADD_BY', payload };
};

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'ADD_BY':
      return state + action.payload!;
    default:
      return state;
  }
};

// practical TS and why we use it

const userData = data;

function format(apiData: ApiData): User {
  const user = JSON.parse(JSON.stringify(apiData));
  const homeState = user.address.home.state as keyof typeof States;
  const homeZipCode = user.address.home.ZipCode;

  user.address.home.state = States[homeState];
  user.address.home.ZipCode = parseInt(homeZipCode);
  if (user.address.work?.state) {
    const workState = user.address.work.state as keyof typeof States;
    const workZipCode = user.address.work.ZipCode;
    user.address.work.state = States[workState];
    user.address.work.ZipCode = parseInt(workZipCode);
  }
  return user as User;
}

console.log(format(userData));
