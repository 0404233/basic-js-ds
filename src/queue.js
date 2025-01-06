const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.current = null;
    this.top = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.current) {
      this.current.next = node;
    }

    this.current = node;

    if(this.top === null) {
      this.top = node;
    }
  }

  dequeue() {
    const deletingElement = this.top.value;
    this.top = this.top.next;
    return deletingElement;
  }
}

module.exports = {
  Queue
};
