import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8000/api/registro';

  constructor(private http: HttpClient) { }
  getRegistro() {
  this.http.get('http://localhost:8000/api/registro').subscribe((res) => {
    console.log('risposta', res); }, (x) => (console.log('Errore di comunicazione')));
  }
}
