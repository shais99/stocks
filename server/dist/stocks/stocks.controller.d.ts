import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './schemas/stock.schema';
export declare class StocksController {
    private readonly stocksService;
    constructor(stocksService: StocksService);
    create(createStockDto: CreateStockDto): Promise<Stock>;
    findAll(): Promise<Stock[]>;
    findOne(id: string): Promise<Stock>;
    I: any;
    delete(id: string): Promise<Stock>;
    update(id: string, createStockDto: CreateStockDto): Promise<Stock>;
}
