import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private url = '/vuelos';
  private cabecera;


  constructor(private http: HttpClient) {
    this.cabecera = new HttpHeaders().set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true');}


  getVuelos(){
    return this.http.get<any>(this.url);
  }

  postVuelos(vuelo){
  return this.http.post<any>( this.url, JSON.stringify(vuelo) , {headers:this.cabecera}).subscribe(
      (data:any) => {
              console.log(data);
          },
          error => {
              console.log(error);
          }
        );
  }

}
