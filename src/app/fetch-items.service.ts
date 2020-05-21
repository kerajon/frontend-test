import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from './environment.class';

export interface ItemEntity {
  id: number;
  parent_id: null | number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  constructor(
    private client: HttpClient,
    private env: Environment,
  ) { }

  public getAll(): Observable<Array<ItemEntity>> {
    return this.client.get<Array<ItemEntity>>( this.getAllPath() );
  }

  public getById(id: number): Observable<ItemEntity> {
    return this.client.get<ItemEntity>( this.getByIdPath(id) );
  }

  private getAllPath(): string {
    return this.env.items.host + this.env.items.path.all;
  }

  private getByIdPath(id: number): string {
    return this.env.items.host + this.env.items.path.byId.replace(':id', String(id));
  }

}
