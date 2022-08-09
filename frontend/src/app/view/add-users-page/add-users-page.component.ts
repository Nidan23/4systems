import {Component} from '@angular/core';
import {Page} from "../../utils/interface/page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-users-page',
  templateUrl: './add-users-page.component.html',
  styleUrls: ['./add-users-page.component.scss']
})
export class AddUsersPageComponent implements Page {

  constructor(private router: Router) {}

  headerText: string = 'Here you can upload your users 2 DB'
  acceptableFileType: string = '.json'

  changeAcceptableFileType(fileType: string) {
    this.acceptableFileType = fileType
  }

  addUsers(event: any) {
    this.router.navigateByUrl('/view-users')
  }
}
