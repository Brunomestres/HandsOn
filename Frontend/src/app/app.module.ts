import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurfistaComponent } from './surfista/surfista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BateriaComponent } from './bateria/bateria.component';
import { OndaComponent } from './onda/onda.component';
import { SurfistasToBateriaComponent } from './surfistas-to-bateria/surfistas-to-bateria.component';
import { FormNotaComponent } from './form-nota/form-nota.component';
@NgModule({
  declarations: [
    AppComponent,
    SurfistaComponent,
    BateriaComponent,
    OndaComponent,
    SurfistasToBateriaComponent,
    FormNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
