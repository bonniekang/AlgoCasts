// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head  = new Node(data, this.head)
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter ++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null
        }

        let node = this.head;

        while(node.next){
            node = node.next;
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return null
        }

        return this.head = this.head.next
    }

    removeLast(){
        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null
            return;
        }

        let node1 = this.head
        let node2 = this.head.next

        while(node2.next){
            node1 = node2
            node2 = node2.next
        }
        node1.next = null;
    }

    insertLast(data){
        /*
        if(!this.head){
            this.head = new Node(data, null);
        }

        let node = this.head

        while(node.next){
            node = node.next
        }

        node.next = new Node(data, null);
        */

        //reusable

        const lastNode = this.getLast()

        if(lastNode){
            lastNode.next = new Node(data)
        } else{
            this.head = new Node(data)
        }
    }

}

module.exports = { Node, LinkedList };
