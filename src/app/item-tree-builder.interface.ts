import { ItemNodeModel } from './items/item-node.model';
import { ItemEntity } from './fetch-items.service';

export interface ItemTreeBuilder {
  convertToTreeList: (items: Array<ItemEntity>) => Array<ItemNodeModel>;
}
