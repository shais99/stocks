import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import axios from 'axios';
import {Model} from 'mongoose';
import {Stock, StockDocument} from './schemas/stock.schema';
import {CreateStockDto} from './dto/create-stock.dto';
import {Quote} from "./interfaces/Quote";

@Injectable()
export class StocksService {
    constructor(@InjectModel(Stock.name) private readonly stockModel: Model<StockDocument>) {
    }

    async create(createStockDto: CreateStockDto): Promise<Stock> {
        const newStock = new this.stockModel(createStockDto);
        return newStock.save();
    }

    async findAll(username: string): Promise<Stock[]> {
        return this.stockModel.find({ username }).exec();
    }

    async delete(id: string): Promise<Stock> {
        return this.stockModel.findByIdAndDelete(id).exec();
    }

    async search(query: string): Promise<Stock[]> {
        try {
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/search?apikey=${process.env.FMP_API_KEY}&query=${query}&limit=20`);

            return response.data;
        } catch (err) {
            throw err
        }
    }

    async getQuote(id: string, username: string): Promise<Quote> {
        const stockById = await this.stockModel.findById(id).exec();

        if (!stockById || stockById.username !== username) {
            throw new NotFoundException(`Stock with ID ${id} not found`);
        }

        try {
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${stockById.symbol}?apikey=${process.env.FMP_API_KEY}`);

            return response.data[0];
        } catch (err) {
            console.error(err);

            throw err
        }
    }
}
