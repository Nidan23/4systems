import {Component} from '@angular/core';
import {Page} from "../../utils/interface/page";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-add-users-page',
  templateUrl: './add-users-page.component.html',
  styleUrls: ['./add-users-page.component.scss']
})
export class AddUsersPageComponent implements Page {

  private fileReader: FileReader = new FileReader()

  constructor(private router: Router, private userService: UserService) {}

  headerText: string = 'Here you can upload your users 2 DB'
  acceptableFileType: string = '.json'

  changeAcceptableFileType(fileType: string) {
    this.acceptableFileType = fileType
  }

  addUsers(inputElement: HTMLInputElement) {
    const file = inputElement.files?.[0]

    if(file)
      this.extractUsersFromFile(file)
  }

  extractUsersFromFile(file: File) {
    const fileNameArray = file.name.split('.')
    const fileName = fileNameArray[fileNameArray.length - 1]

    this.fileReader.onload = () => {
      this.userService.addUsersToDb(this.fileReader.result, fileName)
        .subscribe(data => {
          this.router.navigateByUrl('/view-users')
        })
    }
    this.fileReader.readAsText(file);
  }
}
