import { Component, OnInit } from '@angular/core';
import { ListOndaService } from './list-onda.service';
@Component({
  selector: 'app-list-onda',
  templateUrl: './list-onda.component.html',
  styleUrls: ['./list-onda.component.css']
})
export class ListOndaComponent implements OnInit {

  constructor(private service: ListOndaService) { }


  ondas: any = [];
  ngOnInit() {
    this.service.listar().subscribe(dados => this.ondas = dados)
  }

}
