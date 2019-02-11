import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/header/header.component';
import { CuerpounoComponent } from './componentes/cuerpos/cuerpouno/cuerpouno.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CuerpodosComponent } from './componentes/cuerpos/cuerpodos/cuerpodos.component';

import { HttpClientModule } from '@angular/common/http';

import { VuelosService } from './servicios/vuelos.service';

import { Rutas } from './rutas';

/*necesito importar ruta y modulo
import { RouterModule, Routes } from '@angular/router';
const rutas:Routes = [
{path:'uno',component:CuerpounoComponent},
{path:'dos',component:CuerpodosComponent}
]*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpounoComponent,
    FooterComponent,
    CuerpodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Rutas,
    HttpClientModule
    //debería agregar RouterModule.forRoot(rutas)
  ],
  providers: [VuelosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
