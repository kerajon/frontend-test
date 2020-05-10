import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ItemEntity {
  id: number;
  parent_id: null | number;
  title: string;
}

/* Let's assume there is so much items and item can change any time, so local cache for those has no use */
@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  host: string = environment.items.host;

  constructor(
    private client: HttpClient
  ) { }

  public getAll(): Observable<Array<ItemEntity>> {
    return this.client.get<Array<ItemEntity>>( this.getAllPath() );
  }

  /* Mimic backend's search operation */
  public searchByTitle(title: string): Observable<Array<ItemEntity>> {
    title = title.toLowerCase();
    return this.client.get<Array<ItemEntity>>( this.getAllPath() ).pipe(
      map(items => {
        return items.filter((item) => {
          return item.title.toLowerCase().includes(title);
        });
      })
    );
  }

  public getById(id: number): Observable<ItemEntity> {
    return this.client.get<ItemEntity>( this.getByIdPath(id) );
  }

  private getAllPath(): string {
    return this.host + environment.items.path.all;
  }

  private getByIdPath(id: number): string {
    return this.host + environment.items.path.byId.replace(':id', String(id));
  }

}
