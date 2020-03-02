import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListOndaService {
  private readonly API = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(this.API+'/ondas');
  }

  
}
