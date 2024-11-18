"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const axios_1 = require("axios");
const mongoose_2 = require("mongoose");
const stock_schema_1 = require("./schemas/stock.schema");
let StocksService = class StocksService {
    constructor(stockModel) {
        this.stockModel = stockModel;
    }
    async create(createStockDto) {
        const newStock = new this.stockModel(createStockDto);
        return newStock.save();
    }
    async findAll(username) {
        return this.stockModel.find({ username }).exec();
    }
    async delete(id) {
        return this.stockModel.findByIdAndDelete(id).exec();
    }
    async search(query) {
        try {
            const response = await axios_1.default.get(`https://financialmodelingprep.com/api/v3/search?apikey=${process.env.FMP_API_KEY}&query=${query}&limit=20`);
            return response.data;
        }
        catch (err) {
            throw err;
        }
    }
    async getQuote(id, username) {
        const stockById = await this.stockModel.findById(id).exec();
        if (!stockById || stockById.username !== username) {
            throw new common_1.NotFoundException(`Stock with ID ${id} not found`);
        }
        try {
            const response = await axios_1.default.get(`https://financialmodelingprep.com/api/v3/quote/${stockById.symbol}?apikey=${process.env.FMP_API_KEY}`);
            return response.data[0];
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
};
exports.StocksService = StocksService;
exports.StocksService = StocksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stock_schema_1.Stock.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StocksService);
//# sourceMappingURL=stocks.service.js.map