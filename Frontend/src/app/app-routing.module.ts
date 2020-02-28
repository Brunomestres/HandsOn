import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfistaComponent } from './surfista/surfista.component';
import { BateriaComponent } from './bateria/bateria.component';
import { OndaComponent } from './onda/onda.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'surfista', component:SurfistaComponent  },
  { path: 'bateria', component:BateriaComponent  },
  { path: 'ondas/:id', component:OndaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
