class Node{
  constructor(data){
    this.value = data
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
  }
  
  addFirst(data){
    let node = new Node(data)
    node.next = this.head
    this.head = node
  }

  size(){
    if(!this.head){
     return 0
    }

    let count = 0
    let current = this.head

    while(current.next){
      count++
      current = current.next
    }

    return count
  }

  addAt(index, data){
    if(index > this.size() || index < 0){
      return;
    }

    const newNode = new Node(data)

    if(index == 0){
      newNode.next = this.head
      this.head = newNode
      return;
    }

    let current = this.head
    for(let i = 1; i<index; i++){
      current = current.next
    }

    newNode.next = current.next
    current.next = newNode
  }

  removeAt(index){
    if(index > this.size() || index < 0){
      return;
    }

    if(index == 0){
      this.head = this.head.next
      return;
    }

    let current = this.head
    for(let i = 1; i<index; i++){
      current = current.next
    }

    current.next = current.next.next
  }

  addLast(data){
    let node = new Node(data)
    if(!this.head){
      this.head = node
      return
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node
  }

  removeTop(){
    if(!this.head){
      return;
    }
    this.head = this.head.next
  }

  removeEnd(){
    if(!this.head){
      return;
    }

    if(!this.head.next){
      this.head = null
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null
  }


  print() {
    let current = this.head;
    while (current) {
      console.log(current.value)
      current = current.next;
    }
  }

}

const linkedListFunction = new LinkedList()

linkedListFunction.addFirst(1)
linkedListFunction.addFirst(2)
linkedListFunction.addFirst(3)
linkedListFunction.addAt(2, 5)
linkedListFunction.removeAt(3)

linkedListFunction.print()

//! practice problems links
//* https://leetcode.com/problems/palindrome-linked-list/
//* https://leetcode.com/problems/reverse-linked-list/
//* https://leetcode.com/problems/delete-node-in-a-linked-list/
//* https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//* https://leetcode.com/problems/add-two-numbers/
