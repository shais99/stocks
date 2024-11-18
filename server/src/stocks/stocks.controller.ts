import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {StocksService} from './stocks.service';
import {CreateStockDto} from './dto/create-stock.dto';
import {Stock} from './schemas/stock.schema';
import {Quote} from "./interfaces/Quote";

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {
    }

    @Post()
    create(@Body() createStockDto: CreateStockDto): Promise<Stock> {
        return this.stocksService.create(createStockDto);
    }

    @Get(":username")
    findAll(@Param('username') username: string): Promise<Stock[]> {
        return this.stocksService.findAll(username);
    }

    @Get('/quote/:id/:username')
    findOne(@Param('id') id: string, @Param('username') username: string): Promise<Quote> {
        return this.stocksService.getQuote(id, username);
    }

    @Get('search/:query')
    search(@Param('query') query: string): Promise<Stock[]> {
        return this.stocksService.search(query);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Stock> {
        return this.stocksService.delete(id);
    }
}
