export const CHECK_PRO_USER_EXIST = ' [ProUser] Check if the pro user exist';
export const CHECK_USER_EXIST = '[User] Check if user exist';
export class CheckProUser
{
  readonly type = CHECK_PRO_USER_EXIST;

  constructor(userName: string, password: number) {
  }
}

export class CheckUser
{
  readonly type = CHECK_USER_EXIST;

  constructor(userName: string, password: number) {
  }
}
