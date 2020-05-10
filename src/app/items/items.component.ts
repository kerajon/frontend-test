import { Component, OnInit } from '@angular/core';
import { ItemProviderService } from '../item-provider.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$;

  constructor(
    /* This shouldn't be here */
    public itemProvider: ItemProviderService
  ) { }

  ngOnInit(): void {
    // FIXME (JN) temporary solution
    this.items$ = this.itemProvider.getAll();
  }

}
