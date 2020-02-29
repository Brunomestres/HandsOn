import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BateriaService } from './bateria.service';
@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.css']
})
export class BateriaComponent implements OnInit {
  modalRef: BsModalRef;
  
  surfistas: any = [];

  constructor(private modalService: BsModalService, private service: BateriaService) { }
  openModal(modalBateria: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalBateria);
  }

  ngOnInit() {
    this.service.listar().subscribe(dados => this.surfistas = dados);
  }

}
