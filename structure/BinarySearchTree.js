export class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor(compareFn = (a, b) => a === b ? 0 : (a < b ? -1 : 1)) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) < 0) {
      if (!node.left) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (!node.right) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  inOrderTraverse() {
    const keys = [];
    this.inOrderTraverseNode(this.root, keys);
    return keys;
  }

  inOrderTraverseNode(node, keys) {
    if (node) {
      this.inOrderTraverseNode(node.left, keys);
      keys.push(node.key);
      this.inOrderTraverseNode(node.right, keys);
    }
  }

  preOrderTraverse() {
    const keys = [];
    this.preOrderTraverseNode(this.root, keys);
    return keys;
  }

  preOrderTraverseNode(node, keys) {
    if (node) {
      keys.push(node.key);
      this.preOrderTraverseNode(node.left, keys);
      this.preOrderTraverseNode(node.right, keys);
    }
  }

  postOrderTraverse() {
    const keys = [];
    this.postOrderTraverseNode(this.root, keys);
    return keys;
  }

  postOrderTraverseNode(node, keys) {
    if (node) {
      this.postOrderTraverseNode(node.left, keys);
      this.postOrderTraverseNode(node.right, keys);
      keys.push(node.key);
    }
  }

levelOrderTraverse() {
  const keys = [];
  this.levelOrderTraverseNode(this.root, keys);
  return keys;
}

levelOrderTraverseNode(node, keys) {
  const queue = [node];
  while (queue.length) {
    const cnt = queue.length;
    for (let i = 0; i < cnt; i++) {
      const cur = queue.shift();
      keys.push(cur.key);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }
}

  min() {
    return this.minNode(this.root).key;
  }

  minNode(node) {
    let cur = node;
    while (cur && cur.left) {
      cur = cur.left;
    }
    return cur;
  }

  max() {
    return this.maxNode(this.root).key;
  }

  maxNode(node) {
    let cur = node;
    while (cur && cur.right) {
      cur = cur.right;
    }
    return cur;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (!node) {
      return false;
    }
    if (this.compareFn(key, node.key) < 0) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) > 0) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (!node) {
      return null;
    }
    if (this.compareFn(key, node.key) < 0) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) > 0) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 情况一
      if (!node.left && !node.left) {
        node = null;
        return node;
      }
      // 情况二
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      // 情况三
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}