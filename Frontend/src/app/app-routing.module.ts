import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfistaComponent } from './surfista/surfista.component';
  import { from } from 'rxjs';

const routes: Routes = [
  { path: 'surfista', component:SurfistaComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
