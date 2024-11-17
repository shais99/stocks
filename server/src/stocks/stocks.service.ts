import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Stock, StockDocument} from './schemas/stock.schema';
import {CreateStockDto} from './dto/create-stock.dto';

@Injectable()
export class StocksService {
    constructor(@InjectModel(Stock.name) private readonly stockModel: Model<StockDocument>) {
    }

    async create(createStockDto: CreateStockDto): Promise<Stock> {
        const newStock = new this.stockModel(createStockDto);
        return newStock.save();
    }

    async findAll(): Promise<Stock[]> {
        return this.stockModel.find().exec();
    }

    async findOne(id: string): Promise<Stock> {
        return this.stockModel.findById(id).exec();
    }

    async delete(id: string): Promise<Stock> {
        return this.stockModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, createStockDto: CreateStockDto): Promise<Stock> {
        return this.stockModel.findByIdAndUpdate(id, createStockDto, {new: true}).exec();
    }
}
