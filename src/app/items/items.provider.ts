import { FetchItemsService, ItemEntity } from '../fetch-items.service';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Item } from './item.interface';
import { TreeNode } from '../tree-node.interface';
import { ItemNodeModel } from './item-node.model';

export class ItemsProvider {

  private _valueChanges$: Subject<Array<ItemNodeModel>> = new Subject<Array<ItemNodeModel>>();
  get valueChanges$(): Subject<Array<ItemNodeModel>> {
    return this._valueChanges$;
  }

  constructor(
    private fetchItems: FetchItemsService
  ) { }

  public getAll(): void {
    this.fetchItems.getAll().pipe(
      map(this.convertToTreeAndBuildIndex.bind(this)),
      tap(this.updateValueChanges.bind(this)),
      take(1)
    ).subscribe();
  }

  public getById(itemId: number): Observable<Item> {
    return this.fetchItems.getById(itemId).pipe(
      map(({ id, title }) => ({ id, title})),
      catchError(error => of(null))
    );
  }

  public find(itemTitle: string) {
    this.fetchItems.searchByTitle(itemTitle).pipe(
      map(this.convertToTreeAndBuildIndex.bind(this)),
      tap(this.updateValueChanges.bind(this)),
      take(1)
    ).subscribe();
  }

  /* Algorithm can be improved */
  /* Be careful with huge amount of "items" */
  private convertToTreeAndBuildIndex(items: Array<ItemEntity>): Array<TreeNode> {
    let hashMap = new Map();
    const roots: Array<TreeNode> = [];

    for (const item of items) {
      hashMap.set(item.id,  new ItemNodeModel(item));
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

    return roots;
  }

  private updateValueChanges(itemNodes: Array<ItemNodeModel>) {
    this._valueChanges$.next( itemNodes.slice() )
  }
}
