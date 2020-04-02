import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Cidade } from '../cidades/cidade.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente, Cidade]),
  ],
  providers: [ClientesService],
  controllers: [ClientesController]
})
export class ClientesModule {}
