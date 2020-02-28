import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.css']
})
export class BateriaComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  openModal(modalBateria: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalBateria);
  }

  ngOnInit() {
  }

}
