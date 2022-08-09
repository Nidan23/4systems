import {Component, OnInit} from '@angular/core';
import {Page} from "../../utils/interface/page";
import {UserModel} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {GetUsersRequestParams} from "../../utils/interface/get-users-request-params";
import {SortColumnName} from "../../utils/type/sorting";

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.scss']
})
export class ViewUsersPageComponent implements Page, OnInit {

  headerText: string = 'Here you can find & search thru users in DB'
  numberOfRecordsPerPage: number = 100
  numberOfPages!: number
  users!: UserModel[]
  requestParams: GetUsersRequestParams = {
    offset: 0,
    limit: this.numberOfRecordsPerPage,
    sortDirection: 'ASC',
    sortColumnName: 'id',
  }
  tableHeaders: SortColumnName[] = ['id', 'name', 'surname', 'login']

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers()
    this.getNumberOfPages()
  }

  getUsers() {
    const { offset, limit, sortDirection, sortColumnName } = this.requestParams
    this.userService.getAllUsers(offset, limit, sortDirection, sortColumnName)
      .subscribe(data => {
        this.users = data
      })
  }

  getUserByPhrase(phrase: string) {
    if(!phrase)
      this.getUsers()
    else
      this.userService.findUserByPhrase(phrase)
        .subscribe(data => {
          this.users = data.filter((value, index, self) =>
              index === self.findIndex((t) => (
                t.id === value.id && t.name === value.name && t.surname === value.surname && t.login === value.login
              ))
          )
        })
  }

  getNumberOfPages() {
    this.userService.getNumberOfRecords()
      .subscribe(data => {
        const pageCount = data / this.numberOfRecordsPerPage
        if (pageCount < 0)
          this.numberOfPages = 1
        else
          this.numberOfPages = pageCount
      })
  }

  changePage(pageNumber: number) {
    this.requestParams.offset = (pageNumber - 1) * this.numberOfRecordsPerPage
    this.requestParams.limit = pageNumber * this.numberOfRecordsPerPage

    this.getUsers()
  }

  changeSorting(columnName: SortColumnName) {
    this.requestParams.sortColumnName = columnName

    if (this.requestParams.sortDirection === 'DESC')
      this.requestParams.sortDirection = 'ASC'
    else
      this.requestParams.sortDirection = 'DESC'

    this.getUsers()
  }
}
