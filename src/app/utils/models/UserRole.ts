import {Compagny} from "./Compagny";
import {User} from "./user";
import {RoleEnum} from "./RoleEnum";

export class UserRole
{
  id: number | undefined;

  role: RoleEnum | undefined;

  compagny: Compagny | undefined;

  user: User | undefined;
}
