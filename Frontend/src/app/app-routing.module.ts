import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfistaComponent } from './surfista/surfista.component';
import { BateriaComponent } from './bateria/bateria.component';
import { OndaComponent } from './onda/onda.component';
import { SurfistasToBateriaComponent } from './surfistas-to-bateria/surfistas-to-bateria.component';
import { FormNotaComponent } from './form-nota/form-nota.component';
import { ListOndaComponent } from './list-onda/list-onda.component';
import { VencedorComponent } from  './vencedor/vencedor.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'surfista', component:SurfistaComponent  },
  { path: 'nota/:id', component:FormNotaComponent  },
  { path: 'bateria', component:BateriaComponent  },
  { path: 'ondas', component:ListOndaComponent },
  { path: 'ondas/:id', component:OndaComponent },
  { path: 'winner/:id', component:VencedorComponent },
  { path: 'bateria/:id', component:SurfistasToBateriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
