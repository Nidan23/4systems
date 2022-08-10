import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Modal} from "../../utils/interface/modal";

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements Modal{

  constructor(private router: Router) {
  }

  @Input()
  isVisible!: boolean

  @Input()
  modalTitle!: string

  @Input()
  modalText!: string

  @Input()
  modalButtonText!: string

  @Input()
  modalButtonRedirectTarget!: string

  closeModal() {
    this.isVisible = !this.isVisible
  }

  redirect() {
    this.router.navigateByUrl(this.modalButtonRedirectTarget)
  }

}
