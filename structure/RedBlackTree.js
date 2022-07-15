import {Node, BinarySearchTree} from "./BinarySearchTree.js";

const Colors = {
  RED: 1,
  BLACK: 2
}

export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}

export class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = (a, b) => a === b ? 0 : (a < b ? -1 : 1)) {
    super(compareFn);
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(key) {
    if (!this.root) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) < 0) {
      if (!node.left) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (!node.right) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  fixTreeProperties(node) {
    while (node && node.parent && node.parent.isRed() && node.isRed()) {
      let parent = node.parent;
      const grandParent = parent.parent;
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        if (uncle && uncle.isRed()) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        const uncle = grandParent.left;
        if (uncle && uncle.isRed()) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }

  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    if (temp.right && temp.right.key) {
      temp.right.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp;
      } else {
        node.parent.right = temp;
      }
    }
    temp.right = node;
    node.parent = temp;
  }

  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    if (temp.left && temp.left.key) {
      temp.left.parent = node;
    }
    temp.parent = node.parent;
    if (!node.parent) {
      this.root = temp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp;
      } else {
        node.parent.right = temp;
      }
    }
    temp.left = node;
    node.parent = temp;
  }

  preOrderTraverseNode(node, keys) {
    if (node) {
      keys.push(`{${node.key}: ${node.isRed() ? "r" : "b"}}`);
      this.preOrderTraverseNode(node.left, keys);
      this.preOrderTraverseNode(node.right, keys);
    }
  }
}