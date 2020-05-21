import { FetchItemsService, ItemEntity } from '../fetch-items.service';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Item } from './item.interface';
import { ItemNodeModel } from './item-node.model';
import { ItemTreeBuilder } from '../item-tree-builder.interface';

export class ItemsProvider implements ItemTreeBuilder {

  private _index: Array<ItemEntity>;

  private _valueChanges$: Subject<Array<ItemNodeModel>> = new Subject<Array<ItemNodeModel>>();
  get valueChanges$(): Observable<Array<ItemNodeModel>> {
    return this._valueChanges$.asObservable();
  }

  constructor(
    private fetchItems: FetchItemsService
  ) { }

  public getAll(): void {
    this.fetchItems.getAll().pipe(
      tap(this.updateIndex.bind(this)),
      map(this.convertToTreeList.bind(this)),
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

    itemTitle = (itemTitle || '').toLowerCase();

    this.updateValueChanges(
      this.convertToTreeList(
        this._index.filter((item) => item.title.toLowerCase().includes(itemTitle) )
      )
    );
  }

  private updateValueChanges(itemNodes: Array<ItemNodeModel>) {
    this._valueChanges$.next( itemNodes.slice() )
  }

  private updateIndex(items: Array<ItemEntity>): void {
    this._index = items.slice();
  }

  convertToTreeList(items: Array<ItemEntity>): Array<ItemNodeModel> {
    return ItemNodeModel.prototype.convertToTreeList(items);
  }
}
