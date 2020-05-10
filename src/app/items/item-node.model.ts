import { Item } from './item.interface';
import { TreeNode } from '../tree-node.interface';

export class ItemNodeModel implements Item, TreeNode {

  id: number;
  title: string;
  children: Array<ItemNodeModel> = [];

  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }

}
