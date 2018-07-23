import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActorComponent } from './actor/actor.component';
import { DirectorComponent } from './director/director.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActorComponent,
    DirectorComponent,
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    ServiciosComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
