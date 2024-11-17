import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {StocksService} from './stocks.service';
import {CreateStockDto} from './dto/create-stock.dto';
import {Stock} from './schemas/stock.schema';

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {
    }

    @Post()
    create(@Body() createStockDto: CreateStockDto): Promise<Stock> {
        return this.stocksService.create(createStockDto);
    }

    @Get()
    findAll(): Promise<Stock[]> {
        return this.stocksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Stock> {
        return this.stocksService.findOne(id);
    }I

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Stock> {
        return this.stocksService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createStockDto: CreateStockDto): Promise<Stock> {
        return this.stocksService.update(id, createStockDto);
    }
}
