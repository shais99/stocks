import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
    @Prop({required: true})
    name: string;

    @Prop()
    description: string;

    @Prop({required: true})
    price: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
