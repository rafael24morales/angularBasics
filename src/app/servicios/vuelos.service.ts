import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private url = 'http://localhost:8084/vuelos';

  constructor(private http: HttpClient) { }


  getVuelos(){
    return this.http.get<any>(this.url);
  }

}
