import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemNodeModel } from '../../item-node.model';

@Component({
  selector: 'app-items-tree-node',
  templateUrl: './items-tree-node.component.html',
  styleUrls: ['./items-tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTreeNodeComponent {

  @Output() nodeClicked: EventEmitter<ItemNodeModel> = new EventEmitter<ItemNodeModel>();
  @Input() node: ItemNodeModel;
  constructor() { }

  public onClick(node: ItemNodeModel) {
    this.nodeClicked.emit(node);
  }
}
