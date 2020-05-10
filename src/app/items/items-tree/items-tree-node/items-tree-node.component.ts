import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItemNodeModel } from '../../item-node.model';

@Component({
  selector: 'app-items-tree-node',
  templateUrl: './items-tree-node.component.html',
  styleUrls: ['./items-tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTreeNodeComponent {

  @Input() node: ItemNodeModel;
  constructor() { }

}
