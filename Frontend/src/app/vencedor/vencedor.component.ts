import { Component, OnInit } from '@angular/core';
import { VencedorService } from './vencedor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vencedor',
  templateUrl: './vencedor.component.html',
  styleUrls: ['./vencedor.component.css']
})
export class VencedorComponent implements OnInit {

  constructor(private service: VencedorService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params['id']);
   }
  public userId;
  public surfistas;
  ngOnInit() {
    this.service.listar(this.userId).subscribe(dados => this.surfistas = dados);
  }

}
