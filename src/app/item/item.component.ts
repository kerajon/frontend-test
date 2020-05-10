import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../items/item.interface';
import { Observable } from 'rxjs';
import { ItemsProvider } from '../items/items.provider';
import { FetchItemsService } from '../fetch-items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers:[
    { provide: ItemsProvider, deps: [ FetchItemsService ] }
  ]
})
export class ItemComponent implements OnInit {

  item$: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    private itemsProvider: ItemsProvider
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.item$ = this.itemsProvider.getById( Number(id) );
  }

}
