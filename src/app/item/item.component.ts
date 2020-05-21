import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsProvider } from '../items/items.provider';
import { FetchItemsService } from '../fetch-items.service';
import { take, tap } from 'rxjs/operators';
import { ItemNodeModel } from '../items/item-node.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers:[
    { provide: ItemsProvider, deps: [ FetchItemsService ] }
  ]
})
export class ItemComponent implements OnInit {

  item: ItemNodeModel;

  constructor(
    private route: ActivatedRoute,
    private itemsProvider: ItemsProvider
  ) { }

  ngOnInit(): void {
    this.itemsProvider.valueChanges$.pipe(
      take(1),
      tap(items => { this.item = items[0]; })
    ).subscribe();
    // TODO (JN) if NaN, just show 'no item' message without performing http request
    this.itemsProvider.getById( Number( this.route.snapshot.paramMap.get('id') ) );
  }

}
