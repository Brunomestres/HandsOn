import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OndaService {

  private readonly API = 'http://localhost:8000/';
  constructor( private http: HttpClient) { }

  listar(){
    return this.http.get(this.API+'surfista');
  }

  create(surfista){
    return this.http.post(this.API,surfista).subscribe(console.log);
  }
  delete(id){
    return this.http.delete(this.API+'/'+id).subscribe(console.log);
  }
}
