import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SurfistaService {

  private readonly API = 'http://localhost:8000/surfista';
  constructor( private http: HttpClient) { }

  listar(){
    return this.http.get(this.API);
  }

  create(surfista){
    return this.http.post(this.API,surfista).subscribe(console.log);
  }
  delete(id){
    return this.http.delete(this.API+'/'+id).subscribe(console.log);
  }
}
