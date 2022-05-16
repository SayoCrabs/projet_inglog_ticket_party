import {Compagny} from "./Compagny";
import {SexeEnum} from "./SexeEnum";
import {Invoice} from "./Invoice";
import {UserRole} from "./UserRole";

export class User
{
  id: string = '';

  name: string | undefined;

  firstname: string | undefined;

  email: string | undefined ;

  password: string | undefined;

  age: number = 0;

  dateOfBirth: Date;

  address: string | undefined;

  compagny: Compagny | undefined;

  sexe: SexeEnum | undefined;

  invoice: Invoice[] | undefined;

  role: UserRole | undefined;

  constructor(user: User) {
    this.name = user.name;
    this.firstname = user.firstname;
    this.email = user.email;
    this.password = user.password;
    this.age = user.age;
    this.dateOfBirth = user.dateOfBirth;
    this.address = user.address;
    this.compagny = user.compagny;
    this.sexe = user.sexe;
  }
}
