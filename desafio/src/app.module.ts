import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadesModule } from './cidades/cidades.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [EstadosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'desafio',
      username: 'postgres',
      password: 'admin',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
   }),
    CidadesModule,
    ClientesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
