import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormNotaService } from './form-nota.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-form-nota',
  templateUrl: './form-nota.component.html',
  styleUrls: ['./form-nota.component.css']
})
export class FormNotaComponent implements OnInit {
  public userId;
  constructor(private fb:FormBuilder,private route: ActivatedRoute, private service:FormNotaService,private location: Location) {
    this.route.params.subscribe(params => this.userId = params['id']);
   }
  form: FormGroup;
  surfista;

  ngOnInit() {
    this.service.listar(this.userId).subscribe(dados => this.surfista = dados);
    this.form = this.fb.group({
      nota1:[null],
      nota2:[null],
      nota3:[null],
      onda:[this.userId]
    });
  }


  onSubmit(){
    console.log(this.form.value);
    this.service.create(this.form.value);
    this.location.back();
  }
}
