// DSA (Data Structures and Algorithms) concepts and implementations in JavaScript

// Heap Implementation

// theory: A heap is a specialized tree-based data structure that satisfies the heap property. In a max-heap, for any given node, the value of the node is greater than or equal to the values of its children, while in a min-heap, the value of the node is less than or equal to the values of its children. Heaps are commonly used to implement priority queues and for efficient sorting algorithms like heapsort.

class MinHeap {
    constructor() {
        this.heap = [];
    }
        getParentIndex(index) {
        return Math.floor((index - 1) / 2);
        }
        getLeftChildIndex(index) {
        return 2 * index + 1;
        }

        getRightChildIndex(index) {
        return 2 * index + 2;
        }
        swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
        }
        insert(value) {
        this.heap.push(value);
        this.heapifyUp();
        }
        heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
        }
        extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
        }
        heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (this.getLeftChildIndex(index) < length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallerChildIndex = leftChildIndex;
                if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallerChildIndex = rightChildIndex;
                }
            if (this.heap[index] <= this.heap[smallerChildIndex]) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(4);
console.log(minHeap.extractMin()); // output: 1
console.log(minHeap.extractMin()); // output: 3
console.log(minHeap.extractMin()); // output: 4
console.log(minHeap.extractMin()); // output: 5
console.log(minHeap.extractMin()); // output: 8
console.log(minHeap.extractMin()); // output: null
console.log(minHeap); // output: MinHeap { heap: [] }


class MaxHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (this.getLeftChildIndex(index) < length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let largerChildIndex = leftChildIndex;
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
                largerChildIndex = rightChildIndex;
            }
            if (this.heap[index] >= this.heap[largerChildIndex]) break;
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }
}
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(1);
maxHeap.insert(4);
console.log(maxHeap.extractMax()); // output: 8
console.log(maxHeap.extractMax()); // output: 5
console.log(maxHeap.extractMax()); // output: 4
console.log(maxHeap.extractMax()); // output: 3
console.log(maxHeap.extractMax()); // output: 1
console.log(maxHeap.extractMax()); // output: null
console.log(maxHeap); // output: MaxHeap { heap: [] }

// Note: The above implementations of MinHeap and MaxHeap include methods for inserting elements, extracting the minimum/maximum element, and maintaining the heap property through heapify operations.
