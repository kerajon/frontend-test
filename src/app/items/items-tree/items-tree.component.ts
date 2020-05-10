import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItemNodeModel } from '../item-node.model';

@Component({
  selector: 'app-items-tree',
  templateUrl: './items-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTreeComponent {

  @Input() nodes: Array<ItemNodeModel>;
  constructor() { }

}
