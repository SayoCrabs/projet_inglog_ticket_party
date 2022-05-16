import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpUrl} from "../../../utils/constant/constant";
import {User} from "../../../utils/models/user";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ConnectionService {

  url = httpUrl + 'users';
  urlAuth = httpUrl + 'users/authenticate?email=';
  constructor(private http: HttpClient ) {
  }

  public getUserByEmailAndPassword(email: string, password: string): Observable<User>
  {
    return this.http.get<User>(this.urlAuth + email+ '&password=' + password).pipe(
      map((u: User) => Object.assign(new User(u), u)));
  }

  public loadUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.url).pipe(
      map((user: User[]) => user.map(u => Object.assign(new User(u), u)))
    );
  }

  public createUser(user: User): Observable<User>
  {
    return this.http.post<User>(this.url, user).pipe(
      map((u: User) => Object.assign(new User(u), u)));
  }

  public updateUser(userId: string, user: User): Observable<User>
  {
    return this.http.put<User>(this.url + '/' + userId, user).pipe(
      map((upd: User) => Object.assign(new User(upd), upd))
    );
  }

  public deleteUser(id: string)
  {
    return this.http.delete(this.url + '/' + id);
  }
}
