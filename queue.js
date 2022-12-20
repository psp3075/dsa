//FIFO
//head <- tail
//Dequeue , Enqueue

class Queue{
  constructor(){
    this.items = []
  }

  enqueue(item){
    this.items.push(item)
  }

  dequeue(){
    return this.items.shift()
  }

  isEmpty(){
    return this.items.length === 0
  }

  peek(){
    return !this.isEmpty()? this.items[0]:null
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString())
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
console.log(queue.isEmpty())

queue.print()
console.log(queue.size())