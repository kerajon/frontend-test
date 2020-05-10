import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemNodeModel } from '../item-node.model';

@Component({
  selector: 'app-items-tree',
  templateUrl: './items-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTreeComponent {

  @Output() nodeClicked: EventEmitter<ItemNodeModel> = new EventEmitter<ItemNodeModel>();
  @Input() nodes: Array<ItemNodeModel>;
  constructor() { }

}
