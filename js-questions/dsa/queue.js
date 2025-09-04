// DSA (Data Structures and Algorithms) concepts and implementations in JavaScript

// Queue Implementation

// theory: A queue is a linear data structure that follows the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in scenarios such as task scheduling, breadth-first search algorithms, and buffering data streams.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(" -> "));
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); // output: 1 -> 2 -> 3