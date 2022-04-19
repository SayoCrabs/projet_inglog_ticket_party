import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProUserConnectionService {

  url = 'assets/';

  constructor(private http: HttpClient) {
  }

  public getUserIfExist(id: string, password: string): Observable<Boolean>
  {
    return this.http.get<Boolean>(this.url + id + password);
  }
}
