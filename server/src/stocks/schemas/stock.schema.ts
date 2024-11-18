import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    symbol: string;

    @Prop({required: true})
    username: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
