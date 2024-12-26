export type TTreeState = {
  level?: number | null;
  hidden?: boolean | null;
  collapsed?: boolean | null;
};

export type TTreeDTO<T> = {
  id: string;
  pid: string | null;
  data?: T;
  items: TTreeDTO<T>[];
  state: TTreeState;
};

export class CTreeNode<T> {
  id: string;

  pid: string | null;

  data?: T;

  items: CTreeNode<T>[];

  state: TTreeState;

  constructor(id: string, pid: string | null, state: TTreeState, data?: T) {
    this.id = id;
    this.pid = pid;
    this.data = data;
    this.items = [];
    this.state = state;
  }

  get isLeaf() {
    return this.items.length === 0;
  }
}

export class CTree<T> {
  root: CTreeNode<T>;

  constructor(key: string, state: TTreeState, data?: T) {
    this.root = new CTreeNode(key, null, state, data);
  }

  *preOrderTraversal(node = this.root): Generator<CTreeNode<T>, any, undefined> {
    yield node;
    if (node.items.length) {
      for (const child of node.items) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root): Generator<CTreeNode<T>, any, undefined> {
    if (node.items.length) {
      for (const child of node.items) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  // crud

  get(id: string, root?: CTreeNode<T>) {
    for (const node of this.preOrderTraversal(root)) {
      if (node.id === id) return node;
    }
    return undefined;
  }

  insert(id: string, pid: string | null, state: TTreeState, data?: T) {
    for (const node of this.preOrderTraversal()) {
      if (node.id === pid) {
        node.items.push(new CTreeNode(id, node.id, state, data));
        return true;
      }
    }
    return false;
  }

  removeNode(id: string) {
    for (const node of this.preOrderTraversal()) {
      const filtered = node.items.filter((c: CTreeNode<T>) => c.id !== id);
      if (filtered.length !== node.items.length) {
        node.items = filtered;
        return true;
      }
    }
    return false;
  }

  removeAll(id: string) {
    for (const node of this.preOrderTraversal()) {
      if (node.id === id) {
        node.items = [];
      }
    }
  }

  flat() {
    const collection: TTreeDTO<T>[] = [];
    for (const node of this.preOrderTraversal()) {
      const { id, pid, state, data } = node;
      if (pid !== null) collection.push({ id, pid, data, items: [], state });
    }
    return collection;
  }

  leafs = (x: CTreeNode<T>) => x.isLeaf;

  // helpers

  toggleValueNode(key: string, name: keyof TTreeState, value: any) {
    for (const node of this.preOrderTraversal()) {
      if (node.id === key) {
        node.state[name] = value;
      }
    }
  }

  toggleValueAll(key: string, name: keyof TTreeState, value: any) {
    const root = this.get(key);
    for (const node of this.preOrderTraversal(root)) {
      node.state[name] = value;
    }
  }

  // toggle

  expand(key: string) {
    const node = this.get(key);
    if (node) {
      this.toggleValueNode(key, 'collapsed', false);
      for (const child of node.items) {
        this.toggleValueNode(child.id, 'hidden', false);
      }
    }
  }

  collapse(key: string) {
    const node = this.get(key);
    if (node) {
      this.toggleValueAll(key, 'collapsed', true);
      for (const child of node.items) {
        this.toggleValueAll(child.id, 'hidden', true);
      }
    }
  }

  toggle(key: string) {
    const node = this.get(key);
    if (node) {
      if (node.state.collapsed) {
        this.expand(key);
      } else {
        this.collapse(key);
      }
    }
  }

  expandFrom(from = 0) {
    for (const node of this.preOrderTraversal()) {
      node.state.collapsed = false;
      if (node.state.level && node.state.level >= from) {
        node.state.hidden = false;
      }
    }
  }

  collapseTo(to = 0) {
    for (const node of this.preOrderTraversal()) {
      node.state.collapsed = true;
      if (node.state.level && node.state.level > to) {
        node.state.hidden = true;
      }
    }
  }
}
