import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BateriaService } from './bateria.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.css']
})
export class BateriaComponent implements OnInit {
  modalRef: BsModalRef;
  
  surfistas: any = [];
  baterias: any = [];
  
  constructor(private modalService: BsModalService, private service: BateriaService, private fb:FormBuilder, private location: Location) { }
  openModal(modalBateria: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalBateria);

    
  }
  form: FormGroup;
  ngOnInit() {
    this.service.listar().subscribe(dados => this.baterias = dados);
    this.service.listarSurfistas().subscribe(dados => this.surfistas = dados);

    this.form = this.fb.group({
      surfista1:[null],
      surfista2:[null]
    });
  }
  
  onSubmit()
  {
    console.log(this.form.value)
    this.service.create(this.form.value);
    this.modalRef.hide();
  }


}
