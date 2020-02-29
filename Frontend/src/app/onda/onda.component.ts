import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OndaService } from './onda.service';
@Component({
  selector: 'app-onda',
  templateUrl: './onda.component.html',
  styleUrls: ['./onda.component.css']
})
export class OndaComponent implements OnInit {
  public userId;
  constructor(private route: ActivatedRoute, private service: OndaService) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  surfistas: any = [];
  ngOnInit() {

    this.service.listar().subscribe(dados => this.surfistas = dados);
  }

}
