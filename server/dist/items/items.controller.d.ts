import { ItemsService } from "./items.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { Item } from "./schemas/item.schema";
export declare class ItemsController {
  private readonly itemsService;
  constructor(itemsService: ItemsService);
  create(createItemDto: CreateItemDto): Promise<Item>;
  findAll(): Promise<Item[]>;
  findOne(id: string): Promise<Item>;
  I: any;
  delete(id: string): Promise<Item>;
  update(id: string, createItemDto: CreateItemDto): Promise<Item>;
}
