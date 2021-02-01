import {Compare, defaultCompare} from '../util';
import {Node} from './node';


// 创建一颗空树
export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }
}