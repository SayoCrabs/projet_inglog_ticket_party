import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Field} from "../../../utils/models/field";
import {httpUrl} from "../../../utils/constant/constant";

@Injectable({ providedIn: 'root' })
export class FormService {

  url = httpUrl + 'entity/';
  constructor(private http: HttpClient ) {
  }

  /**
   * Ici on recupere les champs du formulaire passez en parametre.
   * @param formToLoad
   */
  public loadForm(formToLoad: string): Observable<Field[]>
  {
    return this.http.get<Field[]>(this.url + formToLoad);
  }
}
