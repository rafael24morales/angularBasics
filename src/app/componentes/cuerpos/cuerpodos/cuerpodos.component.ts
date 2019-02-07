import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpodos',
  templateUrl: './cuerpodos.component.html',
  styleUrls: ['./cuerpodos.component.css']
})
export class CuerpodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.arreglodecosas = [
      {cosa:"silla",valor:300},
      {cosa:"tapete",valor:200},
      {cosa:"mesa",valor:400},
      {cosa:"refri",valor:3000},
      {cosa:"trastes",valor:20},
      {cosa:"sarten",valor:300},
      {cosa:"vaso",valor:20}
    ]
  }

  private username:string = "Rafa";

  private UsuarioActual:Usuario =
      {
        username:"Mario",
        email:"mario@gen.com"
      }

  public getEmail(){
    return this.UsuarioActual.email;
  }

  //Para manejo de property binding
  private miAiDi:string="Otracosa!";
  private ocultar:boolean=true;

  //event binding
  public tuglea(){
    this.ocultar = !this.ocultar
    this.miAiDi = "OMG!"
    this.isVisible = !this.isVisible;
  }

  //para las directivas ngIf
  public isVisible:boolean=false;
  public A:number='A';
  public B:char='B';
  public esVerdadero(){
    return true;
  }

  //para la directiva ngFor
  private arreglodecosas:any[];


}
interface Usuario{
  username:string,
  email:string
}
