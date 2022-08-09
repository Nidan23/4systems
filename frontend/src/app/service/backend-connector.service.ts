import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../model/user.model";
import {SortColumnName, Sorting} from "../utils/type/sorting";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor(private http: HttpClient) { }

  sendUsersToServer(payload: any, fileType: string): Observable<UserModel[]> {
    let headers = undefined
    if (fileType === 'json') {
      payload = JSON.stringify(JSON.parse(payload))
      headers = this.setHeader('Content-Type', 'application/json')
    } else {
      headers = this.setHeader('Content-Type', 'application/xml')
    }
    return this.http.post<UserModel[]>('http://localhost:8080/user/add', payload, {headers})
  }

  getUsersFromServer(offset: number, limit: number, sortingType: Sorting, sortColumnName: SortColumnName): Observable<UserModel[]> {
    return new Observable<UserModel[]>()
  }

  private setHeader(name: string, value: string) {
    return new HttpHeaders({
      [name]: value
    })
  }
}
