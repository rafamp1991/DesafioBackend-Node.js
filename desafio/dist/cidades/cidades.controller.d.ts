import { Cidade } from './cidade.entity';
import { CidadesService } from './cidades.service';
export declare class CidadesController {
    private cidadesService;
    constructor(cidadesService: CidadesService);
    index(): Promise<Cidade[]>;
    findById(id: any, cidadeData: Cidade): Promise<Cidade[]>;
    findByNome(nome: any, cidadeData: Cidade): Promise<Cidade[]>;
    create(cidadeData: Cidade): Promise<any>;
    update(id: any, cidadeData: Cidade): Promise<any>;
    delete(id: any): Promise<any>;
}
