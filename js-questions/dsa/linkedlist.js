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

    // Additional methods like delete, find, etc., can be added here

    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.display(); // output: 1 -> 2 -> 3
list.delete(2);
list.display(); // output: 1 -> 3
const foundNode = list.find(3);
console.log(foundNode ? `Found: ${foundNode.value}` : "Not Found"); // output: Found: 3