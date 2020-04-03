import { Estado } from './estado.entity';
import { EstadosService } from './estados.service';
export declare class EstadosController {
    private estadosService;
    constructor(estadosService: EstadosService);
    index(res: any): Promise<Estado[]>;
    findById(res: any, id: any, estadoData: Estado): Promise<Estado[]>;
    findByUf(res: any, uf: any, estadoData: Estado): Promise<Estado[]>;
    findByNome(res: any, nome: any, estadoData: Estado): Promise<Estado[]>;
    create(res: any, estadoData: Estado): Promise<any>;
    update(res: any, id: any, estadoData: Estado): Promise<any>;
    delete(res: any, id: any): Promise<any>;
}
