import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor;
  pelicula;
  _parametros:any;

  constructor( private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarActor();
    this.cargarPelicula();
  }

  cargarPelicula(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:3000/pelicula/mostrarMateria?estudianteIdIdEstudiante='+this._parametros.idpelicula)
        .subscribe(
          (res)=>{
            this.pelicula=res;
            console.log(this.pelicula);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  cargarActor(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:3000/Actor/mostrarActor?id='+this._parametros.idpelicula)
        .subscribe(
          (res)=>{
            this.actor=res;
            console.log(this.actor);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }
}
