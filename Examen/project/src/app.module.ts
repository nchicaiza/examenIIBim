import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ActorController} from "./actor/actor.controller";
import {PeliculaController} from "./pelicula/pelicula.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {ActorService} from "./actor/actor.service";
import {PeliculaService} from "./pelicula/pelicula.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ActorEntity} from "./actor/actor.entity";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {PeliculaEntity} from "./pelicula/pelicula.entity";
import {UsuarioService} from "./usuario/usuario.service";
import {UsuarioController} from "./usuario/usuario.controller";

@Module({
  imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'web18aexamen.mysql.database.azure.com',
        port: 3306,
        username: 'nChicaiza@web18aexamen',
        password: 'web2018A',
        database: 'examenweb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: true
      }),
      TypeOrmModule.forFeature([
          ActorEntity,
          UsuarioEntity,
          PeliculaEntity,
      ]),
  ],
  controllers: [AppController, ActorController, PeliculaController, AutorizacionController, UsuarioController],
  providers: [AppService, ActorService, PeliculaService, UsuarioService],
})
export class AppModule {}
