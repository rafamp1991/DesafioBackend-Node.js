import { Cidade } from './cidade.entity';
import { CidadesService } from './cidades.service';
import { Estado } from 'src/estados/estado.entity';
export declare class CidadesController {
    private cidadesService;
    constructor(cidadesService: CidadesService);
    index(): Promise<Cidade[]>;
    findById(id: any, cidadeData: Cidade): Promise<Cidade[]>;
    findByNome(nome: any, cidadeData: Cidade): Promise<Cidade[]>;
    findByEstadoNome(nome: any, estado: Estado): Promise<Cidade[]>;
    findByEstadoUf(uf: any, estado: Estado): Promise<Cidade[]>;
    create(cidadeData: Cidade): Promise<any>;
    update(id: any, cidadeData: Cidade): Promise<any>;
    delete(id: any): Promise<any>;
}
