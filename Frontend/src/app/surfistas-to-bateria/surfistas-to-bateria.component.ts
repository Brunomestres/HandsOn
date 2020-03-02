import { Component, OnInit } from '@angular/core';
import { SurfistasToBateriaService } from './surfistas-to-bateria.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-surfistas-to-bateria',
  templateUrl: './surfistas-to-bateria.component.html',
  styleUrls: ['./surfistas-to-bateria.component.css']
})
export class SurfistasToBateriaComponent implements OnInit {
  public userId;
  constructor( private service: SurfistasToBateriaService,private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  surfistas: any = [];
  count = 1;
  ngOnInit() {
    this.service.listar(this.userId).subscribe(dados => this.surfistas = dados);
  }

}
