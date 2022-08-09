import {Component} from '@angular/core';
import {Page} from "../../utils/interface/page";

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.scss']
})
export class ViewUsersPageComponent implements Page {

  headerText: String = ''

}
