// DSA (Data Structures and Algorithms) concepts and implementations in JavaScript

// Linked List Implementation

// theory: Linked lists are linear data structures where elements (nodes) are stored in non-contiguous memory locations. Each node contains a value and a pointer to the next node in the sequence. This allows for efficient insertions and deletions, as nodes can be easily added or removed without needing to shift other elements, unlike arrays.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.display(); // output: 1 -> 2 -> 3