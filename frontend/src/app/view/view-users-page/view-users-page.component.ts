import {Component, OnInit} from '@angular/core';
import {Page} from "../../utils/interface/page";
import {UserModel} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {GetUsersRequestParams} from "../../utils/interface/get-users-request-params";
import {SortColumnName} from "../../utils/type/sorting";
import {Md5} from "ts-md5";

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.scss']
})
export class ViewUsersPageComponent implements Page, OnInit {

  headerText: string = 'Here you can find & search thru users in DB'
  md5 = new Md5()
  numberOfRecordsPerPage: number = 100
  numberOfPages!: number
  users!: UserModel[]
  pages!: any[]
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
        else if (data % this.numberOfRecordsPerPage !== 0)
          this.numberOfPages = Math.floor(pageCount) + 1
        else
          this.numberOfPages = pageCount

        this.pages = Array(this.numberOfPages)
      })
  }

  changePage(pageNumber: string) {
    const chosenPage = parseInt(pageNumber)
    this.requestParams.offset = (chosenPage - 1) * this.numberOfRecordsPerPage

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

  transformSurname(name: string, surname: string) {
    return `${surname}_${this.md5.appendStr(name).end()}`
  }
}
