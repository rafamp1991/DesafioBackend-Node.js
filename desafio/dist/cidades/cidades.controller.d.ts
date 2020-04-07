import { Cidade } from './cidade.entity';
import { CidadesService } from './cidades.service';
import { Estado } from '../estados/estado.entity';
export declare class CidadesController {
    private cidadesService;
    constructor(cidadesService: CidadesService);
    index(res: any): Promise<Cidade[]>;
    findById(res: any, id: any, cidadeData: Cidade): Promise<Cidade[]>;
    findByNome(res: any, nome: any, cidadeData: Cidade): Promise<Cidade[]>;
    findByEstadoNome(res: any, nome: any, estado: Estado): Promise<Cidade[]>;
    findByEstadoUf(res: any, uf: any, estado: Estado): Promise<Cidade[]>;
    create(res: any, cidadeData: Cidade): Promise<any>;
    update(res: any, id: any, cidadeData: Cidade): Promise<any>;
    delete(res: any, id: any): Promise<any>;
}
