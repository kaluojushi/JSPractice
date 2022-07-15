import {Node, BinarySearchTree} from "./BinarySearchTree.js";

const BalanceFactor = {
  UNBALANCE_RIGHT: 1,
  SLIGHTLY_UNBALANCE_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCE_LEFT: 4,
  UNBALANCE_LEFT: 5
}

export default class AVLTree extends BinarySearchTree {
  constructor(compareFn = (a, b) => a === b ? 0 : (a < b ? -1 : 1)) {
    super(compareFn);
    this.root = null;
    this.compareFn = compareFn;
  }

  getNodeHeight(node) {
    if (!node) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const heightDif = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDif) {
      case -2:
        return BalanceFactor.UNBALANCE_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCE_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCE_LEFT;
      case 2:
        return BalanceFactor.UNBALANCE_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (!node) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) < 0) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) > 0) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      if (this.compareFn(key, node.left.key) < 0) {
        node = this.rotationLL(node);
      } else {
        node = this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      if (this.compareFn(key, node.right.key) > 0) {
        node = this.rotationRR(node);
      } else {
        node = this.rotationRL(node);
      }
    }
    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (!node) {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCE_LEFT) {
        return this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCE_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCE_RIGHT) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCE_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}