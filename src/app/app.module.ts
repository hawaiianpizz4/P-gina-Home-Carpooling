import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';





const navegacion:Routes=[
  {path:'inicio', component: InicioComponent},
  {path:'beneficios',component:BeneficiosComponent},
  {path:'iniciarsesion',component:IniciarsesionComponent},
  {path:'registrarse',component:RegistrarseComponent},
];





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    BeneficiosComponent,
    IniciarsesionComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
