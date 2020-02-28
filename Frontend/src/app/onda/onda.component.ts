import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onda',
  templateUrl: './onda.component.html',
  styleUrls: ['./onda.component.css']
})
export class OndaComponent implements OnInit {
  public userId;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit() {
  }

}
