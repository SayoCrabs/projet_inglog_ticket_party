export class User
{
  id: number | undefined;

  name: string | undefined;

  firstname: string | undefined;

  email: string | undefined ;

  password: string | undefined;

  age: number | undefined;

  dateOfBirth: Date | undefined;

  constructor(user: User) {
    this.name = user.name;
    this.firstname = user.firstname;
    this.email = user.email;
    this.password = user.password;
    this.age = user.age;
    this.dateOfBirth = user.dateOfBirth;
  }
}
