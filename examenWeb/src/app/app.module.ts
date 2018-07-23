import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActorComponent } from './actor/actor.component';
import { DirectorComponent } from './director/director.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { SearchPipe } from './pipes/search.pipe';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CredencialesService} from "./servicios/credenciales.service";
import {AutorizacionService} from "./servicios/autorizacion.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActorComponent,
    DirectorComponent,
    HomeComponent,
    NavBarComponent,
    TransferenciaComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    AutorizacionService,
    CredencialesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
