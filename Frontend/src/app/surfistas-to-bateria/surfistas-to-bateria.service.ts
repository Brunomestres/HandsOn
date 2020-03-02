import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurfistasToBateriaService {
  private readonly API = 'http://localhost:8000/';
  
  constructor(private http: HttpClient) { }

  listar(id){
    return this.http.get(this.API+'baterias/'+id);
  }
}
