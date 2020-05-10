import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTreeNodeComponent } from './items-tree-node.component';

describe('ItemsTreeNodeComponent', () => {
  let component: ItemsTreeNodeComponent;
  let fixture: ComponentFixture<ItemsTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
