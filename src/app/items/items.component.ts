import { Component, OnInit } from '@angular/core';
import { ItemsProvider } from './items.provider';
import { ItemNodeModel } from './item-node.model';
import { Observable } from 'rxjs';
import { FetchItemsService } from '../fetch-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers:[
    { provide: ItemsProvider, deps: [ FetchItemsService ] }
  ]
})
export class ItemsComponent implements OnInit {

  items$: Observable<Array<ItemNodeModel>>;

  constructor(
    private itemProvider: ItemsProvider,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items$ = this.itemProvider.valueChanges$;
    this.itemProvider.getAll();
  }

  public search(searchPhrase: string): void {
    this.itemProvider.getByTitle(searchPhrase);
  }

  public redirectToItem(node: ItemNodeModel) {
    this.router.navigate(['/item', node.id]);
  }
}
