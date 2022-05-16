import {Compagny} from "./Compagny";
import {SexeEnum} from "./SexeEnum";
import {Invoice} from "./Invoice";
import {UserRole} from "./UserRole";

export class User
{
  id: string = '0';

  name: string | undefined;

  firstname: string | undefined;

  email: string | undefined ;

  password: string | undefined;

  age: number = 0;

  dateOfbirth: Date;

  address: string | undefined;

  sexe: SexeEnum | undefined;

  invoice: Invoice[] | undefined;

  role: UserRole | undefined;

  constructor(user: User) {
    console.log(user);
    this.id = user.id;
    this.name = user.name;
    this.firstname = user.firstname;
    this.email = user.email;
    this.password = user.password;
    this.age = user.age;
    this.dateOfbirth = user.dateOfbirth;
    this.address = user.address;
    this.sexe = user.sexe;
  }
}
