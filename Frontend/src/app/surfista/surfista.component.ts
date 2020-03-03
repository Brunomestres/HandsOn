import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SurfistaService } from './surfista.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-surfista',
  templateUrl: './surfista.component.html'
})
export class SurfistaComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private service: SurfistaService, private fb:FormBuilder) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  form: FormGroup;
  surfistas: any = [];
  ngOnInit() {
    this.service.listar().subscribe(dados => this.surfistas = dados);

    this.form = this.fb.group({
      nome:[null],
      pais:[null]
    });
  }
  
  onSubmit()
  {
    this.service.create(this.form.value);
    this.modalRef.hide();

  }

  onDelete(id){
    this.service.delete(id);
  }

}
