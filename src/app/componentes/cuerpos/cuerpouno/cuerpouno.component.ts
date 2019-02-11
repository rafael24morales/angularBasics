import { Component, OnInit } from '@angular/core';
import { VuelosService } from './../../../servicios/vuelos.service';

@Component({
  selector: 'app-cuerpouno',
  templateUrl: './cuerpouno.component.html',
  styleUrls: ['./cuerpouno.component.css']
})
export class CuerpounoComponent implements OnInit {
  private vuelosData:any;


  constructor(private vuelos: VuelosService) { }

  ngOnInit() {
    this.vuelos.getVuelos().subscribe(data => {
      this.vuelosData = data;
      console.log(this.vuelosData);
    })

  }

}
