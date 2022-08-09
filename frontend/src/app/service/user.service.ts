import {Injectable} from '@angular/core';
import {BackendConnectorService} from "./backend-connector.service";
import {Observable} from "rxjs";
import {UserModel} from "../model/user.model";
import {SortColumnName, Sorting} from "../utils/type/sorting";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendConnectorService: BackendConnectorService) { }

  getAllUsers(offset: number, limit: number, sortDirection: Sorting, sortColumnName: SortColumnName): Observable<UserModel[]> {
    return this.backendConnectorService.getUsersFromServer(offset, limit, sortDirection, sortColumnName)
  }

  addUsersToDb(users: any, fileType: string): Observable<boolean> {
    return this.backendConnectorService.sendUsersToServer(users, fileType)
  }
}
