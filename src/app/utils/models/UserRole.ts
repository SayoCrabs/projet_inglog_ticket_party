import {Compagny} from "./Compagny";
import {User} from "./user";

export class UserRole
{
  id: number | undefined;

  role: RoleEnum | undefined;

  compagny: Compagny | undefined;

  user: User | undefined;
}
