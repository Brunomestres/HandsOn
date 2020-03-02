import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-nota',
  templateUrl: './form-nota.component.html',
  styleUrls: ['./form-nota.component.css']
})
export class FormNotaComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      nota1:[null],
      nota2:[null],
      nota3:[null]
    });
  }


  onSubmit(){
    console.log(this.form.value);
  }
}
