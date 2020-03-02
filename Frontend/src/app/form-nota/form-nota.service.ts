import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormNotaService {
  private readonly API = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }


  create(notas){
    return this.http.post(this.API+'notas',notas).subscribe(console.log);
  }
}
