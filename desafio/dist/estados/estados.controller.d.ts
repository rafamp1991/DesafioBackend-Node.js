import { Estado } from './estado.entity';
import { EstadosService } from './estados.service';
export declare class EstadosController {
    private estadosService;
    constructor(estadosService: EstadosService);
    index(): Promise<Estado[]>;
    findById(id: any, estadoData: Estado): Promise<Estado[]>;
    findByUf(uf: any, estadoData: Estado): Promise<Estado[]>;
    findByNome(nome: any, estadoData: Estado): Promise<Estado[]>;
    create(estadoData: Estado): Promise<any>;
    update(id: any, estadoData: Estado): Promise<any>;
    delete(id: any): Promise<any>;
}
