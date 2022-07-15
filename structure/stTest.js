import Stack from "./Stack.js";
import StackBasedObject from "./StackBasedObject.js";
import Queue from "./Queue.js";
import Deque from "./Deque.js";
import {LinkedList} from "./LinkedList.js";
import {DoublyLinkedList} from "./DoublyLinkedList.js";
import CircularLinkedList from "./CircularLinkedList.js";
import SortedLinkedList from "./SortedLinkedList.js";
import MySet from "./MySet.js";
import {MyMap} from "./MyMap.js";
import {HashTable, HashTableLinearProbing, HashTableSeparateChaining} from "./HashTable.js";
import {BinarySearchTree} from "./BinarySearchTree.js";
import AVLTree from "./AVLTree.js";
import {RedBlackTree} from "./RedBlackTree.js";

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log(tree.levelOrderTraverse())