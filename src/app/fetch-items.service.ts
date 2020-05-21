import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ItemEntity {
  id: number;
  parent_id: null | number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  // TODO (JN) inject environment
  host: string = environment.items.host;

  constructor(
    private client: HttpClient
  ) { }

  public getAll(): Observable<Array<ItemEntity>> {
    return this.client.get<Array<ItemEntity>>( this.getAllPath() );
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
