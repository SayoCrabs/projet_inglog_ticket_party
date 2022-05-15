import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpUrl} from "../../../utils/constant";

@Injectable({ providedIn: 'root' })
export class ConnectionService {

  url = httpUrl;
  constructor(private http: HttpClient ) {
  }

  public getUserIfExist(name: string, password: string): Observable<Boolean>
  {
    return this.http.get<Boolean>(this.url + name + password);
  }

  public getProUserIfExist(name: string, password: string): Observable<Boolean>
  {
    return this.http.get<Boolean>(this.url + name + password);
  }
}
