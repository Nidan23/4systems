import {Component} from '@angular/core';
import {Page} from "../../utils/interface/page";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements Page {

  headerText: String = 'This is home page, use nav bar 2 navigate thru app'

}
