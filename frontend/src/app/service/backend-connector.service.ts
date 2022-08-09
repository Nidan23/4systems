import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor() { }

  sendUsersToServer(payload: any, fileType: string): Observable<boolean> {
    return new Observable<boolean>()
  }

  getUsersFromServer(offset: number, limit: number, sortingType: Sorting, sortColumnName: SortColumnName): Observable<UserModel[]> {
    return new Observable<UserModel[]>()
  }
}
