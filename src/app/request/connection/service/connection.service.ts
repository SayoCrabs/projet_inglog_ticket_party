import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpUrl} from "../../../utils/constant/constant";
import {User} from "../../../utils/models/user";

@Injectable({ providedIn: 'root' })
export class ConnectionService {

  url = httpUrl + 'User';
  constructor(private http: HttpClient ) {
  }

  public getUserByEmailAndPassword(name: string, password: string): Observable<User>
  {
    return this.http.get<User>(this.url + name + password);
  }

  public loadUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.url);
  }

  public deleteUser(id: string)
  {
    return this.http.delete(this.url + id);
  }

  public createUser(user: User): Observable<User>
  {
    return this.http.post<User>(this.url, user);
  }

  public updateUser(userId: string, user: Partial<User>): Observable<User>
  {
    return this.http.put<User>(this.url + userId, user);
  }
}
