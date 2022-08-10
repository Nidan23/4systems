import {Component, OnInit} from '@angular/core';
import {Page} from "../../utils/interface/page";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Modal} from "../../utils/interface/modal";

@Component({
  selector: 'app-add-users-page',
  templateUrl: './add-users-page.component.html',
  styleUrls: ['./add-users-page.component.scss']
})
export class AddUsersPageComponent implements Page, OnInit {

  private fileReader: FileReader = new FileReader()

  constructor(private router: Router, private userService: UserService) {}

  headerText: string = 'Here you can upload your users 2 DB'
  acceptableFileType: string = '.json'
  numberOfRecords = {
    previous: 0,
    current: 0,
    difference: 0
  }
  modal: Modal = {
    isVisible: true,
    modalText: '',
    modalTitle: 'Added users',
    modalButtonText: 'View users',
    modalButtonRedirectTarget: '/view-users'
  }

  ngOnInit() {
    this.getNumberOfRecordsForModal()
  }

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
          if (data) {
            this.getNumberOfRecordsForModal(true)
          }
          else
            this.headerText = 'Something went wrong'
        })
    }
    this.fileReader.readAsText(file);
  }

  getNumberOfRecordsForModal(showModal: boolean = false) {
    this.userService.getNumberOfRecords()
      .subscribe(data => {
        this.numberOfRecords.previous = this.numberOfRecords.current
        this.numberOfRecords.current = data
        this.numberOfRecords.difference = this.numberOfRecords.current - this.numberOfRecords.previous

        this.modal.modalText = `You just added ${this.numberOfRecords.difference} users 2 DB`
        this.modal.isVisible = showModal
      })
  }
}
