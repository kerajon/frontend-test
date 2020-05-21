import { Item } from './item.interface';
import { TreeNode } from '../tree-node.interface';
import { ItemTreeBuilder } from '../item-tree-builder.interface';
import { ItemEntity } from '../fetch-items.service';

export class ItemNodeModel implements Item, TreeNode, ItemTreeBuilder {

  id: number;
  title: string;
  children: Array<ItemNodeModel> = [];

  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }

  /* Algorithm can be improved */
  /* Be careful with huge amount of "items" */
  public convertToTreeList(items: Array<ItemEntity>, eachNodeHandler?: (ItemNodeModel) => void): Array<ItemNodeModel> {
    let hashMap = new Map();
    const roots: Array<ItemNodeModel> = [];
    let itemNode: ItemNodeModel;
    eachNodeHandler = eachNodeHandler || (new Function() as (ItemNodeModel) => void);

    for (const item of items) {
      itemNode = new ItemNodeModel(item);
      hashMap.set(item.id,  itemNode);
      eachNodeHandler(itemNode);
    }

    for(const item of items) {
      if (item.parent_id && hashMap.get( item.parent_id || 0 )) {
        hashMap.get( item.parent_id || 0 )
          .children
          .push( hashMap.get(item.id) );
      } else {
        roots.push( hashMap.get(item.id) );
      }
    }

    hashMap = null;
    itemNode = null;

    return roots;
  }

}
