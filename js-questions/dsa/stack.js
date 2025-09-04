// DSA (Data Structures and Algorithms) concepts and implementations in JavaScript

// Stack Implementation

// theory: A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Stacks are commonly used in scenarios such as function call management, expression evaluation, and backtracking algorithms.

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(" <- "));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display(); // output: 1 <- 2 <- 3