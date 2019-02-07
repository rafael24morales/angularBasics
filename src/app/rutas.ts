import { RouterModule, Routes } from '@angular/router';
import { CuerpounoComponent } from './componentes/cuerpos/cuerpouno/cuerpouno.component';
import { CuerpodosComponent } from './componentes/cuerpos/cuerpodos/cuerpodos.component';

  const rutas:Routes = [
  {path:'',component:CuerpounoComponent},
  {path:'dos',component:CuerpodosComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
  ]

export const Rutas = RouterModule.forRoot(rutas);
