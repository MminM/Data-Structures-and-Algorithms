import {Compare, defaultCompare} from '../util';
import {Node} from './node';


// 创建一颗空树
export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key) {
        if(this.root == null) {
            this.root = new Node(key);
        }else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node,key) {
        if(this.compareFn(key,node.key) === Compare.LESS_THAN) {
            if(node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left,key)
            }
        } else {
            if(node.right == null) {
                node.right = new Node(key);
            }else {
                this.insertNode(node,right,key);
            }
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if(node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(11);

console.log(tree.inOrderTraverse())


