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

  sendUsersToServer(payload: any, fileType: string): Observable<boolean> {
    let headers = undefined
    if (fileType === 'json') {
      payload = JSON.stringify(JSON.parse(payload))
      headers = this.setHeader('Content-Type', 'application/json')
    } else {
      headers = this.setHeader('Content-Type', 'application/xml')
    }
    return this.http.post<boolean>('http://localhost:8080/user/add', payload, {headers})
  }

  getUsersFromServer(offset: number, limit: number, sortingType: Sorting, sortColumnName: SortColumnName): Observable<UserModel[]> {
    const payload = {
      offset,
      limit,
      direction: sortingType,
      sortFieldName: sortColumnName
    }

    return this.http.post<UserModel[]>('http://localhost:8080/user/get', payload)
  }

  searchForUser(searchValue: string): Observable<UserModel[]> {
    const payload = {
      searchValue
    }

    return this.http.post<UserModel[]>('http://localhost:8080/user/search', payload)
  }

  getNumberOfRecords(): Observable<number> {
    return this.http.get<number>('localhost:8080/user/pages')
  }

  private setHeader(name: string, value: string) {
    return new HttpHeaders({
      [name]: value
    })
  }
}
