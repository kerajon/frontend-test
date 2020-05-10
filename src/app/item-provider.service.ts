import { Injectable } from '@angular/core';
import { FetchItemsService, ItemEntity } from './fetch-items.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './items/item.interface';
import { TreeNode } from './tree-node.interface';
import { ItemNodeModel } from './items/item-node.model';

@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  private index: Array<Item> = [];

  constructor(
    private fetchItems: FetchItemsService
  ) { }

  public getAll(): Observable<Item & TreeNode> {
    return this.fetchItems.getAll().pipe(
      map(this.convertToTreeAndBuildIndex.bind(this))
    );
  }

  public getById(itemId: number): Observable<Item> {
    return this.fetchItems.getById(itemId).pipe(
      map(({ id, title }) => ({ id, title}))
    );
  }

  /* Algorithm can be improved */
  /* Be careful with huge amount of "items" */
  private convertToTreeAndBuildIndex(items: Array<ItemEntity>): Array<TreeNode> {
    let hashMap = new Map();
    const roots: Array<TreeNode> = [];

    for (const item of items) {
      hashMap.set(item.id,  new ItemNodeModel(item));
      /* Build index */
      this.index.push( hashMap.get(item.id) );
    }

    for(const item of items) {
      if (item.parent_id) {
        hashMap.get( item.parent_id || 0 )
               .children
               .push( hashMap.get(item.id) );
      } else {
        roots.push( hashMap.get(item.id) );
      }
    }

    hashMap = null;

    return roots;
  }
}
