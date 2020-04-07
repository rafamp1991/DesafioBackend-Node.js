import { Module } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { CidadesController } from './cidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';
import { Estado } from '../estados/estado.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cidade, Estado]),
  ],
  providers: [CidadesService],
  controllers: [CidadesController]
})
export class CidadesModule {}
