import { Component, OnInit } from '@angular/core';
import { VuelosService } from './../../../servicios/vuelos.service';
import { Vuelo } from './../../../beans/vuelo';

@Component({
  selector: 'app-cuerpouno',
  templateUrl: './cuerpouno.component.html',
  styleUrls: ['./cuerpouno.component.css']
})
export class CuerpounoComponent implements OnInit {
  private vuelosData:any;


  constructor(private vuelosService: VuelosService) { }

  ngOnInit() {
    this.vuelosService.getVuelos().subscribe(data => {
      this.vuelosData = data;
      console.log(this.vuelosData);
    })
  }
  private vuelo:Vuelo


  public crearVuelo(ElAeropuerto,ElAerolinea,ElRuta){
    this.vuelo= new Vuelo(ElAeropuerto,ElAerolinea,ElRuta);
    console.log(this.vuelo);
    this.vuelosService.postVuelos(this.vuelo);
  }

}
