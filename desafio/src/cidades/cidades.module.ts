import { Module } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { CidadesController } from './cidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cidade]),
  ],
  providers: [CidadesService],
  controllers: [CidadesController]
})
export class CidadesModule {}
