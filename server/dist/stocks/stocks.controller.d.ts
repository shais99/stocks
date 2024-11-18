import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './schemas/stock.schema';
import { Quote } from "./interfaces/Quote";
export declare class StocksController {
    private readonly stocksService;
    constructor(stocksService: StocksService);
    create(createStockDto: CreateStockDto): Promise<Stock>;
    findAll(username: string): Promise<Stock[]>;
    findOne(id: string, username: string): Promise<Quote>;
    search(query: string): Promise<Stock[]>;
    delete(id: string): Promise<Stock>;
}
