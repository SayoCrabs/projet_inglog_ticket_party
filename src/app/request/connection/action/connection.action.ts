import {User} from "../../../utils/models/user";

export const CHECK_USER_EXIST = '[User] Check user exist';
export const LOAD_USER = '[User] Load user';
export const CREATE_USER = '[CreateUser] Create user';
export const UPDATE_USER = '[User] Update user';
export const DELETE_USER = '[User] Delete user';

export class CheckUser
{
  static readonly type = CHECK_USER_EXIST;

  constructor(public userName: string, public password: string) {
  }
}

export class LoadUser
{
  static readonly type = LOAD_USER;

  constructor(public id: string) {
  }
}

export class CreateUser
{
  static readonly type = CREATE_USER;

  constructor(public req: User) {
  }
}

export class UpdateUser
{
  static readonly type = UPDATE_USER;

  constructor(public id: string, public changes: Partial<User>)
  {
  }
}

export class DeleteUser
{
  static readonly type = DELETE_USER;

  constructor(public userId: string)
  {
  }
}
