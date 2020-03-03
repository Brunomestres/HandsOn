import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OndaService } from './onda.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-onda',
  templateUrl: './onda.component.html',
  styleUrls: ['./onda.component.css']
})
export class OndaComponent implements OnInit {
  public userId;
  constructor(private route: ActivatedRoute, private service: OndaService,private fb:FormBuilder) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }
  form: FormGroup;
  surfistas: any = [];
  
  ngOnInit() {

    this.service.listar(this.userId).subscribe(dados => this.surfistas = dados);

    this.form = this.fb.group({
      bateria:[this.userId],
      surfista:[null],
    });
  }
  onSubmit(){
    console.log(this.form.value);
    this.service.create(this.form.value);
  }
}
