import { ItemsProvider } from './items.provider';
import { ItemEntity } from '../fetch-items.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ItemNodeModel } from './item-node.model';

interface CalculatedTreeInfoResult {
  deepLevel: number;
  nodes: number;
}

const mockData =  [
  {
    id: 1,
    title: 'Item 1',
    parent_id: null
  },
  {
    id: 2,
    title: 'Item 2',
    parent_id: 1
  },
  {
    id: 3,
    title: 'Item 3',
    parent_id: 2
  },
  {
    id: 4,
    title: 'Item 4',
    parent_id: null
  },
  {
    id: 5,
    title: 'Item 5',
    parent_id: null
  },
  {
    id: 6,
    title: 'Item 6',
    parent_id: 5
  },
  {
    id: 7,
    title: 'Item 7',
    parent_id: 6
  },
  {
    id: 8,
    title: 'Item 8',
    parent_id: 6
  }
];

const expectedTreeInfoResults: Array<CalculatedTreeInfoResult> = [
  {
    deepLevel: 3,
    nodes: 3
  },
  {
    deepLevel: 1,
    nodes: 1
  },
  {
    deepLevel: 3,
    nodes: 4
  }
];

describe('ItemProviderService', () => {
  let service: ItemsProvider;
  let fetchItemsService;

  beforeEach(() => {
    fetchItemsService = {
      getAll(): Observable<Array<ItemEntity>> {
        return new BehaviorSubject(mockData.slice());
      }
    };
    service = new ItemsProvider(fetchItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create tree from flat structure', () => {
    let expectedTreeInfoResult: CalculatedTreeInfoResult;

    service.valueChanges$.pipe(take(1)).subscribe(trees => {
      // Should create 3 roots from provided structure
      expect(trees.length).toBe(3);

      for (let i = 0; i < trees.length; i++) {
        expectedTreeInfoResult = calcTreeInformation(trees[i]);
        // Expected same nodes quantity
        expect(expectedTreeInfoResult.nodes).toBe(expectedTreeInfoResults[i].nodes);
        // Expected same tree deep level
        expect(expectedTreeInfoResult.deepLevel).toBe(expectedTreeInfoResults[i].deepLevel);
      }
    });

    service.getAll();
  });
});

function calcTreeInformation(tree: ItemNodeModel): CalculatedTreeInfoResult {
  const result = {
    deepLevel: 1,
    nodes: 0
  };
  traverseTree(tree);
  function traverseTree(node: ItemNodeModel) {
    ++result.nodes;
    for (let i = 0; i < node.children.length; i++) {
      // FIXME - ugly fix for counting tree depth as there is no reference to parent
      if (!i) {
        ++result.deepLevel
      }
      traverseTree( node.children[i] );
    }
  }

  return { ...result };
}
