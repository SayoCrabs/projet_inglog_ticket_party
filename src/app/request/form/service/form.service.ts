import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Field} from "../../../utils/models/field";

@Injectable({ providedIn: 'root' })
export class FormService {

  url = 'assets/form.json';

  constructor(private http: HttpClient) {
  }
  public loadForm(): Observable<Field[]>
  {
    return this.http.get<Field[]>(this.url);
  }
}
